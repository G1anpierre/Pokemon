import './App.css'
import { AuthenticatedApp } from './components/authenticated'
import { UnauthenticatedApp } from './components/unAuthenticated'
import { useAuth } from './store/authProvider'

export default function App() {
	const { user } = useAuth()

	return <div>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
}
