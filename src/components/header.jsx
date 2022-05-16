import { usePokedexContext } from '../store/provider'

import { Navbar } from './navbar'

export const Header = ({ user, logout }) => {
	const { darkModeStatus } = usePokedexContext()

	return (
		<header
			className={`header ${darkModeStatus}`}
			css={{
				display: 'grid',
			}}
		>
			<Navbar user={user} logout={logout} />
			<h1
				css={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				Pokedex
			</h1>
		</header>
	)
}
