const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create doctor Schema & model
const DoctorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Doctor = mongoose.model('doctor', DoctorSchema);

module.exports = Doctor;
