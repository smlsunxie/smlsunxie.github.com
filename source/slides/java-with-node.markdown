---
layout: slides
title: "nodejs 與 java 結合運用"
date: 2012-11-22 21:55
sidebar: false
deck_theme: web-2.0
deck_transition: fade
deck_navigation: true
deck_status: true
deck_goto: true
deck_hash: true
deck_menu: true
deck_scale: false
---
{% slideBlock %}

#nodejs+java 
各取所長，更要迅速！


{% slide %}
## 自我介紹

在業界做了6年 生產製造追蹤系統 

從專題變成產品，走過產品開發的心血歷程

大學二年期前沒有寫過程式之後一直與java為伍

直到最近開始接觸 node ruby 等語言

在這裡我也是 

###菜鳥

我將盡我所能把我所知與大家分享，讓我們互相學習！

{% slide %}
## java 與 node 各有自己的舞台


<img src="http://i.gbc.tw/gb_img/0/001/873/1873750.jpg" height="200px" width="300px" />




###不管黑貓白貓 能捉老鼠就是好貓
###但是java搭node 有搞頭嘛？
###摻在一起做撒尿牛丸，吃了考一百分？？
###不只摻在一起，還要用對地方!



{% slide %}





## java 優點

2. Java 平台的性能已經的到多年的驗證
3. Java 平台上眾多的第三方產品、library 無所不有
4. 基於 JVM 的動態/函數式語言也給了 Java 平台良好的擴展性



{% slide %}

## node 優點

* 高效能
* 低耗能
* 入門容易
* 社群支援強
		


{% slide %}



## node與java結合的優點


* 前後端開發更專注
	
	用 JavaScript 來render頁面，前端工程師就可以有更大的空間，後端工程師也不用和善變的頁面打交道。
	
* 系統架構更清晰

	使用 Node.js 來render前端頁面，通過 API 獲取後端資料，前後端分離通過標準的API進行互動，讓整個系統架構更加清晰。


{% slide %}

## node與java結合的優點

* 前後端耦合度降低
 
	前端想要對頁面進行重構優化的時候也不再需要打擾後端工程師，大家都可以更專注於自己的事情。
* 提供更好的穩定性、擴展性
	
	Java 只作為後端接口/中間層的實現語言，node 作為前端的呈現




{% slide %}


## node 與 java 整合方式

