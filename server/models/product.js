const mongoose = require('mongoose');
const Parts = require('./parts');

const ProductSchema = new mongoose.Schema({
    children: [Parts.schema],

    ProductName: {type: String, required: true},
    ProductPrice: {type: Number, required: true},
    ProductImage: {type: String, required: false},
    ProductDescription: {type: String, required: false},
    ProductCategory: {type: String, required: false},
    ProductParts: {type: Parts.schema, required: false},
    ProductDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Product', ProductSchema);