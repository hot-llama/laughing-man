"use strict";
var express = require('express');
// import mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();
bookRouter.route('/books')
    .get(function (req, res) {
    res.json();
});
app.use('/api', bookRouter);
app.get('/', function (req, res) {
    res.send("Welcome to my API");
});
app.listen(port, function () { return console.log("Running on port: " + port); });
//# sourceMappingURL=app.js.map