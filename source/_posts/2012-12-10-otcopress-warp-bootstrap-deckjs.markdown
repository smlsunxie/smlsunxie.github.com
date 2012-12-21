---
layout: post
title: "Otcopress + warp bootstrap + deck.js"
date: 2012-12-10 12:19
comments: true
categories: [bootstrap,warp bootstrap,deck.js]
keywords: octopress,warp bootstrap,bootstrap,deck.js
description: "octopress 整合 bootstrap 並且利用 deck.js 產生 slide"
---

隆重為大家推出，我所完成的 Otcopress theme

## Otcopress + warp bootstrap + deck.js

就如同大家看到的這個website，幾個特性如下：

* 保留 Otcopress 特色，包括程式碼hightlight 特性
* 支援 markdown with deck.js slide，使用方法請參考我另一篇文章[More Advanced octopress With Slide Features](http://smlsun.com/blog/2012/11/29/octopress-slide-advanced-More/)
* 支援bootstrap，習慣使用 bootstrap 的有福了！
* 佈景套用 warp bootstrap，主題為magnus，若要自行更換warp bootstrap主題應該會簡單一些


##使用slides 注意事項

* markdown 的檔案位置為 ./source/slides
* ./source/slides index.markdown 目前需自行新增連結項目
* 在 ./source/slides 底下的markdown 皆會自動轉換為html
* 可以參考 theme的 sample slide.markdown
* 新增slides可使用 ```rake new_sildes```

##安裝方式

* 請參考我的 github [bootstrapDeck.js](https://github.com/smlsunxie/bootstrapDeck.js)


從這件事讓我學到，自己要用很簡單，要讓大家用很多細節不得不注意了～

ps. 後續會在補英文說明，希望可以有外國人喜歡～


### 打完休息…