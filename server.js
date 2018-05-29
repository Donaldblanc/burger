import express from 'express'


import bodyParser from 'body-parser';
import path from 'path';
import routes from "./controllers/burgers_controller.js";
//import exphbs from 'express-handlebars'

// const express = require ('express')
// const bodyParser = require('body-parser')
// const routes = require('./controllers/burgers_controller.js')
// const exphbs = require('express-handlebars')
let app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.set('views', path.join(__dirname,'/views'));  


const PORT = process.env.PORT || 3000;

 app.use(express.static(__dirname + '/public'));
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () =>{ 
    console.log(`Server listening on: http://localhost:${PORT} `);

   });

