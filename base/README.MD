#base
##console
###1:console.log
###2:console.error(console.warn)

``` javascript
node console.js 2>error.log
```
###3:console.dir
输出对象的内容
``` javascript
user.name="geyulong";
console.dir(user);
```

###4:console.time()&timeEnd()
统计代码执行时间，参数值必须相同
``` javascript
console.time("small loop");
for(var i=0;i<10000;i++){
	i++;
}
setTimeout(function(){
	console.timeEnd("small loop");
},1000);
```
###console.trace()
输出当前位置的栈信息

###console.assert()
对表达式的结果进行评估(抛出异常)
``` javascript
console.assert(1==2,'raise an exception');
```

##global
###global
###setTimeout&clearTimeout
###setInterval&clearInterval
###unref&ref
让定时器暂停，启动
``` javascript
var testFunction=function(){
	console.log("callback function executed");
}
var timer = setInterval(testFunction,3000);
timer.unref();
timer.ref();

setTimeout(function(){
	timer.unref();
},10000);
```
###require
####require.resolve
查询完整模块名
``` javascript
console.log(require.resolve('./console.js'));
```



