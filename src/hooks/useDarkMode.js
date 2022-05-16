import { useState, useEffect } from 'react'

export const useDarkMode = () => {
	const initialDarkModeState = () => {
		return JSON.parse(localStorage.getItem('darkMode'))
	}
	const [darkmode, setDarkMode] = useState(initialDarkModeState() || false)

	const handleDarkMode = () => {
		setDarkMode(!darkmode)
	}

	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(darkmode))
	}, [darkmode])

	const darkModeStatus = darkmode ? 'darkmode-off' : 'darkmode-on'
	return { darkModeStatus, handleDarkMode }
}
