class ProdutoDao {

  constructor(connection){
    this._connection = connection
  }

  list(cb) {
    this._connection.query('SELECT * FROM livros', cb)
  }
}

module.exports = ProdutoDao
