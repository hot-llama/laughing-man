"use strict";
var mongoose = require('mongoose');
var bookModel = new mongoose.Schema({
    title: {
        type: String
    },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, isRead: false }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Book', bookModel);
//# sourceMappingURL=bookModel.js.map