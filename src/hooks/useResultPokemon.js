import { useState, useEffect } from 'react'

export const useResultPokemon = pokemonInitialResult => {
	const initialNumberOfResults = () => {
		return JSON.parse(localStorage.getItem('initialNumberOfResults'))
	}

	const [selectNumber, setSelectNumber] = useState(
		initialNumberOfResults() || pokemonInitialResult
	)

	useEffect(() => {
		localStorage.setItem('initialNumberOfResults', JSON.stringify(selectNumber))
	}, [selectNumber])

	const handleSelectNumber = e => {
		setSelectNumber(e.target.value)
	}

	return { selectNumber, handleSelectNumber }
}
