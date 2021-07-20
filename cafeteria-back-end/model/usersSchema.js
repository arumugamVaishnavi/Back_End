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
//var user = mongoose.model('Book', BookSchema, 'bookstore');
 
    // a document instance
    // var user = mongoose.model('user', usersSchema);
    // var user1 = new user({ id: 1, userName: 'John Doe', password: "123",email: 'user@xmail.com', address: '1 rue Martin, Martin ville', phone: 060606060606, type:'student',comment:'nimporte quoi' });
 
    // // save model to database
    // user1.save(function (err, usersSchema) {
    //   if (err) return console.error(err);
    //   console.log(book.name + " saved to bookstore collection.");
    // });

module.exports = mongoose.model('users', usersSchema)