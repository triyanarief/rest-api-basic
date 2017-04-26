const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes  = require('./routes/api');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/thedoctor');
mongoose.Promise = global.Promise;

//set up static files
app.use(express.static('public'));

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests');
});
