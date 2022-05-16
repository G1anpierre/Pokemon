import * as React from 'react'

export const useGetSpecificPokemon = () => {
	const [specificPokemon, setSpecificPokemon] = React.useState('charizard')
	const [specificPokemonInfo, setSpecificPokemonInfo] = React.useState(null)

	React.useEffect(() => {
		const getSpecifiPokemon = async () => {
			try {
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${specificPokemon}`
				)
				const data = await response.json()
				setSpecificPokemonInfo(data)
			} catch (e) {
				console.log('error :', e)
			}
		}
		if (specificPokemon) {
			getSpecifiPokemon()
		}
	}, [specificPokemon])

	return { specificPokemonInfo, setSpecificPokemon, specificPokemon }
}
