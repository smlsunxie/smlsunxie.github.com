---
layout: post
title: "chrome 本地檔案網頁 ajax 請求失敗處理"
date: 2012-11-02 21:37
comments: true
categories: chrome
---

#發生問題環境
1. 開啟本地檔案如：

		file://localhost/Users/Spooky/git/MotoExpress-andoid/assets/		www/index.html

2. 使用jquery之ajax請求如使用者驗證
3. chrome 在送出ajax的請求後無法取得response
4. 一般的form有指定action進行submit又可以

#需求原因
期望利用本地網頁驗證在手機上的運作測試，若是都在手機上運作，依次修改到測試將花費很多時間

#解決方式
chrome 需開啟 --disable-web-security，利用終端機執行下列指令

	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security
	
#其他事項
有一說是開啟 --allow-file-access-from-files即可，經測試ajax請求還是無法正確運作，不信邪可以試試看
	
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files