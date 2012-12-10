---
layout: post
title: "agile java with gradle: 使用 gradle 快速開發 java"
date: 2012-12-06 18:04
comments: true
external-url: 
categories: [java,gradle,agile]
---
以我過往開發java的經驗，總是離不開eclipse，每次要開發新專案，總是要設置一次eclipse的classpath

不然就是共同開發時，可能因為夥伴沒有上傳相依套件，造成編譯失敗

又或者自己去找缺的套件，好死不死版本不對造成程式異常

種種開發java遇到的問題總是困擾著我，又因為這樣浪費的很多時間～

---
怎麼辦！？介紹大家一帖好藥

##Gradle

之前就有介紹過他，請看我的[slide](http://smlsun.com/slides/java-with-node.html)

今天在開發一個小程式，索性就不用eclipse，也不去網路上下載套件，將程式寫好後放到gradle的編譯路徑

然後編輯build.gradle，內容如下

``` groovy
apply plugin: 'java'
apply plugin: 'eclipse'

repositories {
    mavenCentral()
}

dependencies {
    compile group: 'com.google.zxing', name: 'javase', version: '2.1'
    compile group: 'net.sf.jasperreports', name: 'jasperreports', version: '5.0.0'
    compile group: 'com.lowagie', name:'itext', version:'2.1.7'

}

```

可以看到我用到三個套件，分別是javase，jasperreports以及itext，如果你要查套件對應的group以及version可上下列網址查詢：

[maven Central Repository](http://search.maven.org/)

輸入你要找的套件名稱，就會列出相關的資訊。

接著我們只要在Terminal鍵入下列指令：

`gradle build jar`

gradle 就會進行 java compile，並且把熱熱的class馬上幫你包成jar讓你吃，ㄜ，不是！是讓你用～


就是這麼簡單，如果你還很嫩，離不開eclipse，別擔心，一句指令讓你使用IDE!

``gradle eclipse``

這時候gradle會根據你設定的 dependencies 幫你把classpath建好，方便吧！

剛剛提到多人開發，缺套件，或者抓錯版本的問題將一去不復返，任何人拿到程式碼，編譯出來的東西都會是一樣，將不再有缺套件沒辦法編譯的問題，可以輕省快速的開發java，以及處理繁瑣的編譯包jar步驟，更快的驗證寫出來的程式，正是敏捷開發的精神!

如何？還不趕快試試看阿！
