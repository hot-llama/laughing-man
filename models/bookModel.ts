import mongoose = require('mongoose');

const bookModel:mongoose.Schema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, isRead: false}
});

export default mongoose.model('Book', bookModel);