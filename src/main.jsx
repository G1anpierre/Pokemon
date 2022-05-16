import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokedexContextProvider } from './store/provider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<PokedexContextProvider>
			<App />
		</PokedexContextProvider>
	</React.StrictMode>
)
