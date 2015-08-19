var mysql = require("mysql");
var connection = mysql.createConnection({
	host:'127.0.0.1',
	port:3307,
	database:'mysql',
	user:'root',
	password:'root'
});
connection.connect(function(err){
	if(err) console.log(err.code+'与Mysql数据库建立连接失败。');
	else{
		console.log('与Mysql数据库建立连接成功');
		connection.end(function(err){
			if(err) console.log("关闭Mysql数据库操作失败。");
			else{
				console.log("关闭Mysql数据库操成功。");
			}
		});
	}
});