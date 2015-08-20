var express = require("express");
var http = require('http');
var app = express();
/*app.get("/:id/:name",function(req,res){
	var str = "";
	for(key in req.params){
		if(str!="")
			str +="<br />";
		str += "参数名："+key;
		str += String.fromCharCode(9)+" 参数值："+req.params[key];
	}
	res.send(str);
});*/
app.get("/:id?/:name?",function(req,res){
	var str = "";
	if(req.params.id){
		str += "id 参数值："+req.params.id;
	}
	if(str!="") str+="<br/>";
	if(req.params.name){
		str+= "name 参数值："+req.params.name;
	}
	res.send(str);
});
app.listen(1337);