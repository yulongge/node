var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"127.0.0.1",
	port:3307,
	database:"node",
	user:"root",
	password:"root"
});
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