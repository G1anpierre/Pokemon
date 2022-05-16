import * as React from 'react'

export const useIsComponentMounted = () => {
	const mountedRef = React.useRef(false)
	React.useEffect(() => {
		mountedRef.current = true
		return () => {
			mountedRef.current = false
		}
	}, [])

	const isMounted = mountedRef.current

	return { isMounted }
}
