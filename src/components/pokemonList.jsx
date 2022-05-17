import { filterPokemons, withHightlighter } from '../utilities'
import { usePokedexContext, usePokedexDispatchContext } from '../store/provider'

export const PokemonList = () => {
	const { pokemonSearch, pokemons, specificPokemon } = usePokedexContext()
	const { setSpecificPokemon } = usePokedexDispatchContext()

	const handleSelectedPokemon = name => {
		setSpecificPokemon(name)
	}

	return (
		<section>
			<ul
				id="results"
				css={{
					listStyle: 'none',
					marginLeft: '0',
					marginRight: '0',
					padding: '0',
					display: 'grid',
					justifyItems: 'center',
					gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
				}}
			>
				{filterPokemons(pokemons, pokemonSearch).map(({ name }, index) => (
					<li key={`${name}-${index}`}>
						<h3
							css={{
								color: `${specificPokemon === name ? 'greenyellow' : ''}`,
								'&:hover': {
									cursor: 'pointer',
									color: 'purple',
								},
							}}
							onClick={() => handleSelectedPokemon(name)}
						>
							{withHightlighter(name, pokemonSearch)}
						</h3>
					</li>
				))}
			</ul>
		</section>
	)
}
