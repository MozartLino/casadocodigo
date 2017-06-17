const express = require('express'),
  exphbs  = require('express-handlebars'),
  app = express()

require("./routes/produtos")(app)

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('./public'))

module.exports = app
