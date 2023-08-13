const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

// Create Product
router.post('/', async (req, res) => {
    const newProduct = new Product({
        ProductName: req.body.ProductName,
        ProductPrice: req.body.ProductPrice,
        ProductImage: req.body.ProductImage,
        ProductDescription: req.body.ProductDescription,
        ProductCategory: req.body.ProductCategory,
        ProductParts: req.body.ProductParts,
    });
    try {
        const product = await newProduct.save();
        if (!product) throw Error('Something went wrong saving the product');
        res.status(200).json(product);
    } catch (e) {
        res.status(400).json({msg: e.message});
    }
})

// Read Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) throw Error('No products');
        res.status(200).json(products);
    } catch (e) {
        res.status(400).json({msg: e.message});
    }
});

// Update Product
router.put('/:id', async (req, res) => {
    const updatedInfo = new Product({
        ProductName: req.body.ProductName,
        ProductPrice: req.body.ProductPrice,
        ProductImage: req.body.ProductImage,
        ProductDescription: req.body.ProductDescription,
        ProductCategory: req.body.ProductCategory,
        ProductParts: req.body.ProductParts,
    });

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, updatedInfo);
        if (!product) throw Error('Something went wrong updating the product');
        res.status(200).json({success: true});
    } catch (error) {
        res.status(400).json({msg: e.message, success: false});
    }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) throw Error('No product found');
        res.status(200).json({success: true});
    } catch (e) {
        res.status(400).json({msg: e.message, success: false});
    }
});

module.exports = router;