const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    ID_status: {
        type: Number,
        require: true,
    },
    status_name: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Comment: {
        type: String,
        require: true
    }

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('status', statusSchema)