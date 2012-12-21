---
layout: post
title: "Jekyll Liquid reference"
date: 2012-12-19 08:59
comments: true
keywords: Jekyll,Liquid,api,wiki
description: "整理並介紹 Jekyll Liquid"
categories: [Jekyll,Liquid,api]
---

最近在用Jekyll為base的作一些靜態網站，他算是一個很輕省，並且可以快速完成網站的好工具，可以看看友站的介紹[使用 Jekyll 與 GitHub Pages 架站](http://blog.lyhdev.com/2012/02/jekyll-github-pages.html)，幾個步驟並且使用免費的github就可以讓你有個網站的雛形，當然只有這樣還不夠，當你需要客製時，就必須要知道如何操作該工具運作，所以整理這篇，給大家參考，至少是個起頭方向。

為了避免浪費太多摸索時間，如果你有興趣想要使用這工具，建議大家先大概瀏覽一下下面的文件，有個印象後在去操作，整個才會比較速西(台語)～


* 官方網站：[Liquid](http://liquidmarkup.org/)
* wiki：[Liquid wiki](https://github.com/mojombo/jekyll/wiki)
	

節錄幾個我覺得比較重要的章節

* markdown文檔檔頭的說明：[YAML Front Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter)
* 各種參數讀取方式：[Template Data](https://github.com/mojombo/jekyll/wiki/Template-Data)
* 設計人員參考手冊：[Liquid for Designers](https://github.com/shopify/liquid/wiki/liquid-for-designers)

	包含比如說replace這樣替換字元的說明，還有一些常用的tag說明
* 開發人員參考手冊：[Liquid for Programmers](https://github.com/Shopify/liquid/wiki/Liquid-for-Programmers)
	
	如果你有看我另一篇文章[More Advanced octopress with Slide Features](http://smlsun.com/blog/2012/11/29/octopress-slide-advanced-More/)，裡面自定tag 與 block 的作法在這邊有詳細說明
* Jekyll [Liquid Extensions](https://github.com/mojombo/jekyll/wiki/liquid-extensions)
	
	Jekyll 使用 Liquid 來處理 templates，這裡列出一些除了標準 Liquid 有提供的功能外，延伸的部份，比如說裡面有提到的 Post Url，可以用 ``{% post_url 2010-07-21-name-of-post %}``取得文章連接。
	
	
試試看，Jekyll Liquid 使用起來真的很方便，如果你要快速架站，這個工具可以幫上你的忙

###Have Fun!!
	
