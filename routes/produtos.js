const connectionFactory = require('../infra/connectionFactory.js'),  
  ProdutoDao = require('../infra/ProdutoDao');

module.exports = (app) => {

  app.get('/produtos', (req, res) => {
    const connection = connectionFactory()
    const produtoDao = new ProdutoDao(connection)

    produtoDao.list((err, livros, fields) => {
      res.render('produtos/lista', {livros})
    })

    connection.end()
  })

  app.get('produtos/form', (req, res) => {
      res.render('produtos/form')
  })

  app.post('produtos/form', (req, res) => {
        req.
  })
}
