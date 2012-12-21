---
layout: post
title: "More Advanced octopress with Slide Features"
date: 2012-11-29 11:44
comments: true
external-url: 
categories: [slide,octopress,deck.js]
---

octopress slide 系列又來了，第三彈！不知道會不會再有續集⋯

哈～就讓我們繼續看下去～

前一篇：[octopress Slide Advanced](http://smlsun.com/blog/2012/11/28/octopress-slide-advanced/)

再上一篇的最後有說到：

>這部份我覺得可以在方便點改成下列樣式，實際用時常常會漏掉div tag 的開始或結束

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
>其中 slideFirst 替換成 ``<div class='slide'>``

>slide 替換成 ``</div><div class='slide'>``

>最後 slideEnd 替換成 ``</div>``

well，我將他完成了！這算是我的Ruby初體驗，進入正題：

一開始我想說，嗯～如果要完成這樣的功能，我需要能夠自定Liquid tag

再上一篇有提到，slide功能的實作是參考網路上的大大kmees，他有實作一個plugin __slide.rb__，原本的程式碼如下：

``` ruby
require 'rdiscount'

module Jekyll
  class Slide < Liquid::Block
    SlideId = /(\w+)/

    def initialize(tag_name, markup, tokens)
      super
      @id = nil
      if markup.strip =~ SlideId
        @id = $1
      end
    end

    def render(context)
      id_tag = " id='#{@id}'" unless @id.nil?
      content = RDiscount.new(super.strip, :smart).to_html.chop
      "<div class='slide'#{id_tag}>#{content}</div>".strip
    end
  end
end

Liquid::Template.register_tag('slide', Jekyll::Slide)
```
可以看到 他繼承了 Liquid::Block
大致上的重點：

1. 因為繼承 Liquid::Block，所以有開始就必須要有結束，所以原PO必須``{% slide %}`` ``{% endslide $}``成對，這也造成我認為不方便的地方，有時候容易遺漏
2. 利用``initialize``取出 tag的id數值
3. render時將 Slide Block 範圍的 content 內容透過 ``RDiscount``將markdown語法轉換成html
4. 將轉換好的內容利用 div tag 包起來，並且將 第一步取得的id 填入div id屬性
5. 最後再將tag 註冊到Liquid::Template (23行)，讓 Liquid 知道遇到{ % slide %}要進行處理

大致上運作原理如上，用下面的例子來看：
 
```
{% slide first %}
  ## Title
  content
{% endslide $}
```

轉換出來的結果為：

```html
<div class='slide' id='first'>
  <h2>Title</h2>
  content
</div>
```
原文都有上述說明，大家可以去看，接著！為了讓文章開頭所說的，更方便進行slide的建立，中間我有做一個錯誤的版本，我天真的認為Jekyll本身就會將markdown內容進行轉換，故第一版的設計我做了一些調整，

1. 將原本 Slide改為繼承 ``Liquid::Tag`` 直接輸出 ``</div><div class='slide'>`` 
2. 新增 slideStart 輸出 ``<div class='slide' id='first'>``
3. 新增 slideEnd 輸出 ``</div>``

試著preview 看看：
```
{% slideStart %}
  ## Title
  content
{% Slide $}  
  ## Title
  content 
{% SlideEnd $}
```
哈哈！事情果然不是我想的那樣，輸出結果如下：

```html
<div class='slide'>
  ## Title
  content
</div><div class='slide'>
  ## Title
  content
</div>
```

well~沒有進行轉換，就是缺了RDiscount的處理，上網查一下他就是轉換markdown的轉譯器

再接再厲，調整過後完整的__slide.rb__，如下：

``` ruby
require 'rdiscount'

module Jekyll


  class SlideBlock < Liquid::Block
    SlideId = /(\w+)/

    def initialize(tag_name, markup, tokens)
      super
      @id = nil
      if markup.strip =~ SlideId
        @id = $1
      end
    end

    def render(context)
      id_tag = " id='#{@id}'" unless @id.nil?
      content = RDiscount.new(super.strip, :smart).to_html.chop
      "<div class='slide'#{id_tag}>#{content}</div>".strip
    end
  end


  class Slide < Liquid::Tag
    SlideId = /(\w+)/

    def initialize(tag_name, markup, tokens)
      super
      @id = nil
      if markup.strip =~ SlideId
        @id = $1
      end
    end

    def render(context)
      id_tag = " id='#{@id}'" unless @id.nil?
      content = "</div><div class='slide'#{id_tag}>"
    end
  end

end
Liquid::Template.register_tag('slideBlock', Jekyll::SlideBlock)
Liquid::Template.register_tag('slide', Jekyll::Slide)

```

重點如下：

1. 原PO 的 ``Slide < Liquid::Block`` 保留，還是有markdown轉換的處理，更名為 ``SlideBlock < Liquid::Block``
2. 新增 ``Slide < Liquid::Tag`` ，輸出 ``</div><div class='slide'#{id_tag}>``

來看結果，範例如下：

```
{% slideBlock %}
## title
{% slide %}
## title
{% slide %}
## title
{% endslideBlock %}
```

就可以正確轉換，只要整個slide開始結束，特別使用 ``{% slideBlock %}`` 與 ``{% endslideBlock %}``

中間都用 ``{% slide %}``把每個段落隔開就OK啦，是不是方便許多，也不會再有忘記關閉block的情形，so easy!


##打完收工！



