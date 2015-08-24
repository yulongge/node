#Jade Documentation

##Attributes

###(1)属性添加
####1:用()在tag后添加，不同的属性间用逗号隔开
``` javascript
a(href="google.com",class="button")Google
```
编译
``` html
<a class="button" href="google.com">Google</a>
```
####2:可以用javascript语法
``` javascript
- var authenticated = true;
body(class=authenticated?'authed':'anon')
```
编译
``` html
<body class="authed"></body>
```
####3:属性可以写成多行
``` javascript
a(
	class="botton"
	name="btn"
	title="click"
)Google
```
编译
``` html
<a class="botton" name="btn" title="click">Google</a>
```
####4:Boolean Atrributes
``` javascript
input(type='checkbox', checked)
input(type='checkbox', checked=true)
input(type='checkbox', checked=false)
input(type='checkbox', checked=true.toString())
```
编译
``` html
<input type="checkbox" checked="checked"/>
<input type="checkbox" checked="checked"/>
<input type="checkbox"/>
<input type="checkbox" checked="true"/>
```
####5:Style Attributes
```javascript
a(style={color:'red',background:'green'})
```
``` html
<a style="color:red;background:'green';"></a>
```

####6:Class Attributes
```javascript
-var classes = ['foo','bar','baz'];
a(class=classes)
a.bing(class=classes class=['bing'])
```
``` html
<a class="foo bar baz"></a>
<a class="bing foo bar baz bing"></a>
```
class中我们如果做判断
```javascript
-var cuurentUrl = '/about'
a(class={active:currentUrl==='/'} href='/')Home
a(class={active:currentUrl==='/about'} href='/about')Home
```
``` html
<a href="/">Home</a><a href="/about" class="active">About</a>
```
Classes may be defined using a .classname syntax:
```javascript
a.button hello
```
``` html
<a class="button">hello</a>
```

####7:ID Attributes
```javascript
a#button hello
```
``` html
<a id="button">hello</a>
```
####8:&attributes
如果属性是个对象可以用这个方法来追加进来
```javascript
a#button(data-bar="foo")&attributes('data-foo':'bar')
```
``` html
<a id="button" data-bar="foo" data-foo="bar">hello</a>
```
```javascript
-var attirbutes = {'data-foo':bar}
a#button(data-bar="foo")&attributes(attributes)
```
``` html
<a id="button" data-bar="foo" data-foo="bar">hello</a>
```