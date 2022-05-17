import * as React from 'react'
import { Dialog, Button } from '../libraryUIComponents'
import { Form } from './form'
import { useAuth } from '../store/authProvider'

import '@reach/dialog/styles.css'

export const UnauthenticatedApp = () => {
	const [openModal, setOpenModal] = React.useState('none')
	const { login, register } = useAuth()

	const handleOpenModal = nameModal => {
		setOpenModal(nameModal)
	}

	const handleAuthentication = data => {
		openModal === 'login' ? login(data) : register(data)
	}

	const isOpen = openModal === 'login' || openModal === 'register'

	return (
		<div>
			<div
				css={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<div>
					<h1>Welcome Pokemon App </h1>
					<div style={{ display: 'flex', gap: '16px' }}>
						<Button onClick={() => handleOpenModal('register')}>
							Register
						</Button>
						<Button
							onClick={() => handleOpenModal('login')}
							variant="secondary"
						>
							Login
						</Button>
					</div>
				</div>
			</div>
			<Dialog
				aria-label="login-register"
				isOpen={isOpen}
				onDismiss={handleOpenModal}
			>
				<Form
					nameModal={openModal}
					handleAuthentication={handleAuthentication}
				/>
			</Dialog>
		</div>
	)
}
