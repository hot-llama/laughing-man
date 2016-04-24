import express = require('express');
// import mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();


bookRouter.route('/books')
          .get((req, res) => {
              res.json();
          });

app.use('/api', bookRouter);
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

app.listen(port, ()=> console.log(`Running on port: ${port}`));