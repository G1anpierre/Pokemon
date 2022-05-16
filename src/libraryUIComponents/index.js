import styled from '@emotion/styled'
import { Dialog as ReachDialog } from '@reach/dialog'
import { colors } from '../styles/colors'

const Dialog = styled(ReachDialog)({
	maxWidth: '450px',
	borderRadius: '3px',
	paddingBottom: '3.5em',
	boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
	margin: '20vh auto',
})

const buttonVariants = {
	primary: {
		background: colors.primary,
		color: colors.base,
	},
	secondary: {
		background: colors.secondary,
		color: colors.text,
	},
}
const Button = styled.button(
	{
		padding: '10px 15px',
		border: '0',
		lineHeight: '1',
		borderRadius: '3px',
		cursor: 'pointer',
	},
	({ variant = 'primary' }) => buttonVariants[variant]
)

const Input = styled.input({
	padding: '10px 0',
	borderRadius: '7px',
	border: '2px solid black',
	textAlign: 'center',
})

const InputNumber = styled.input({
	width: '4rem',
	height: '2rem',
	textAlign: 'center',
	border: 'none',
})

export { Dialog, Button, Input, InputNumber }
