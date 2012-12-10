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

