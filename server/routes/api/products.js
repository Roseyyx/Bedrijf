const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Create Product
router.post('/', async (req, res) => {
    const products = await loadProductsCollection();
    await products.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });

    res.status(201).send();
})

// Read Products
router.get('/', async (req, res) => {
    const products = await loadProductsCollection();

    res.send(await products.find({}).toArray());
});

// Update Product
router.put('/:id', async (req, res) => {
    const products = await loadProductsCollection();
    await products.updateOne({
        _id: new mongodb.ObjectId(req.params.id)
    }, {
        $set: {
            text: req.body.text
        }
    });

    res.status(200).send();
});

// Delete Product
router.delete('/:id', async (req, res) => {
    const products = await loadProductsCollection();
    await products.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });

    res.status(200).send();
});

async function loadProductsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/bedrijf', {
        useNewUrlParser: true
    });

    return client.db('bedrijf').collection('products');
}

module.exports = router;