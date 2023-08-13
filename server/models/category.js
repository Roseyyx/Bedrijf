const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    CategoryName: {type: String, required: true, enum: ['CPU', 'GPU', 'RAM', 'SSD', 'HDD', 'PSU', 'CASE', 'MOBO', 'COOLING']},
})

module.exports = mongoose.model('Category', CategorySchema);