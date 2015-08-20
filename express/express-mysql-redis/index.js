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
	port:3307,
	database:'node',
	user:'root',
	password:'root'
});
var connection = mysql.createConnection({
	host:"127.0.0.1",
	port:3307,
	database:"node",
	user:"root",
	password:"root"
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
app.post("/list",function(req,res){
	//console.log(res);
	console.log("list comming....");
	connection.connect(function(err){
		if(err) console.log("连接失败。");
		else{
			console.log("连接成功。");
			var sqlstr = 'select * from ??';
			connection.query(sqlstr,['user'],function(err,result){
				if(err) console.log("查询失败。");
				else{
					console.log(result);
					//connection.end();
				}
			});
			var insersql = 'insert into user set ?';
			connection.query(insersql,{name:'lingling',phonenumber:'1888888888'},function(err,result){
				if(err) console.log("插入数据失败！");
				else{
					connection.query(sqlstr,['user'],function(err,result){
						if(err) console.log("查询失败。");
						else{
							console.log(result);
							connection.end();
						}
					});
				}
			})
		}
	});
	res.on('data',function(data){
		console.log("coming.....");
		//var param = JSON.parse(data.toString());
		//console.log(param);
		//res.send(param);
	});
});

var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});