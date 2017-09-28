'use strict';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./articles.js');

//https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50

let app = express();
const router = express.Router();
const port = process.env.API_PORT || 3001;

mongoose.connect("mongodb://root:ash1289@ds111851.mlab.com:11851/gastronomads");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader("Cache-Control", "no-cache");
  next();
});

router.get("/", function(req, res) {
 res.json({ message: "API Initialized!"});
});

app.use("/api", router);
app.listen(port, function() {
 console.log("api running on port " + port);
});
