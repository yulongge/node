var NodeCache = require("node-cache");
var myCache = new NodeCache({stdTTL:100,checkperiod:120});
var obj = {my:"special",variable:42};
myCache.set("myKey",obj,function(err,success){
	if(!err && success){
		console.log(success);
	}

	myCache.get("myKey",function(err,value){
		if(!err){
			if(value == undefined){

			}else{
				console.log(value);
			}
		}
	});
});
