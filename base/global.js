var testFunction=function(){
	console.log("callback function executed");
}
var timer = setInterval(testFunction,3000);
timer.unref();
timer.ref();

setTimeout(function(){
	timer.unref();
},10000);

//require.resolve()
console.log(require.resolve('./console.js'));