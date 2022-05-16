import ReactLoading from 'react-loading'

export const Loading = () => {
	return (
		<div className="loading-container">
			<ReactLoading
				type="spinningBubbles"
				color="#000000"
				height={'20%'}
				width={'20%'}
			/>
		</div>
	)
}
