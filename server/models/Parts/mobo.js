const mongoose = require('mongoose');

const MBSchema = new mongoose.Schema({
    MBName: {type: String, required: false},
    MBSocket: {type: String, required: false},
    MBFormFactor: {type: String, required: false},
    MBChipset: {type: String, required: false},
    MBMemoryType: {type: String, required: false},
    MBMemorySlots: {type: Number, required: false},
    MBMaxMemory: {type: Number, required: false},
    MBColor: {type: String, required: false},
    MBPrice: {type: Number, required: false},
    MBImage: {type: String, required: false},
    MBM2Slots: {type: Number, required: false},
    MBPCIESlots: {type: Array, required: false},
    MBWifi: {type: Boolean, required: false},
    MBBluetooth: {type: Boolean, required: false},
    MBARGBGHeader: {type: Boolean, required: false},
    MBRGBHeader: {type: Boolean, required: false},
    MBManufacturer: {type: String, required: false},
    MBPorts: {type: Array, required: false},
    MBRaidSupport: {type: Boolean, required: false},
    MBAudioChipset: {type: String, required: false},
    MBLanChipset: {type: String, required: false},
    MBBiosType: {type: String, required: false},
})

module.exports = mongoose.model('MBSchema', MBSchema);