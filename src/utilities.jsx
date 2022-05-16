export const filterPokemons = (pokemons, pokemonSearch) => {
	return pokemons.filter(pokemon =>
		pokemon.name.toLowerCase().includes(pokemonSearch.toLocaleLowerCase())
	)
}

export const withHightlighter = (name, pokemonSearch) => {
	const parts = name.split(new RegExp(`(${pokemonSearch})`))
	return (
		<span>
			{parts.map((part, index) => (
				<span
					key={index}
					className={
						part.toLowerCase() === pokemonSearch.toLowerCase()
							? 'heightlight'
							: ''
					}
				>
					{part}
				</span>
			))}
		</span>
	)
}

export const abilities = pokemon => {
	const abilitiesNames = pokemon?.abilities?.map(ability => {
		return ability.ability.name
	})
	return abilitiesNames
}
