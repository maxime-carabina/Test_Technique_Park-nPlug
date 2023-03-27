var express = require('express');
var fs = require('fs');
const url = require('url');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Bonjour !');
});

app.get('/hello', function(req, res) {
  const reqUrl = url.parse(req.url, true);
  var nom = reqUrl.query.nom;

  if (nom) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`Bonjour, ${nom} !`)
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Quel est votre nom ?')
  }
});

app.post('/chat', function(req, res) {
  const message = req.body.msg;

  switch (message) {
    case 'ville':
      res.send('Nous sommes à Paris');
      break;
    case 'météo':
      res.send('Il fait beau');
      break;
    default:
      res.send('Désolé, je ne comprends pas votre message');
      break;
  }
})

const port = 8000
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
