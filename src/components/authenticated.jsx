import React from 'react'
import { Interactions } from './interactions'
import { Error } from './error'
import { Header } from './header'
import { PokemonDetailInfo } from './pokemonDetailInfo'
import { usePokedexContext } from '../store/provider'
import { SearchResults } from './searchResults'
import { ButtonsHeader } from './buttonsHeader'

const SearchResultsPassRef = React.forwardRef(SearchResults)

export const AuthenticatedApp = ({ logout, user }) => {
	const { darkModeStatus, error, state } = usePokedexContext()
	const containerRef = React.useRef()

	const scrollToTop = () => {
		containerRef.current.scrollTop = 0
	}
	const scrollToBottom = () => {
		containerRef.current.scrollTop = containerRef.current.scrollHeight
	}

	if (error) {
		return <Error error={error} />
	}

	const isPending = state === 'pending'

	return (
		<div className={`${darkModeStatus}`}>
			<Header user={user} logout={logout} />
			<Interactions />
			<PokemonDetailInfo />
			<ButtonsHeader
				scrollToTop={scrollToTop}
				scrollToBottom={scrollToBottom}
			/>
			<SearchResultsPassRef isPending={isPending} ref={containerRef} />
		</div>
	)
}
