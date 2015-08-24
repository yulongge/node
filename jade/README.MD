#Jade Documentation
[TOC]
##Doctype
``` javascript
doctype html
<!DOCTYPE html>
```
``` javascript
doctype xml
<?xml version="1.0" encoding="utf-8" ?>
```
``` javascript
doctype transitional
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

```
``` javascript
doctype strict
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
``` javascript
doctype frameset
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
``` javascript
doctype 1.1
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```
``` javascript
doctype basic
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
```
``` javascript
doctype moblile
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">
```

也可以用传统的写法
``` javascript
doctype html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN">
```

The doctype affects compilation in some other cases, for example self closing tags and boolean attributes). For this reason, you might sometimes want to specify it manually. You can do this via the doctype option. e.g.

我们单独编译一段代码，用特制订的doctype
``` javascript
var jade = require('./');

// Compile a function
var fn = jade.compile('img(src="foo.png")', {doctype: 'xml'});

// Render the function
var html = fn({});
// => '<img src="foo.png"></img>'

// Compile a function
var fn = jade.compile('img(src="foo.png")', {doctype: 'html'});

// Render the function
var html = fn({});
// => '<img src="foo.png">'
```
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
##Comments
注释语法
####1:行注释，编译后可以看到
```javascript
//just some paragraphs
p foo
p bar
```
``` html
<!-- just some paragraphs-->
<p>foo</p>
<p>bar</p>
```
####2:行注释，编译后看不到
```javascript
//-just some paragraphs
p foo
p bar
```
``` html
<p>foo</p>
<p>bar</p>
```
####3:段落注释，编译后可以看到
```javascript
body
	//
		As much text as you want
		can go here.
```
``` html
<!-- just some paragraphs-->
<body>
 <!--
  As much text as you want
  can go here.
  -->
</body>
```
####4:Conditional Comments
条件判断注释
```javascript
<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->
```
``` html
<!--[if IE 8]>
<html lang="en" class="lt-ie9">
<![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en">
<!--<![endif]-->
```
##Case语句
javascript的switch case体现
```javascript
-var friends = 10
case friends
	when 0
		p you have no friends
	when 1
		p you have a friend
	default
		p you have #{friends} friends
```
也可以写成一行的用冒号
```javascript
-var friends = 10
case friends
	when 0:p you have no friends
	when 1:p you have a friend
	default:p you have #{friends} friends
```
编译
``` html
<p>you have 10 friends</p>
```
如果两种情况结果相同，可以归在一起写
```javascript
-var friends = 0
case friends
	when 0
	when 1
		p you have few friend
	default
		p you have #{friends} friends
```
编译
``` html
<p>p you have few friend</p>
```
##Conditionals
```javascript
-var user = {description:'yulong'}
-var flag = false
#user
	if user.description
		h2 Description
		p.description = user.description
	else if flag
		h2 Description
		p.description
			User has no description,
			why not add one ...
	else
		h1 Description
		p.description User has no description
		
```
编译
``` html
<div id="user">
  <h2>Description</h2>
  <p class="description">foo bar baz</p>
</div>
```

##Extends
继承
The extends keyword allows a template to extend a layout or parent template. It can then override certain pre-defined blocks of content.
可以继承他的父模板，会把父模板中定义的block内容重写
``` javascript
//-layout.jade
doctype html
html
	head
		block title
			title Default title
	body
		block content
```
``` javascript
//-layout.jade
extends ./layout.jade
block title
	title Article Title
block content
	h1 My Article
```
编译
``` html
<!doctype html>
<html>
  <head>
    <title>Article Title</title>
  </head>
  <body>
    <h1>My Article</h1>
  </body>
</html>
```
##Includes
####jade include jade
``` javascript
//-index.jade
doctype html
html
	include ./includes/head.jade
	body
	h1 My Site
	p Welcome to my super lame site.
	include ./includes/foot.jade
```
``` javascript
//-head.jade
head
	title My Site
	script(src='/js/jquery.js')
	script(src='/js/app.js')
```
``` javascript
//-foot.jade
#foot
p Copyright (c) footbar
```
编译
``` html
<!doctype html>
<html>
  <head>
    <title>My Site</title>
    <script src='/javascripts/jquery.js'></script>
    <script src='/javascripts/app.js'></script>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my super lame site.</p>
    <div id="footer">
      <p>Copyright (c) foobar</p>
    </div>
  </body>
</html>
```
#### jade include plain text
``` javascirpt
//- index.jade
doctype html
html
	head
		style
			include style.css
	body
		h1 My site
		p Welcome to my super lame site.
		script
			include script.js
```
```css
h1{
color:red;
}
```
```javascript
console.log('you are awesome');
```
编译
```html
<!doctype html>
<html>
  <head>
    <style>
      /* style.css */
      h1 { color: red; }
    </style>
  </head>
  <body>
    <h1>My Site</h1>
    <p>Welcome to my super lame site.</p>
    <script>
      // script.js
      console.log('You are awesome');
    </script>
  </body>
</html>
```
####jade include filtered text
```javascript
//-index.jade
doctype html
html
	head
		title an article
	body
		include:markdown article.md
```
```markdown
#article.md
this is an article written in markdown
```
编译
```html
<!doctype html>
<html>
  <head>
    <title>An Article</title>
  </head>
  <body>
    <h1>article.md</h1>
    <p>This is an article written in markdown.</p>
  </body>
</html>
```
##Inheritance
```javascript
html
	head
		title My Site - #{title}
		block scripts
			script(src='/jquery.js')
	body
		block content
		block foot
			#footer
				p some footer content
```
```javascript
extends ./layout.jade
block scripts
	script(src='./jquery.js')
	script(src='./pets.js')
block content
	h1=title
	each pet in pets
		include pet
```
