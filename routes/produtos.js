module.exports = (app) => {

  app.get('/produtos', (req, res) => {
    console.log('requisição chegou')
    res.render('produtos/lista')
  })
}
