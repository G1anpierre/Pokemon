import React from 'react'

export const useImperativeScroll = containerRef => {
	React.useLayoutEffect(() => {
		scrollToBottom()
	})

	const scrollToTop = () => {
		containerRef.current.scrollTop = 0
	}
	const scrollToBottom = () => {
		console.log('containerRef :', containerRef)
		containerRef.current.scrollTop = containerRef.current.scrollHeight
	}

	containerRef.current = {
		scrollToTop,
		scrollToBottom,
	}

	return { scrollToBottom, scrollToTop }
}
