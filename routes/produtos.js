module.exports = (app) => {

  app.get('/produtos', (req, res) => {
    debugger
    console.log('requisição chegou')
    res.render('produtos/lista')
  })
}
