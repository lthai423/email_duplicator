// set up web server
const express = require('express');
const app = express();

// use middleware
require('./config/middleware.js')(app, express);

// use routes
require(__dirname + '/config/routes.js')(app);

// serve static files
app.set('views', __dirname + '/../client/');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '../client'));

// start server
const port = process.env.PORT || 8080;
const server = require('http').Server(app);

if(!module.parent) {
  server.listen(port, () => {
    console.log('success! local on port 8080');
  });
}

module.exports = {
  app: app
};