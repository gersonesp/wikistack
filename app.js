const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout')
const { db } = require('./models');
const app = express();


app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    console.log('Hello World')
    res.send(layout());
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.listen(3000, () => {
    console.log("Listening")
})