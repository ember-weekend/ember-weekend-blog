var path = require('path');
var ghost = require('ghost');
var fs = require('fs');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  fs.openSync('/tmp/nginx.socket', 'w');
  return ghostServer.start();
});
