var http = require("http");
http.createServer(function(request,response){
	//response.writeHead(200,{'Content-Type':'text-plain'});

	
	//response.end('Hellow World\n');

	var body = [ ];
	console.log(request.method);
	console.log(request.headers);
	request.on("data",function(){
		body.push(chunk);
	});
	request.on("end",function(){
		body = Buffer.concat(body);
		console.log(body.toString());
	});
}).listen(8888);
