<!-- @format -->

<template>
	<div class="topleft">
		<h1>Gaming PC <span>Configurator</span></h1>
		<h2>
			Stap 1 <span>Computer Kast</span>
			<!--TODO: Current item-->
		</h2>
	</div>
	<div class="productContainer" v-for="(product, index) in products" v-bind:item="product" v-bind:index="index" v-bind:key="product.id">
		<div class="product">
			<div class="product__image">
				<img :src="require(`../assets/${product.image}`)" alt="product" />
			</div>
			<div class="product__info">
				<h2>{{ product.name }}</h2>
				<h3>€{{ product.price }}</h3>
				<p>{{ product.description }}</p>
				<label for="" v-if="product.options">Kleur</label>
				<select name="" id="" v-if="product.options" v-on:change="handleChange">
					<option :value="option" v-for="(option, index) in product.options" v-bind:item="option" v-bind:index="index" v-bind:key="option">{{ option }}</option>
				</select>
				<button v-on:click="addToStorage(product.id, product.price)">Selecteer</button>
			</div>
		</div>
	</div>
</template>

<script>
import ProductService from '../ProductService'

export default {
	name: 'CaseComponent',
	data() {
		return {
			products: [],
			error: '',
			text: '',
			selected: 'Zwart'
		}
	},
	async created() {
		try {
			this.products = await ProductService.getProductsByCategory('case')
		} catch (error) {
			console.log(error)
			this.error = error.message
		}
	},
	methods: {
		handleChange(e) {
			this.selected = e.target.value
		},
		addToStorage(id, price) {
			let item = {
				id: id,
				price: price,
				color: this.selected
			}
			localStorage.setItem('case', JSON.stringify(item))
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
