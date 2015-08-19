var http = require("http");
/*http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hellow word");
	response.end();
}).listen(8888);*/
/*function onRequest(request,response){
	console.log("Request,received.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello word");
	response.write("edit");
	response.end();
}
http.createServer(onRequest).listen(9999);
console.log("Server has started");*/

/*function start(){
	function onRequest(request,response){
        	console.log("Request,received.");
        	response.writeHead(200,{"Content-Type":"text/plain"});
        	response.write("Hello word");
        	response.write("edit");
        	response.end();
	}
	http.createServer(onRequest).listen(9999);
	console.log("Server has started");
}
exports.start = start;
*/

var url = require("url");
function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for"+pathname+" received.");
		var content = route(handle,pathname);
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(pathname);
		response.write(content);
		response.end();
		
	}
	http.createServer(onRequest).listen(9999);
	console.log("Server has started");

}
exports.start = start;
