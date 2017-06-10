const app = require('./custom-express'),
  port = 3000

app.listen(3000, () => {
  console.log(`servidor rodando em http://localhost:${port}`)
})
