import * as React from 'react'
import { Button, Input } from '../libraryUIComponents'

export const Form = ({ nameModal, handleAuthentication }) => {
	const emailRef = React.useRef()
	const passwordRef = React.useRef()

	const handleSubmit = event => {
		event.preventDefault()
		const data = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}
		handleAuthentication(data)
	}

	return (
		<div>
			<h2
				css={{
					textTransform: 'uppercase',
				}}
			>
				{nameModal}
			</h2>
			<form
				onSubmit={handleSubmit}
				css={{
					display: 'grid',
					gap: '10px',
				}}
			>
				<label htmlFor="email">email:</label>
				<Input type="email" id="email" name="email" ref={emailRef} />
				<label htmlFor="password">password:</label>
				<Input
					type="password"
					id="password"
					name="password"
					ref={passwordRef}
				/>
				<Button>{nameModal}</Button>
			</form>
		</div>
	)
}
