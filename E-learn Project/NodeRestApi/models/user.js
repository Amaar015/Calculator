
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    mobile: {
        type: String,
        default: 0,
    },
    dob: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true }
)
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;