var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.listen(8080);


var instructionsNouveauVisiteur = function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
  }
  
  var server = http.createServer(instructionsNouveauVisiteur);