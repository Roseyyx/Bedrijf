/** @format */

import axios from 'axios'

const url = 'http://localhost:5000/api/products'

class ProducService {
	// Create Product
	static insertProduct(text) {
		return axios.post(
			url,
			{
				text
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
	}

	// Read Product
	static getProducts() {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(url)
				const data = res.data
				resolve(
					data.map(product => ({
						...product
					}))
				)
			} catch (err) {
				reject(err)
			}
		})
	}

	static getProductsByCategory(category){
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(`${url}/${category}`)
				const data = res.data
				resolve(
					data.map(product => ({
						...product
					}))
				)
			} catch (err) {
				reject(err)
			}
		})
	}

	static getProductsAndSortByPrice() {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			try {
				const products = await this.getProducts()
				products.sort((a, b) => (a.price > b.price ? 1 : -1))
                resolve(products)
			} catch (err) {
				reject(err)
			}
		})
	}

	// Update Product
	static updateProduct(text) {
		return axios.put(url, {
			text
		})
	}

	// Delete Product
	static deleteProduct(id) {
		return axios.delete(`${url}${id}`)
	}
}

export default ProducService
