const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    ID_payement: {
        type: Number,
        require: true,
    },
    Method: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('users', usersSchema)