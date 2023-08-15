const mongoose = require('mongoose');

const PSUSchema = new mongoose.Schema({
    PSUName: {type: String, required: false},
    PSUImage: {type: String, required: false},
    PSUPrice: {type: Number, required: false},
    PSUManufacturer: {type: String, required: false},
    PSUFormFactor: {type: String, required: false},
    PSUWattage: {type: Number, required: false},
    PSUColor: {type: String, required: false},
    PSURating: {type: String, required: false},
    PSUModular: {type: Boolean, required: false},
    PSUEfficiency: {type: Number, required: false},
})

module.exports = mongoose.model('PSUSchema', PSUSchema);