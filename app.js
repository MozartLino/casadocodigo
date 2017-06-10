const customExpress = require('./custom-express'),
  app = customExpress(),
  port = 3000

app.listen(3000, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})
