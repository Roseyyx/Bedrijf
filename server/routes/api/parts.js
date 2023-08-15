const express = require('express');
const router = express.Router();
const Part = require('../../models/parts');

// Create Part
router.post('/', async (req, res) => {
    const part = new Part({
        PartName: req.body.PartName,
        PartPrice: req.body.PartPrice,
        PartImage: req.body.PartImage,
        PartDescription: req.body.PartDescription,
        PartCategory: req.body.PartCategory
    });

    try {
        const savedPart = await part.save();
        if (!savedPart) throw Error('Something went wrong saving the part');
        res.status(200).json(savedPart);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
})

// Read Part
router.get('/', async (req, res) => {
    try {
        const part = await Part.find({'name': new RegExp(req.body.id, 'i')});
        if (!part) throw Error('No part found');
        res.status(200).json(part);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});

// Update Part
router.put('/:id', async (req, res) => {
});

// Delete Part
router.delete('/:id', async (req, res) => {
});

module.exports = router;