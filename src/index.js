const express = require('express')
const ipUtil = require('./utils/ipUtil')

const app = express()
const path = require('path')
const port = 3000

app.use(require('cors')())
app.use(express.json())

// http://localhost:3000/public/link.png
// curl http://localhost:3000/public/link.png
app.use('/public', express.static(path.join(__dirname, '../public')))

// curl localhost:3000
app.get('/', (req, res) => {
  res.send({
    msg: 'Hello World!',
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(req),
  })
})

// curl localhost:3000/list/123
app.get('/list/:id', (req, res) => {
  const result = {
    id: req.params.id,
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(req),
  }
  res.send(result)
})

/*
curl --header "Content-Type: application/json" \
  --data '{"username":"admin","password":"admin"}' \
  http://localhost:3000/login
*/

// https://stackoverflow.com/questions/18314796/couchdb-curl-windows-command-line-invalid-json
app.post('/login', (req, res) => {
  const { username, password } = req.body
  res.send({
    username,
    password,
    msg: 'Hello World!',
    timestamp: Date.now(),
    origin: ipUtil.getIpFromHttpRequest(req),
  })
})

app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`)
})
