import { useRef, useEffect } from 'react'
import { filterPokemons } from '../utilities'
import { usePokedexContext, usePokedexDispatchContext } from '../store/provider'
import { Input, InputNumber } from '../libraryUIComponents'

export const Interactions = () => {
	const inputRef = useRef(null)
	const { pokemonSearch, pokemons, selectNumber } = usePokedexContext()

	const { handleSelectNumber, handleSearch } = usePokedexDispatchContext()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<section>
			<div
				css={{
					display: 'flex',
					justifyContent: 'center',
					margin: '25px 0',
				}}
			>
				<Input
					type="text"
					placeholder="Search Your Pokemon"
					onChange={e => handleSearch(e)}
					value={pokemonSearch}
					ref={inputRef}
				/>
			</div>
			<div
				css={{
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<div
					css={{
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
					}}
				>
					<label htmlFor="initial-results">
						Set initial results of pokemons:{' '}
					</label>
					<div>
						<InputNumber
							type="number"
							value={selectNumber}
							onChange={e => handleSelectNumber(e)}
							min={1}
							max={200}
							required
							className="pokemon-input-number"
							id="initial-results"
						/>
						<span className="validity" />
					</div>
				</div>
				<div
					css={{
						textAlign: 'center',
					}}
				>
					Total results {filterPokemons(pokemons, pokemonSearch).length}
				</div>
			</div>
		</section>
	)
}
