const mongoose = require('mongoose');
const CPUSchema = require('./Parts/cpu');

const CategorySchema = new mongoose.Schema({
    children: [CPUSchema.schema],

    CPU: {type: CPUSchema.schema, required: false},
    GPU: {type: String, required: false},
    Motherboard: {type: String, required: false},
    RAM: {type: String, required: false},
    Storage: {type: String, required: false},
    PSU: {type: String, required: false},
    Case: {type: String, required: false},
    OperatingSystem: {type: String, required: false},
    CaseFans: {type: String, required: false},
    CPUCooler: {type: String, required: false},
})

module.exports = mongoose.model('Category', CategorySchema);