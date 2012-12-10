---
layout: post
title: "ireport use qrcode"
date: 2012-12-07 10:41
comments: true
external-url: 
categories: [ireport,java] 
---

其實這篇才是最後的目的，讓我們回顧一下系列文章：

* [Agile Java With Gradle: 使用 Gradle 快速開發 Java](http://smlsun.com/blog/2012/12/06/agile-java-with-gradle/)
	
	利用gradle 快速開發java，並且包成jar，所要做的就是下一篇文章scriptlet 會用到的jar

* [Ireport Use Scriptlet](http://smlsun.com/blog/2012/12/06/ireport-use-scriptlet/)
	
	說明如何引入自己寫的class在ireport可以使用
	
最後所有做的就是

## ireport 產生 QRCode

So，之前兩篇文章把一些細節都說明過了，就直接進入重點吧！

參考這篇文章

[google-zxing-barcode-generator-in-ireport](http://stackoverflow.com/questions/7626013/google-zxing-barcode-generator-in-ireport)

把第二篇的javacode改寫後，程式碼如下：

``` java
package com.smlsun.ireport;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import net.sf.jasperreports.engine.JRDefaultScriptlet;
import net.sf.jasperreports.engine.JRScriptletException;

public class QRCodeScriptlet extends JRDefaultScriptlet {
    public void afterDetailEval() throws JRScriptletException {
        QRCodeWriter writer = new QRCodeWriter();
        BitMatrix matrix = null;

        try {
            matrix = writer.encode(getFieldValue("ORDERID").toString(), BarcodeFormat.QR_CODE, 256, 256);
            this.setVariableValue("BarCodeImage", MatrixToImageWriter.toBufferedImage(matrix) );
        } catch (WriterException e) {
            e.printStackTrace();
        }
    }
}

```




不多說了，重點如下：

* 需要用的套件與版本，請參考 [Agile Java With Gradle: 使用 Gradle 快速開發 Java](http://smlsun.com/blog/2012/12/06/agile-java-with-gradle/) 的gradle.build，其中 ``com.google.zxing`` 主要是要用來產生QRcode
* 將你要轉換成QRcode 的文字傳入，此範例用的是 Field ORDERID
* 同樣將處理結果塞到 ireport的 Variable，此範例命名為 BarCodeImage
* 在此 Variable 的型別為 BufferedImage

回到ireport，我們同樣要進行 [Ireport Use Scriptlet](http://smlsun.com/blog/2012/12/06/ireport-use-scriptlet/) 中，ireport的設定，其中不一樣的是：

* Variable 的 type 要改成 java.awt.image.BufferedImage
* 然後原本用的是text field 改成用 Image
* Image的type 改成 java.awt.Image

上面都處理好，就可以來看結果了

![qrcode](https://lh5.googleusercontent.com/-XWqDIn7kLFs/UMFcwQZq9MI/AAAAAAAALXg/PTyLE0dmsLk/s640/ireport%2520qrcode.jpg)


DONE!!如果有此需求，趕快動手做做看囉～

###請搭配我的github project 服用～

>[ireport-qrcode github](https://github.com/smlsunxie/ireport-qrcode)















