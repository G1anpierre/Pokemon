import './App.css'
import { AuthenticatedApp } from './components/authenticated'
import { UnauthenticatedApp } from './components/unAuthenticated'

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from './firebase-config'
import { useUser } from './hooks/useUser'

export default function App() {
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

	return (
		<div>
			{user ? (
				<AuthenticatedApp logout={logout} user={user} />
			) : (
				<UnauthenticatedApp login={login} register={register} />
			)}
		</div>
	)
}
