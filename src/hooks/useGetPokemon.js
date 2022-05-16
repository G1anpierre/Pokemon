import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'pending':
			return { state: 'pending', pokemons: [], error: null }

		case 'resolved':
			return { state: 'resolved', pokemons: action.pokemon, error: null }
		case 'rejected':
			return { state: 'rejected', pokemons: null, error: action.error }
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

export const useGetPokemons = numberOfPokemons => {
	const initialState = { state: 'idle', pokemons: [], error: null }

	const [{ pokemons, state, error }, dispatch] = useReducer(
		reducer,
		initialState
	)

	useEffect(() => {
		const getPokemons = async () => {
			try {
				dispatch({ type: 'pending' })
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemons}`
				)
				const data = await response.json()
				dispatch({ type: 'resolved', pokemon: data.results })
			} catch (e) {
				dispatch({ type: 'rejected' })
			}
		}
		getPokemons()
	}, [numberOfPokemons])

	return { pokemons, state, error }
}
