const express = require('express'),
  exphbs  = require('express-handlebars'),
  load = require('express-load'),
  bodyParser = require('body-parser');
  app = express()

load('routes').into(app)

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set()
app.use(express.static('./public'))

module.exports = app
