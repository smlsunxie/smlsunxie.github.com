---
layout: post
title: "google api 的使用簡介-map & picasa"
date: 2012-12-19 08:20
comments: true
categories: [google,map,api]
keywords: google,map,api,streeview,picasa,picture,image
description: "說明如何使用 google api 的參考資料-map,picasa"
---

最近剛好在做一個房仲網站，有用到 google map api，以及要動態嵌入picasa的圖片依據狀況改變圖片大小，找到一些參考資料，整理上來給大家參考

## google map



###大家愛吃的泡麵版:

* 如果你要嵌入map地圖請參考下列網址
	
	[在網站或網誌中嵌入地圖](http://support.google.com/maps/bin/answer.py?hl=zh-Hant&answer=72644)
	
效果如下：
<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.tw/maps?f=q&amp;source=s_q&amp;hl=zh-TW&amp;geocode=&amp;q=%E5%8F%B0%E5%8C%97%E5%B8%82%E6%B1%80%E5%B7%9E%E8%B7%AF%E4%B8%80%E6%AE%B5354%E8%99%9F&amp;aq=&amp;sll=23.48575,119.49965&amp;sspn=8.347012,9.876709&amp;t=m&amp;brcurrent=3,0x3442a9b1907a9407:0x10fa075eccd0dd7c,0,0x3442ac6b61dbbd9d:0xc0c243da98cba64b&amp;ie=UTF8&amp;hq=&amp;hnear=100%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E6%B1%80%E5%B7%9E%E8%B7%AF%E4%B8%80%E6%AE%B5354%E8%99%9F&amp;ll=25.026428,121.512823&amp;spn=0.037331,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com.tw/maps?f=q&amp;source=embed&amp;hl=zh-TW&amp;geocode=&amp;q=%E5%8F%B0%E5%8C%97%E5%B8%82%E6%B1%80%E5%B7%9E%E8%B7%AF%E4%B8%80%E6%AE%B5354%E8%99%9F&amp;aq=&amp;sll=23.48575,119.49965&amp;sspn=8.347012,9.876709&amp;t=m&amp;brcurrent=3,0x3442a9b1907a9407:0x10fa075eccd0dd7c,0,0x3442ac6b61dbbd9d:0xc0c243da98cba64b&amp;ie=UTF8&amp;hq=&amp;hnear=100%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E6%B1%80%E5%B7%9E%E8%B7%AF%E4%B8%80%E6%AE%B5354%E8%99%9F&amp;ll=25.026428,121.512823&amp;spn=0.037331,0.054932&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">檢視較大的地圖</a></small>

簡單吧！感謝google大神～


###下面是給愛自己煮的geek:

* [基本的使用介紹](http://my-web-design.blogspot.tw/2007/09/google-maps-api.html)
* 如果你要嵌入地圖資訊可用下列網站產生
	
	[google map 嵌入網站程式碼產生器](http://www.solvium.de/static-map/)

* 如果要查詢所在位置的坐標可使用下列網址，之前在[Introduction Ireport Component: Map 地圖](http://smlsun.com/blog/2012/12/06/ireport-map-component/)有介紹過
	
	[座標查詢網址](http://www.agenciacreativa.net/coordenadas_google_maps.php)
* 更詳細的使用說明可以參考官方文件說明
	
	[官方google map api 文件](https://developers.google.com/maps/documentation/javascript/?hl=zh-TW)

## google picasa

###大家愛吃的泡麵版：

如果你要分享picasa上面的影像可以參考下列網址操作

* [內嵌相簿、圖片和投影播放](https://support.google.com/picasa/answer/66969/?hl=zh-Hant&)，效果如下
<embed type="application/x-shockwave-flash" src="https://picasaweb.google.com/s/c/bin/slideshow.swf" width="800" height="533" flashvars="host=picasaweb.google.com&hl=zh_TW&feat=flashalbum&RGB=0x000000&feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F114562460176368030377%2Falbumid%2F5810278785625170577%3Falt%3Drss%26kind%3Dphoto%26authkey%3DGv1sRgCIqtvMXakpDcSw%26hl%3Dzh_TW" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>

差就差在是用flash作的，如果你不 care iphone的用戶(沒有flash)，這應該可以幫你節省維護照片(以資料夾為單位)，以及將照片放在web site的時間(複製連接)，picasa就可以很方便管理你的照片， 

###更正：原來有人提出iphone，使用picasa slide 的解決方案了如下：

#### [How to make Picasa flash-based slideshow iPhone-friendly](http://www.jaillon.com/blog/2010/06/04/how-to-make-picasa-flash-based-slideshow-iphone-friendly/)


``` javascript
<script language=javascript>
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)))
{
document.write(‘<a href=”[URL to slideshow link]“><img src=”[URL to an image from the slideshow] width=”600″ /></a>’);
}
else
{
document.write(‘[Code provided by Picasa - Click on "Embed Slideshow" link]‘);
}
</script>
```

在介紹一個好工具，很簡單使用

[Free HTML5 Slideshows](http://www.slidemypics.com/)

效果如下：

* <iframe width="526" height="352" frameborder="0" src="http://files.slidemypics.com/app/js/iframe.html?bg_color=1f1f1f&amp;hash=a75a4cce696c1840e0ee1b5ba1054593&amp;r=0.5629955572076142"></iframe>

* <iframe width="526" height="352" frameborder="0" src="http://files.slidemypics.com/app/js/iframe.html?bg_color=1f1f1f&amp;hash=9a4b9dcfe243bf7c123dcde7a1054638&amp;r=0.8656736903358251"></iframe>

* <iframe width="526" height="352" frameborder="0" src="http://files.slidemypics.com/app/js/iframe.html?bg_color=1f1f1f&amp;hash=0379d2806253627616f18543a1054903&amp;r=0.36253471905365586"></iframe>



###geek最愛的自己煮版：

* 用restful的方式來操作圖片的產生，如果你是要用html5 image slide 這就很好用，你不會想要原始大小跟縮圖都自己重覆貼連結的
	
	[Picasa（Google+）圖片外連的 URL 參數整理](http://akr.tw/2012/04/picasa-url-parameters/)
	
---
	
其實只要善用網路上的工具真的可以節省很多時間，使用起來也不麻煩，甚至出奇的簡單，只是不知道而已，網路的世界需要大家一起探索，如果有不錯的工具，也別忘了推薦給大家，let me know,OK!

最後還是要感謝google，幫我節省這麼多時間，雖然我沒有像google那麼神通廣大，希望能幫助到來參觀的讀者囉！


