const mongoose = require('mongoose');

const CPUSchema = new mongoose.Schema({
    ProcessorName: {type: String, required: false},
    ProcessorSpeed: {type: Number, required: false},
    ProcessorTurboSpeed: {type: Number, required: false},
    ProcessorCores: {type: Number, required: false},
    ProcessorThreads: {type: Number, required: false},
    ProcessorCache: {type: Number, required: false},
    ProcessorCacheType: {type: String, required: false},
    ProcessorSocket: {type: String, required: false},
    ProcessorIntegratedGraphics: {type: Boolean, required: false},
    ProcessorTDP: {type: Number, required: false},
    ProcessorCompany: {type: String, required: false},
    ProcessorCooler: {type: Boolean, required: false},
})

module.exports = mongoose.model('CPUSchema', CPUSchema);