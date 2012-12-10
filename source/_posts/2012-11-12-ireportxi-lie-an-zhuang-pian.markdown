---
layout: post
title: "ireport系列-安裝篇"
date: 2012-11-12 21:52
comments: true
categories: ireport
---

#ireport下載
	
[ireport 下載網址](http://sourceforge.net/projects/ireport/files/iReport/)

文章撰寫時，最新版本為 iReport-4.8.0

for ubuntu 請下載 [iReport-4.8.0.tar.gz](http://sourceforge.net/projects/ireport/files/iReport/iReport-4.8.0/iReport-4.8.0.tar.gz/download)

#ireport指令安裝 
* 安裝java
		
		sudo apt-get install openjdk-7-jdk
* 下載ireport

		wget http://downloads.sourceforge.net/project/ireport/iReport/iReport-4.8.0/iReport-4.8.0.tar.gz
* 解壓縮

		tar zxvf iReport-4.8.0.tar.gz
* 執行ireport

		sh ~/iReport-4.8.0/bin/./ireport