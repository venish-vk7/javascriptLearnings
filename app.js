/**
 * My fist js Deployment application
 * Server To Deploy the JS APP
 * PORT 8080
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

// Configuring the static file here
app.use(express.static('public'))

app.get('/404' , (req ,res) => {
    res.sendFile(
        path.join(__dirname + `/public/404.html`)
    );
})

// Handling the request items here
app.get('/*', (req, res) => {
    var root = path.join(__dirname + `/public/${req.path.substring(1 , req.path.length)}.html`)
    if(fs.existsSync(root)){
        res.sendFile(root);
    }else{
        res.redirect('/404')
    }
})





app.get('*', (req, res) => {
    res.redirect('/')
})

module.exports = app;

