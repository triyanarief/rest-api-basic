const express = require('express');
const bodyParser = require('body-parser');
const routes  = require('./routes/api');

// set up express app
const app = express();

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests');
});
