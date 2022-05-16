import { usePokedexContext } from '../store/provider'
import { Loading } from './loading'
import { PokemonList } from './pokemonList'

export const SearchResults = ({ isPending }, ref) => {
	const { pokemons } = usePokedexContext()

	return (
		<div>
			<div
				css={{
					maxWidth: 1280,
					margin: 'auto',
					padding: 10,
					overflowY: 'auto',
					maxHeight: 600,
				}}
				ref={ref}
			>
				<div>{isPending && !!pokemons ? <Loading /> : <PokemonList />}</div>
			</div>
		</div>
	)
}
