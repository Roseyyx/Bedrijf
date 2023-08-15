const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
    CaseName: {type: String, required: false},
    CaseType: {type: String, required: false},
    CaseFormFactors: {type: Array, required: false},
    CaseColor: {type: String, required: false},
    CasePrice: {type: Number, required: false},
    CaseManufacturer: {type: String, required: false},
    CaseImage: {type: String, required: false},
    CaseInstalledFans: {type: Array, required: false},
})

module.exports = mongoose.model('CaseSchema', CaseSchema);