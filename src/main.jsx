import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokedexContextProvider } from './store/provider'
import { AuthContextProvider } from './store/authProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContextProvider>
			<PokedexContextProvider>
				<App />
			</PokedexContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
)
