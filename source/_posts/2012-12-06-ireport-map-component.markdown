---
layout: post
title: "introduction ireport component: Map 地圖"
date: 2012-12-06 15:15
comments: true
external-url: 
categories: [ireport]
---

今天來為大家介紹 ireport 的新元件 

##Map component

此Map不是java.util.Map，是google Map 的Map 不要搞錯了喔！

不然各位還以為我在廢話，java.util.Map 哪需要我介紹～

就在 11月底的時候 ireport release 5.0 

我就想說來看看他多了什麼功能，畢竟我從 2.0一路用上來

到了5字頭，來看看有什麼新的玩意，查了一下 [changelog](http://sourceforge.net/projects/ireport/files/iReport/iReport-5.0.0/)，重點是下列兩項：

* Full support for JasperReports 5.0.0
* Improved map component

試了一下，使用起來不會太難，幾個比較做要的參數可以參考官方的範例

[JasperReports - Map Component Sample (version 5.0.0)](http://jasperreports.sourceforge.net/sample.reference/map/index.html)

其中，此元件需要輸入的是座標，可以下下列網址查你要的地址

[座標查詢網址](http://www.agenciacreativa.net/coordenadas_google_maps.php)

接著，要記得設置zoom 的參數，讓你的地圖可以看到比較詳細的街道，可以看一下我完成的範例如下

![img](https://lh6.googleusercontent.com/-vpj2Wl0Tqsw/UMBQ4pGbobI/AAAAAAAALXE/UJrkevqrC58/s640/ireport%2520map.jpg)

不錯吧！