const express = require('express')

module.exports = () => {
let app = express();
  app.set('view engine', 'ejs')

  app.get('/produtos', (req, res) => {
    console.log('requisição chegou')
    res.render('produtos/lista')
  })

  return app
}
