const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  return handler(request, response);
})

module.exports.startServer = function(done) {
  server.listen(3000, () => {
    console.log('Running at http://localhost:3000');
    done();
  });
}

module.exports.stopServer = function(done) {
  server.close(() => {
    console.log('Server closed');
    done();
  });
}
