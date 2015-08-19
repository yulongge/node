var bin = new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);
var str = bin.toString('utf-8');
var toStr = new Buffer('hello','utf-8');
console.log(str);
console.log(toStr);

var sub = bin.slice(2);
console.log(sub);
sub[0]= 0x65;
console.log(sub);
console.log(bin);

var dup = new Buffer(bin.length);
bin.copy(dup);
dup[0] = 0x48;
console.log(bin);
console.log(dup);
