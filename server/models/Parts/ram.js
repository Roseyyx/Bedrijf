const mongoose = require('mongoose');

const RAMSchema = new mongoose.Schema({
    RAMName: {type: String, required: false},
    RAMType: {type: String, required: false},
    RAMSize: {type: String, required: false},
    RAMSpeed: {type: String, required: false},
    RAMPrice: {type: String, required: false},
    RAMImage: {type: String, required: false},
    RAMTimings: {type: String, required: false},
    RAMRgb: {type: Boolean, required: false},
    RAMManufacturer: {type: String, required: false},
})

module.exports = mongoose.model('RAMSchema', RAMSchema);