* node server side java 
	* [node-java](https://github.com/nearinfinity/node-java)

* Independent server side java

	* restful
	* thrift
	* [redis](http://www.gridshore.nl/2011/07/28/combining-java-and-node-js-through-redis-pubsub-and-a-json-remote-interface/)
	* [rabbit mq](http://blog.james-carr.org/2010/09/09/rabbitmq-nodejs-and-java-goodness/)


{% slide %}


## 用script寫java-groovy+Gradle

###[groovy](http://groovy.codehaus.org/) - dynamic java
###[Gradle](http://gradle.org/) - Automation Evolved


* Groovy：與Java 平台集成性最好的動態語言作為Grails的基礎	
* Gradle：automate 
	* building, testing, publishing, deployment 
	* generated static websites, generated documentation
	* 建構於 Ant ,Maven 



{% slide %}


## DEMO 1：node-java

## 真的只要兩個指令
1. gradle clean build jar deploy
	
	清除>建置>打包>發佈，一路到底！
	
2. node app.js 啟動


### 生命就該浪費在美好的事物上！



{% slide %}


## build.gradle:How simple?

```
apply plugin: 'java'
apply plugin: 'groovy'
apply plugin: 'eclipse'
repositories {
    mavenCentral()
}
dependencies {
    groovy group: 'org.codehaus.groovy', name: 'groovy', version: '1.7.10'
}
task deploy(type: Copy) {
    from 'build/libs/'
    into '.'
    include '*.jar'
}
```
我還想要用IDE編java啦：``gradle eclipse``

幫你把 .project .classpath 建好，包括dependencies





{% slide %}


## nodejs:本來就很簡單

記得 ``npm install node-java``
``` javascript
var java = require("java");
//groovy need lib
java.classpath.push("groovy-1.7.10.jar");
java.classpath.push("asm-3.2.jar");

java.classpath.push("node-java.jar");
var ArrayList = java.import('java.util.ArrayList');
var list = new ArrayList();
list.addSync('item1');
console.log("list get 0="+list.getSync(0))

var JavaHello = java.import('JavaHello');
var javaHello = new JavaHello();
javaHello.sayHiSync();

var GroovyHello = java.import('GroovyHello');
var groovyHello = new GroovyHello();
groovyHello.sayHiSync();
```







{% slide %}


## 用 script 寫java

###[Grails](http://grails.org/) - The search is over.


	
* 建構於 Spring、Hibernate、Quartz、SiteMesh、JUnit、Ant 成熟開源框架之上
* URLMappings：Don't Repeat Yourself	
* 約定優於配置：Convention over Configuration
* 自動產生 CRUD 維護畫面：scaffold


###[grails install](http://www.grails.org/Installation)




{% slide %}


## DEMO 2-grails with rest api

一樣很簡單，常用指令：

* grails create-app grails-backend：產生初始專案
* create-domain-class [classname]：產生domain物件(ORM)
* create-controller [classname]:產生 controll
* create-scaffold-controller [package.path.classname]
	
	產生controll之外連editor一併建立
* run-app：啟動服務


{% slide %}


## grails幾個重要的config

### BuildConfig

設定 dependencies

### BootStrap

設定初始資料建置
	
### UrlMappings

設定 route
	




{% slide %}


## 跨網域 rest 呼叫-BuildConfig

因為node 與 grails 執行時屬於不同的 http Address，在執行rest 呼叫時會出現下列訊息，可利用grails plugin 來解決

* not allowed by Access-Control-Allow-Origin.
	1. grails install-plugin cors
	2. BuildConfig.groovy: plugins { runtime ":cors:1.0.2" ... } 


{% slide %}


## 需要superuser-BootStrap

開發過程中，希望可以有預設的superuser，就需要使用 BootStrap

``` groovy
class UserBootStrap {
    def init = { servletContext ->
        // Check whether the test data already exists.
		
		new User(account: "admin", password: "admin" ).save(failOnError: true)
		new User(account: "user", password: "user" ).save(failOnError: true)
    }

    def destroy = {
    }
}
```

{% slide %}

## rest ruote define-UrlMappings

在grails裡ruote定義也是非常簡單的

``` groovy
class UrlMappings {
	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {}
		}
		"/"(view:"/index")
		"500"(view:'/error')
		"/rest/$controller/$id?"{
			action = [GET: "show", PUT:"update", DELETE:"delete"]
			constraints {}
		}
		"/rest/$controller"{
			action = [GET:"listAll", POST: "create"]
			constraints {}
		}
	}
}
```

{% slide %}

## domain-class

有經歷過hibernate.cfg 嘛？

``` groovy
class Address {
	String country
	String city
	String street
    static constraints = {
    }
}
```
你不會想回去的⋯


{% slide %}
## scaffold-controller

 輕快很多，寫java也可以很享受

``` groovy
class AddressController {
    static scaffold = true
	def listAll = {
		render (contentType: 'text/json') {
			[
				items: UserGroup.list(),
				totalCount: UserGroup.count()
			]
		}
	}
	def create = {

	}
	def update = {
	}
	
	def delete={
	}
}
```



{% slide %}
## nodejs-express+extjs
不讓大家費心了express 拿來用!前端我使用 extjs

``` javascript
Ext.define('Frontend.store.MN.MNM001.Store' ,{
    extend: 'Ext.data.Store',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/grails-backend/rest/menuGroup/',
        reader: {
            type: 'json',
            root: 'items'
        },
        writer: {
            type: 'json'
        }
    },
    listeners: {
        write: function(store, operation) {
            store.load();
        }
    }
});

```



{% slide %}
# real demo
感受一下node+java的魅力




{% slide %}
## 以古為師

作為新時代的宅宅，也要鑑古今來

先賢的智慧就跟優良的程式一樣

##精簡，但語義完整

###君子寡欲，則不役於物，可以直道而行；
###小人寡欲，則能謹身節用，遠罪豐家。

######出處：司馬光：訓儉示康。《溫國文正司馬公文集》卷六十九。

---
####在下曰：不役於物後，就是成為大大之時，共勉之～

{% slide %}

## 工商服務 - 雲端農場

### 農業：agri-culture

### 雲端：cloud


### [agricloud.cc](http://agricloud.cc/)

### [agricloud 粉絲團](http://www.facebook.com/AgriCloud)

---
### 以大賣場的價格
### 享用有履歷的優質柳丁




{% slide %}

# 謝謝指教
[My github](https://github.com/smlsunxie) & [sample code](https://github.com/smlsunxie/nodeWithJavaTest)

{% endslideBlock %}






































