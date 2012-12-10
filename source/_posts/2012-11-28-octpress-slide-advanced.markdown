---
layout: post
title: "octpress slide Advanced"
date: 2012-11-28 15:46
comments: true
external-url: 
categories: [slide,octpress,deck.js]
---

之前為了讓octpress可以根據layout的改變為slide寫了一篇文章

[octpress support deck.js with markdown](http://smlsun.com/blog/2012/11/21/slide-samble/)

後續加上了nav bar，以及footer bar，可以使用share功能

###不過！！

後來看到網路上的大大做了更好的實作

* [HTML Presentations With Octopress and deck.js](http://kmees.github.com/blog/2012/07/07/html-presentations-with-octopress-and-deck-dot-js/)

* [HTML Presentations With Octopress and deck.js - Part II](http://kmees.github.com/blog/2012/07/16/html-presentations-with-octopress-and-deck-dot-js-part-ii/)

呈現出來的結果如下：[octpress with slide advanced](http://kmees.github.com/slides/rugsaar-octopress.html)

與 octpress 整合的更好，而且分類與設定更加的完善

於是乎，我把該位大大的[github.com/kmees](https://github.com/kmees/kmees.github.com) clone 回來調整了一下

有幾個不錯的特性

* 支援 rake new_slides

與now_post類似，new_slides會將新的slides文章新增在 ``source/slides`` 下，同樣當你執行rake generate deploy preview 時都會幫你進行轉換，方便吧！


* 根據post的title屬性來變更silde的佈景，以及換頁動畫，如下：
```
---
layout: slides
title: "Demo Slides"
sidebar: false
deck_scale: false
deck_theme: web-2.0
deck_transition: fade
---
```
* 在silde區隔的部份更方便，使用custom ``Liquid::Block``，來產生html code，like that:
```
{% slide %}
  ## Title
  content
{% endslide $}
```
這部份我覺得可以在方便點改成下列樣式，實際用時常常會漏掉div tag 的開始或結束
```
{% slideFirst %}
  ## Title
  content
{% slide $}
  ## Title
  content
{% slide $}
  ## Title
  content
{% slideEnd $}
```
其中 slideFirst 替換成 ``<div class='slide'>``

slide 替換成 ``</div><div class='slide'>``

最後 slideEnd 替換成 ``</div>``




呈現起來也不錯，剛剛好這禮拜要去講一個talk，實際完成品 [nodejs+java](http://smlsunxie.github.com/slides/java-with-node.html)，整體更一致了！


how about that??試試看囉！






