---
layout: post
title: "jekyll invalid us-ascii 處理"
date: 2012-12-20 15:28
comments: true
description: "jekyll invalid us-ascii 處理"

keywords: jekyll, invalid, us-ascii,encode

categories: [jekyll,exception,encode]
---

今天在用使用 [Jekyll + Bootstrap](http://jekyllbootstrap.com/) 架站時，剛好在試文章分類 category 是否可接收中文，結果～叭叭，沒辦法，網頁出現像下面訊息

###invalid byte sequence in US-ASCII

我想應該因為 Jekyll + Bootstrap 如果有定義分類 category 當他在generate 的時候資料夾就會跟 category 來分類產生的html，所以網址的部份也會變成中文。

試了網路上的方法，也就是在.profile 中加入 utf-8 的編碼方式，還是沒有辦法解決此問題，不過正想說算了就避開使用英文，後來看到有人說上傳的github上後github自動產生的頁面就沒此問題，怪哉！姑且一試，耶～真的可以耶！至少實際上線時是沒問題的，給大家參考，如果有辦法可以解決本機編碼的問題請讓我知道，ok～