import { Button } from '../libraryUIComponents'
import { usePokedexContext, usePokedexDispatchContext } from '../store/provider'
import { mq } from '../styles/media-query.js'

export const Navbar = ({ user, logout }) => {
	const { darkModeStatus } = usePokedexContext()
	const { handleDarkMode } = usePokedexDispatchContext()

	return (
		<nav
			css={{
				background: 'purple',
			}}
		>
			<div
				css={{
					maxWidth: 1280,
					margin: 'auto',
					padding: '10px',
				}}
			>
				<div
					css={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div
						css={{
							width: '30px',
						}}
					>
						<img
							src="/pikachu-logo.png"
							css={{
								background: 'transparent',
								width: '100%',
								aspectRatio: '5/4',
								display: 'none',
								[mq.medium]: {
									display: 'block',
								},
							}}
						/>
					</div>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						<span>Hello! {user.email}</span>
						<Button variant="secondary" onClick={logout}>
							LogOut
						</Button>
						<Button className="header-darkmode-button" onClick={handleDarkMode}>
							{darkModeStatus}
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
