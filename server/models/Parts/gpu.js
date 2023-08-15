const mongoose = require('mongoose');

const GPUSchema = new mongoose.Schema({
    GPUName: {type: String, required: false},
    GPUManufacturer: {type: String, required: false},
    GPUClockSpeed: {type: Number, required: false},
    GPUMemory: {type: Number, required: false},
    GPUMemoryType: {type: String, required: false},
    GPUMemoryClockSpeed: {type: Number, required: false},
    GPUMemoryBandwidth: {type: Number, required: false},
    GPUMemoryBus: {type: Number, required: false},
    GPUPorts: {type: Array, required: false},
    GPUPrice: {type: Number, required: false},
    GPUImage: {type: String, required: false},
    GPUSlots: {type: Number, required: false},
    GPUFans: {type: Number, required: false},
    GPUCores: {type: Number, required: false},
    GPUDLSSVersion: {type: String, required: false},
    GPUMatrix: {type: Array, required: false},
    GPUMinimalPower: {type: Number, required: false},
    GPUPciVersion: {type: String, required: false},
    GPUMaxResolution: {type: String, required: false},
    GPUColor: {type: String, required: false},
    GPUConnection: {type: String, required: false},
})

module.exports = mongoose.model('GPUSchema', GPUSchema);