//console.error
console.error("this is an error");
var user = new Object();
//console.dir
user.name="geyulong";
console.dir(user);
//console.time()&console.timeEnd()
console.time("small loop");
for(var i=0;i<10000;i++){
	i++;
}
setTimeout(function(){
	console.timeEnd("small loop");
},1000);
//console.trace();
//console.trace("trace");

//console.assert
console.assert(1==2,'raise an exception');

