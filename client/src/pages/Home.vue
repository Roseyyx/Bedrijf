<!-- @format -->
<template>
	<section class="home">
		<h1 class="intro">Beste keuzes</h1>
		<div class="productContainer">
			<!--TODO Minimum price fix from api-->
			<router-link to="Gaming" class="product">
				<h1>Gaming</h1>
				<img src="@/assets/gaming.jpg" alt="product" />
				<p>Is het doel om alleen te gamen op de computer, dan is deze optie perfect. Veel keuze in onze configurator die de computer uniek maakt!</p>
				<h2 class="bottom">Start vanaf <strong class="prijs">?,-</strong></h2>
			</router-link>
			<router-link to="Video" class="product">
				<h1>Video Production</h1>
				<img src="@/assets/editing.jpg" alt="product" />
				<p>Is de computer bedoelt voor video-editen, 3D of rendering. Dan zijn deze computers ideaal. Met hoge CPU snelheden per core, bent u zeker dat uw project snel klaar is!</p>
				<h2 class="bottom">Start vanaf <strong class="prijs">?,-</strong></h2>
			</router-link>
			<router-link to="Streaming" class="product">
				<h1>Streaming</h1>
				<img src="@/assets/streaming.jpeg" alt="product" />
				<p>
					Heb je al een computer, of wil je gamen combineren met streamer/opnemen. Dan zijn deze configuraties een goede keuze. Deze computers zijn uitgerust met NVIDIA video-kaarten, voor
					betere streaming prestaties!
				</p>
				<h2 class="bottom">Start vanaf <strong class="prijs">?,-</strong></h2>
			</router-link>
			<router-link to="Hybrid" class="product">
				<h1>Hybride</h1>
				<img src="@/assets/hybrid.jpg" alt="product" />
				<p>Wil je gamen, editen en streamen dan zijn deze computers het beste. Deze computers bieden alle 3 de opties in 1!</p>
				<h2 class="bottom">Start vanaf <strong class="prijs">?,-</strong></h2>
			</router-link>
		</div>
		<div class="infoSpanner">
			<div class="textComponent">
				<h1><font-awesome-icon icon="fa-solid fa-plug" /> Plug & Play</h1>
			</div>
			<div class="textComponent">
				<h1><font-awesome-icon icon="fa-solid fa-truck-fast" /> Gratis bezorging vanaf 700,-</h1>
			</div>
			<div class="textComponent">
				<h1><font-awesome-icon icon="fa-solid fa-hammer" /> Volledig custom gebouwd</h1>
			</div>
			<div class="textComponent">
				<h1><font-awesome-icon icon="fa-solid fa-check" /> 2 Jaar gratis garantie</h1>
			</div>
		</div>
	</section>
</template>

<script>
/*eslint-disable*/

export default {
	name: 'Home',
	components: {}
}
</script>

<style lang="scss">
.home {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	text-align: center;
	flex-direction: column;
    padding-top: 4rem;

	.intro {
		font-size: 3rem;
		margin-bottom: 2rem;
		font-weight: bold;
	}

	.productContainer {
		display: grid;
		grid-auto-rows: 1fr;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 2rem;
		margin: 0 200px;

		.product {
			display: flex;
			flex-direction: column;
			border-radius: 10px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
			padding: 2rem;
			transition: all 0.2s ease-in-out;
			cursor: pointer;
			text-decoration: none;
			color: black;

			&:hover {
				transform: scale(1.05);
			}

			h1 {
				font-size: 2rem;
				margin-bottom: 1rem;
			}

			img {
				width: 100%;
				height: 200px;
				object-fit: cover;
				margin-bottom: 1rem;
				border-radius: 10px;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
			}

			p {
				margin-bottom: 1rem;
				font-size: 18px;
			}

			.bottom {
				margin-top: auto;
				font-size: 1.5rem;
			}

			.prijs {
				color: #00b894;
				font-weight: bold;
				font-size: 2rem;
			}
		}
	}

	.infoSpanner {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 2rem;
		padding: 0 200px;
		background-color: #00b894;

		.textComponent {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			border-radius: 10px;
			padding: 2rem;
			h1 {
				transition: all 0.5s ease-in-out;

				&:hover {
					color: #fff;
				}
			}
		}
	}
}
</style>
