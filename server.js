var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.listen(3000, function() {
    console.log('Server connected.');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(process.cwd() + "/public"));

app.use(methodOverride("_method"));

var router = require('./controllers/burgers_controller.js');

app.use('/', router);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
