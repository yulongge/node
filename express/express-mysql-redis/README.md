# The github of geyulong

##express
app.set('view engine','jade');
app.set('views',__dirname+'/views');

app.use(express.static(path.join(__dirname,'static')));


##mysql
查看端口号：show global variables like 'port';
create database node;
use node;
create table user(
	id int unsigned not null auto_increment primary key,
	name char(8) not null,
	phonenumber char(11) not null
);
