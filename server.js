var restify = require('restify'),
    routes = require('/app/routes.js');

var port = Number(process.env.PORT || 5000);
var server = restify.createServer();

routes(apiServer);

server.listen(port, function() {
  console.log(server.name + ' listening at ' + server.url);
});
