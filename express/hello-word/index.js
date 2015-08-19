var express = require("express");
var app = express();
//app.use(express.static(__dirname+'/public'));
//app.get('/',function(req,res){
//	res.send('hello world!');
//});
var routes = require("./routes")(app);
app.listen(9999);
