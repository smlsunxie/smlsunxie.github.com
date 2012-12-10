---
layout: post
title: "Socket.io 實作聊天室"
date: 2012-11-02 12:17
comments: true
categories: nodejs
---

利用 socket.io 實作聊天室，在以前很難想像要如何控制多個使用者進行realtime的服務，透過socket.io可以很輕易的做到

##功能說明

* 此專案base是參考下面網站介紹完成的範例:
[聊天廣播 - Socket.io](http://iosdevelopersnote.blogspot.tw/2012/09/socketio.html)

* 除了聊天室之外，另外實作了歷史聊天記錄自動載入功能，透過mongohg

* 另外確認若是另一個獨立運作的網頁是否可以使用獨立的node server的服務，如下節說明。
* 透過聊天室實作可以在延伸其他功能，比如說：
	* 強制所有上線使用者登出
	* 讀取到RFID觸動網頁進行相關動作
	* 系統維修時，禁止使用者上線


##確認即使是外部網頁也可執行socket服務

請參考 git 中 indepandTest.html 檔案，當app 運作時，在執行此檔案也同要有聊天室的功能

測試即使獨立開啟html(不在server底下開啟)，也可以使用聊天室的功能
其中只要將

	<script type="text/javascript" charset="utf-8" src="socket.io/socket.io.js">

指定為node運行中的服務

	<script type="text/javascript" charset="utf-8" src="http://localhost:3000/socket.io/socket.io.js">

就可以執行該server所定義好的功能，確認可行表示若是手機app也可以有realtime的服務，透過socket.io


##git網址

相關原始碼請參考下列網址

	https://github.com/SpookyHty/nodeChatRoom-test


##makedown寫網誌
* 此網誌是透過makedown完成的
	* 語法可參考[Markdown 語法說明](http://markdown.tw/)
	* 練習可使用[Online Markdown Editor](http://www.ctrlshift.net/project/markdowneditor/)

	對於需要寫網址，或者需要將技術文件輸出不同格式，使用markdown可以快速幫你完成
* 此篇文章的原始碼可參考
		
		https://github.com/SpookyHty/nodeChatRoom-test
		
	中的 README.md