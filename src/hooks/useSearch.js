import { useState, useEffect } from 'react'

export const useSearch = () => {
	const initialSearchWordSPokemonState = () => {
		return JSON.parse(localStorage.getItem('searchPokemonWord'))
	}
	const [pokemonSearch, setPokemonSearch] = useState(
		initialSearchWordSPokemonState() || ''
	)

	const handleSearch = e => {
		setPokemonSearch(e.target.value)
	}

	useEffect(() => {
		localStorage.setItem('searchPokemonWord', JSON.stringify(pokemonSearch))
	}, [pokemonSearch])

	return { pokemonSearch, handleSearch }
}
