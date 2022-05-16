import { usePokedexContext } from '../store/provider'
import { PokemonAbilities } from './pokemonAbilities'
import { mq } from '../styles/media-query'

export const PokemonDetailInfo = () => {
	const { specificPokemonInfo } = usePokedexContext()

	return (
		<section>
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
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<h1>Pokemon Detail Info</h1>
					<h3>{specificPokemonInfo?.name}</h3>
				</div>
				<div
					css={{
						display: 'grid',
						gridTemplateColumns: '1fr',
						justifyItems: 'center',
						[mq.medium]: {
							gridTemplateColumns: '1fr 1fr',
							alignItems: 'center',
						},
					}}
				>
					<figure
						css={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<img
							src={specificPokemonInfo?.sprites?.front_default}
							alt={`${specificPokemonInfo?.name}`}
							height={200}
							width={200}
						/>
					</figure>
					<div
						css={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
						}}
					>
						<div>
							<p>height :</p>
							<p>weight :</p>
							<p>abilities :</p>
						</div>
						<div>
							<p>{specificPokemonInfo?.height} cm</p>
							<p>{specificPokemonInfo?.weight} Kg</p>
							<p>
								<PokemonAbilities />
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
