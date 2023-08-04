// Create web server 

// Import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import routes
const index = require('./routes/index');
const comments = require('./routes/comments');

// Create web server
const app = express();

// Define port
const port = 3000;

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up routes
app.use('/', index);
app.use('/comments', comments);

// Start server
app.listen(port, function() {
    console.log('Server started on port ' + port);
});