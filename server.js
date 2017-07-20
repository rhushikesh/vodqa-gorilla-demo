const express = require('express'),
  app = express(),
  port = process.env.PORT || 80,
  bodyParser = require('body-parser');

const controller = require('./api/routes/blogPostRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

controller(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
