---
layout: post
title: "ireport use scriptlet"
date: 2012-12-06 20:00
comments: true
external-url: 
categories: [ireport,java]
---

在開始之前請容許我發洩一下：

ireport 的文件真他媽的少阿!

希望透過這篇文章，能幫助大家節省一些時間，其實scriptlet很強大

知道原理後之後就很簡單了，你可以輕易的讓ireprt中的資料交由自己寫的class進行處理，與ireport的互動將更加容易

只是沒有文件說明他怎麼用，以致沒有人了解他

開始我們的正題

##如何使用 ireport scriptlet

先來看看java code

``` java
package com.smlsun.ireport;
import net.sf.jasperreports.engine.JRDefaultScriptlet;
import net.sf.jasperreports.engine.JRScriptletException;

public class TestScriptlet extends JRDefaultScriptlet {
    public void afterDetailEval() throws JRScriptletException {
       this.setVariableValue("titleAddOrderid", "test Scriptlet ORDERID:"+getFieldValue("ORDERID").toString() );
    }
}
```

###java部分

重點如下：

* 需要注意的是需要 ``extends JRDefaultScriptlet``
* 接著你需要實作 JRDefaultScriptlet 裡的介面，此範例實作afterDetailEval，也就是當detal band畫完之後進行處理
* 透過 getFieldValue 來取得報表中有的欄位值進行處理，此範例只是加上一些字串而已
* 處理好的值塞到ireport 事先定義好的Variable，透過 setVariableValue
* 將寫完的java 打包成jar，可以看我上一篇文章 [gradle](http://smlsun.com/blog/2012/12/06/agile-java-with-gradle/) 快速完成！


java部分大概就是這樣了~

---

###接著回到ireport

需要處理的重點如下：

* 將打包好的jar加入到ireport的classpath
* 在你要使用的報表將寫好的class name加到scriptlets，記得要連package
* 將Variable建好，需要與class裡定義的一樣，此例需命名為 titleAddOrderid
* 新增一個text field 將Expression 填入建好的 $v{titleAddOrderid}

OK啦～如此一來就算完成讓ireport 使用 scriptlet，沒圖沒真相，結果如下：

![testIreportScriptlet](https://lh6.googleusercontent.com/-aK45tf5w6U8/UMFWA9BRnhI/AAAAAAAALXU/WYeH7MHoSh8/s640/testIreportScriptlet.jpg)

其實真的不難，做過一次就知道了，就是因為文件少，不知從何開始，希望能幫幫ireport苦惱的人～

最後再補上，別人錄的 step by step 影片，他是用 image當例子，跟本範例用string原理是一樣的

[show-blob-image-in-ireport](http://ireport-tutorial.blogspot.tw/2008/11/show-blob-image-in-ireport.html)



