const mongoose = require('mongoose');
const Parts = require('./parts');

const ProductSchema = new mongoose.Schema({
    children: [Parts.schema],

    ProductName: {type: String, required: true},
    ProductPrice: {type: Number, required: true},
    ProductImage: {type: String, required: true},
    ProductDescription: {type: String, required: true},
    ProductCategory: {type: String, required: true},
    ProductParts: [Parts.schema],
    ProductDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Product', ProductSchema);