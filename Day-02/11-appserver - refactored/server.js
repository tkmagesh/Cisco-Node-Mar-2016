var http = require('http');
var app = require('./app')
var dataParser = require('./dataParser');
var staticRequestHandler = require('./staticRequestHandler');
var calculatorRequestHandler = require('./calculatorRequestHandler');
var notFoundActionHandler = require('./notFoundActionHandler');

app.use(dataParser);
app.use(staticRequestHandler);
app.use(calculatorRequestHandler);
app.use(notFoundActionHandler);

http.createServer(app).listen(8080);
console.log('server listening on port 8080');