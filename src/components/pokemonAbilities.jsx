import { usePokedexContext } from '../store/provider'
import { abilities } from '../utilities'

export const PokemonAbilities = () => {
	const { specificPokemonInfo } = usePokedexContext()
	const abilitiesNames = abilities(specificPokemonInfo)

	if (abilitiesNames) {
		return abilitiesNames.map(ability => <span key={ability}>{ability}</span>)
	} else {
		return null
	}
}
