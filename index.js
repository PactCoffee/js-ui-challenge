/* global __dirname: true */

var http = require('http');
var fs = require('fs');
var url = require('url');
var ctypes = require('./lib/ctypes');

function onRequest(req, res) {
  var rurl, path, arr, ctype, ext, data;
  rurl = req.url;
  path = url.parse(rurl).pathname.substring(1) || 'public/index.html';
  if (path === 'favicon.ico') {
    return;
  }
  arr = path.split('.');
  ext = arr[arr.length - 1];
  ctype = ctypes[ext];
  data = fs.readFileSync(__dirname + '/' + path, 'utf-8');
  res.writeHead(200, { 'Content-Type': ctype });
  res.end(data);
}

http.createServer(onRequest).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
