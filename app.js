/**
 * My fist js Deployment application
 * Server To Deploy the JS APP
 * PORT 8080
 */
var express = require('express');
var path = require('path');
var app = express();

// Configuring the static file here
app.use(express.static('public'))

// Handling the request items here
app.get('/view' , (req ,res) => {
 res.sendFile(path.join(__dirname + '/public/view.html'))
})

app.get('*' , (req , res) => {
    res.redirect('/')
})

module.exports = app;

