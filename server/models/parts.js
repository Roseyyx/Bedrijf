const mongoose = require('mongoose');
const Category = require('./category');

const PartsSchema = new mongoose.Schema({
    children: [Category.schema],

    PartName: {type: String, required: true},
    PartPrice: {type: Number, required: true},
    PartImage: {type: String, required: true},
    PartDescription: {type: String, required: true},
    PartCategory: Category.schema,
    PartDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Parts', PartsSchema);