var http = require('http');
var path = require('path');
var app = require('./app');
var dataParser = require('./dataParser');
var staticRequestHandlerFactory = require('./staticRequestHandler');
var calculatorRequestHandler = require('./calculatorRequestHandler');
var notFoundActionHandler = require('./notFoundActionHandler');

app.use(dataParser);
app.use(staticRequestHandlerFactory(path.join(__dirname, 'public')));
app.use(calculatorRequestHandler);
app.use(notFoundActionHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080');