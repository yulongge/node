var redis = require("redis");
var client = redis.createClient('6379','127.0.0.1');

client.info(function(err,response){
	//console.log(err,response);
	if(!err) console.log("连接成功。");
});
client.on("error",function(error){
	console.log(error);
});
client.set('roban','this is an testing val',function(err,response){
	if(err){
		console.log('Failed to set key of roban,error'+err);
		return false;
	}
	client.get('roban',function(errGet,responseGet){
		console.log('Val:'+responseGet);
	})
});
client.on("connect",function(){
	client.set('name_key','hello world',function(err,reply){
		console.log(reply.toString());
	});

	client.get("name_key",function(err,reply){
		console.log(reply.toString());
	});
});
client.hmset('frameworks','javascript','AngularJS','css','Bootstrap','node','Express');
client.hgetall('frameworks',function(err,object){
	console.log(object);
});

client.hmset('frameworks2',{
	'javascript':'AngularJS',
	'css':'Bootstrap',
	'node':'Express'
});
client.hgetall('frameworks2',function(err,object){
	console.log(object);
});

client.rpush(['frameworks3','angularjs','backbone'],function(err,reply){
	console.log("count====="+reply);
});
client.lrange('frameworks3',0,-1,function(err,reply){
	console.log(reply);
});
client.sadd(['tags','angularjs','backbone.js','emberjs'],function(err,reply){
	console.log(reply);
});
client.smembers('tags',function(err,reply){
	console.log(reply);
});
client.exists('tags',function(err,reply){
	if(reply === 1){
		console.log('exists');
	}else{
		console.log('doesn\'t exist');
	}
});
client.exists('tags3',function(err,reply){
	if(reply === 1){
		console.log('exists');
	}else{
		console.log('doesn\'t exist');
	}
});
client.del('tags',function(err,reply){
	console.log(reply);
	client.exists('tags',function(err,reply){
		if(reply === 1){
			console.log('exists');
		}else{
			console.log('doesn\'t exist');
		}
	});

});

client.set('key1',10,function(){
	client.incr('key1',function(err,reply){
		console.log(reply);
		client.get('key1',function(err,reply){
			console.log(reply);
		})
	});
});
