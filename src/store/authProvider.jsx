import { createContext, useContext } from 'react'
import { auth } from '../firebase-config'
import { useUser } from '../hooks/useUser'

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

const AuthContext = createContext()

export const AuthContextProvider = props => {
	const user = useUser()

	const login = async data => {
		const { email, password } = data
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.log(error.message)
		}
	}

	const register = async data => {
		const { email, password } = data
		try {
			await createUserWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.log(error.message)
		}
	}

	const logout = async () => {
		await signOut(auth)
	}

	const value = {
		login,
		register,
		logout,
		user,
	}

	return <AuthContext.Provider value={value} {...props} />
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within a AuthContextProvider')
	}
	return context
}
