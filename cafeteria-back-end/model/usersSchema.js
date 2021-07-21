const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    comment: {
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