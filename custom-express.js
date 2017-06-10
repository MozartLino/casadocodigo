const express = require('express'),
  app = express()
  require("./routes/produtos")(app)

app.set('view engine', 'ejs')

module.exports = app
