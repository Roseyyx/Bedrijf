<!-- @format -->

<template>
	<div class="container">
		<h1>Latest Product</h1>
		<!-- CREATE PRODUCT -->
		<p class="error" v-if="error">{{ error }}</p>
		<div class="product-container">
			<div class="product" v-for="(product, index) in products" v-bind:item="product" v-bind:index="index" v-bind:key="product._id">
				{{ `${product.createdAt.getDate()}/${product.createdAt.getMonth()}/${product.createdAt.getFullYear()}` }}
				<p class="text">{{ product.ProductName }}</p>
				<p class="number">{{ product.ProductPrice }}</p>
				<p class="text">{{ product.ProductImage }}</p>
				<p class="text">{{ product.ProductDescription }}</p>
				<p class="text">{{ product.ProductCategory }}</p>
				<div class="part" v-for="(part, index) in product.ProductParts" v-bind:item="part" v-bind:index="index" v-bind:key="part._id">
					<p class="text">{{ part.PartName }}</p>
					<p class="number">{{ part.PartPrice }}</p>
					<p class="text">{{ part.PartImage }}</p>
					<p class="text">{{ part.PartDescription }}</p>
				</div>
				<button v-on:click="deleteProduct(product._id)">X</button>
			</div>
		</div>
	</div>
</template>

<script>
import ProductService from '../ProductService'

export default {
	name: 'ProductComponent',
	data() {
		return {
			products: [],
			error: '',
			text: ''
		}
	},
	async created() {
		try {
			this.products = await ProductService.getProducts()
		} catch (error) {
			this.error = error.message
		}
	},
	methods: {
		async deleteProduct(id) {
			await ProductService.deleteProduct(id)
			this.products = await ProductService.getProducts()
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
</style>
