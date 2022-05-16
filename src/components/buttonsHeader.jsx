import { Button } from '../libraryUIComponents'

export const ButtonsHeader = ({ scrollToTop, scrollToBottom }) => {
	return (
		<div>
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
					}}
				>
					<Button className="header-pageup" onClick={scrollToTop}>
						Scroll List Up
					</Button>
					<Button className="header-pagedown" onClick={scrollToBottom}>
						Scroll list Down
					</Button>
				</div>
			</div>
		</div>
	)
}
