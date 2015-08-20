var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var app = express();
var mysql = require('mysql');
var redis = require('redis');
var path = require("path");

//mysql config
var pool = mysql.createPool({
	host:'127.0.0.1',
	port:'3307',
	database:'node',
	user:'root',
	password:'root'
});

app.set('view engine','jade');
app.set('views',__dirname+'/views');

app.use(express.static(path.join(__dirname,'static')));

app.get('/',function(req,res){
	res.render('index',{
			pageTitle:'前端组',
			layout:false
		},function(err,html){
			if(err) console.log(err);
			else res.send(html);
	});
});

var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});