const mongoose = require('mongoose');

const CPUSchema = new mongoose.Schema({
    ProcessorName: {type: String, required: true},
    ProcessorSpeed: {type: Number, required: true},
    ProcessorTurboSpeed: {type: Number, required: true},
    ProcessorCores: {type: Number, required: true},
    ProcessorThreads: {type: Number, required: true},
    ProcessorCache: {type: Number, required: true},
    ProcessorCacheType: {type: String, required: true},
    ProcessorSocket: {type: String, required: true},
    ProcessorIntegratedGraphics: {type: Boolean, required: true},
    ProcessorTDP: {type: Number, required: true},
    ProcessorCompany: {type: String, required: true},
    ProcessorCooler: {type: Boolean, required: true},
})

module.exports = mongoose.model('CPUSchema', CPUSchema);