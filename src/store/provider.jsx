import { createContext, useContext } from 'react'
import { useResultPokemon } from '../hooks/useResultPokemon'
import { useGetPokemons } from '../hooks/useGetPokemon'
import { useSearch } from '../hooks/useSearch'
import { useDarkMode } from '../hooks/useDarkMode'
import { useGetSpecificPokemon } from '../hooks/useGetSpecificPokemon'

const PokedexContext = createContext()
const PokedexDispatchContext = createContext()

export const PokedexContextProvider = ({ children }) => {
	const DEFAULT_POKEMON_INITIAL_RESULTS = 100
	const { selectNumber, handleSelectNumber } = useResultPokemon(
		DEFAULT_POKEMON_INITIAL_RESULTS
	)
	const { pokemons, state, error } = useGetPokemons(
		selectNumber || DEFAULT_POKEMON_INITIAL_RESULTS
	)
	const { pokemonSearch, handleSearch } = useSearch()
	const { darkModeStatus, handleDarkMode } = useDarkMode()
	const { specificPokemonInfo, setSpecificPokemon, specificPokemon } =
		useGetSpecificPokemon()

	const value = {
		pokemons,
		state,
		error,
		pokemonSearch,
		darkModeStatus,
		selectNumber,
		specificPokemonInfo,
		specificPokemon,
	}

	const dispatch = {
		handleSelectNumber,
		handleSearch,
		handleDarkMode,
		setSpecificPokemon,
	}

	return (
		<PokedexContext.Provider value={value}>
			<PokedexDispatchContext.Provider value={dispatch}>
				{children}
			</PokedexDispatchContext.Provider>
		</PokedexContext.Provider>
	)
}

export const usePokedexContext = () => {
	const pokedexContext = useContext(PokedexContext)
	if (pokedexContext === undefined) {
		throw new Error('usePokedexContext must be used within a CounterProvider')
	}
	return pokedexContext
}

export const usePokedexDispatchContext = () => {
	const pokedexDispatchContext = useContext(PokedexDispatchContext)
	if (pokedexDispatchContext === undefined) {
		throw new Error(
			'usePokedexDispatchContext must be used within a CounterProvider'
		)
	}
	return pokedexDispatchContext
}
