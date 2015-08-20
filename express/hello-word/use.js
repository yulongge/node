var express = require("express");
var http = require("http");
var app = express();
/*app.use(function(request,response,next){
	console.log("In comes a"+request.method+"to"+request.url);
	next();
});
app.use(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("hello world!\n");
});*/
/*app.use(function(request,response,next){
	if(request.url=="/"){
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.end("Welcome to the homePage!\n");
	}else{
		next();
	}
});
app.use(function(request,response,next){
	if(request.url=="/about"){
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.end("Welcome to the aboutPage!\n");
	}else{
		next();
	}
});
app.use(function(request,response,next){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("404 error!\n");
});*/
//http.createServer(app).listen(1337);

app.use("/about",function(request,response,next){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Welcome to the aboutPage!\n");
		//next();
});
app.use("/",function(request,response,next){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.end("Welcome to the homePage!\n");
		//next();
});
app.use(function(request,response,next){
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.end("404 error!\n");
});
app.listen(8080);
