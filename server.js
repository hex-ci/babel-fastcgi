"use strict";

var fastcgi = require('fastcgi-server');
var fs = require('fs');
var babel = require("babel-core");

fastcgi.createServer(function(req,res) {
  // console.log(req.params)
  var filename = req.params.DOCUMENT_ROOT + req.params.SCRIPT_NAME;
  var status = 200;

  if (fs.existsSync(filename)) {
  	var code = fs.readFileSync(filename);
  	var content = '';
  	try	{
	  	var result = babel.transform(code, {
	  		"presets": ["es2015"]
		});
		content = result.code;
		status = 200;
  	}
  	catch (e) {
  		content = 'console.log(' + JSON.stringify(e) + ');';
  		status = 200;
  	}
  	// console.log(result);
	res.writeHead(status, {'Content-Type': 'application/javascript'});
    res.end(content);
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('Meeh :-(');
  }

}).listen("/tmp/fastcgi.sock");