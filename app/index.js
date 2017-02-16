const path = require('path');
const express = require('express');
const router = require('./router');

const app = express();

let views = path.join(__dirname, './view');
let public = path.join(__dirname, './public');

// Application definitions
app
  .set('view engine', 'pug')
  .set('views', views);

// Application main routes
app
  .use('/assets', express.static(public))
  .use('/', router);

const config = {
  port: process.env.PORT || 9000,
  message() {
    console.log(`
      App was started!
      App is listening at http://localhost:${config.port} ...
    `);
  }
};

app.listen(config.port, config.message);
