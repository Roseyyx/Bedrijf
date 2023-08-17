<!-- @format -->
<template>
	<section class="gaming">
		<div class="configurator">
			<div class="container">
				<CaseComponent v-if="index == 0"/>
				<CheckoutComponent v-if="index == 1"/>
				<button v-on:click="decreaseIndex()">Vorige Stap</button>
				<button v-on:click="incrementIndex()">Volgende Stap</button>
			</div>
		</div>
	</section>
</template>

<script>
import CaseComponent from '../components/CaseComponent.vue'
import CheckoutComponent from '../components/CheckoutComponent.vue'
/*eslint-disable*/

export default {
	name: 'Gaming',
	components: {CaseComponent, CheckoutComponent},
	data() {
		return {
			index: 0,
		}
	},
	methods: {
		decreaseIndex(){
			this.index--
		},
		incrementIndex(){
			this.index++
		}
	},
}
</script>

<style lang="scss">
.gaming {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	flex-direction: column;
	padding-top: 80px;

	.configurator {
		width: 100%;
		max-width: 100%;
		margin: 20px auto;
		padding: 0 20px;

		.container {
			width: 60%;
			margin: 0 auto;
			max-width: 1400px;

			.topleft {
				h1 {
					font-size: 2rem;
					font-weight: 500;

					span {
						font-size: 2rem;
						font-weight: 500;
						color: #00b894;
					}
				}

				h2 {
					margin-top: 2rem;

					span {
						margin-left: 10px;
						color: #00b894;
					}
				}
			}

			.product {
				display: flex;
				flex-direction: row;
				border-top: 1px solid #dfe6e9;
				padding: 1rem 0;

				&__image {
					margin-right: 2rem;
					img {
						width: 100%;
					}
				}

				&__info {
					max-width: 85%;
					h2 {
						margin-top: 0;
						font-size: 1.2rem;
						font-weight: 500;
					}

					h3 {
						font-size: 1.1rem;
						font-weight: 400;
						color: #00b894;
						padding-bottom: 1rem;
					}

					p {
						font-size: 0.9rem;
						font-weight: 300;
						padding-bottom: 2rem;
					}

					label {
						font-size: 0.9rem;
						font-weight: 300;
						padding-bottom: 0.5rem;
						padding-right: 0.5rem;
					}

					select {
						padding: 0.5rem;
						border: 1px solid #dfe6e9;
						border-radius: 5px;
						margin-bottom: 1rem;

						&:focus {
							outline: none;
							border: 1px solid #00b894;
						}

						option {
							padding: 0.5rem;
						}
					}

					button {
						padding: 0.5rem 1rem;
						border: 1px solid #dfe6e9;
						border-radius: 5px;
						background-color: #00b894;
						color: #fff;
						font-size: 0.9rem;
						font-weight: 300;
						cursor: pointer;
						transition: all 0.2s ease-in-out;
						/*Make the button not appear next to the select menu but underneath it*/
						display: block;

						&:hover {
							background-color: #fff;
							color: #00b894;
							border: 1px solid #00b894;
						}
					}
				}
			}
		}
	}
}
</style>
