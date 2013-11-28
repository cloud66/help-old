/* ===================================================
 * JQuery plugins
 * ===================================================  */


 /*Browser detection patch*/

(function($) {

  if (jQuery.browser) return;

  jQuery.browser = {};
  jQuery.browser.mozilla = false;
  jQuery.browser.webkit = false;
  jQuery.browser.opera = false;
  jQuery.browser.msie = false;

  var nAgt = navigator.userAgent;
  jQuery.browser.name  = navigator.appName;
  jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
  jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
  var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    jQuery.browser.opera = true;
    jQuery.browser.name = "Opera";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
      jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
  }
// In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    jQuery.browser.msie = true;
    jQuery.browser.name = "Microsoft Internet Explorer";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
  }
// In Chrome, the true version is after "Chrome"
  else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    jQuery.browser.webkit = true;
    jQuery.browser.name = "Chrome";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
  }
// In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    jQuery.browser.webkit = true;
    jQuery.browser.name = "Safari";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
      jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
  }
// In Firefox, the true version is after "Firefox"
  else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    jQuery.browser.mozilla = true;
    jQuery.browser.name = "Firefox";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
  }
// In most other browsers, "name/version" is at the end of userAgent
  else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
      (verOffset=nAgt.lastIndexOf('/')) )
  {
    jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
    jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
    if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
      jQuery.browser.name = navigator.appName;
    }
  }
// trim the fullVersion string at semicolon/space if present
  if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
    jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
  if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
    jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

  jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
  if (isNaN(jQuery.browser.majorVersion)) {
    jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
    jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
  }
  jQuery.browser.version = jQuery.browser.majorVersion;

})( window.jQuery );

(function($) {

  "use strict"

  var Typeahead = function ( element, options ) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.$menu = $(this.options.menu).appendTo('body')
    this.source = this.options.source
    this.onselect = this.options.onselect
    this.strings = true
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = JSON.parse(this.$menu.find('.active').attr('data-value'))
            , text

      if (!this.strings) text = val[this.options.property]
      else text = val

      this.$element.val(this.updater(text)).change()

      if (typeof this.onselect == "function")
          this.onselect(val)

      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.offset(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu.css({
        top: pos.top + pos.height
      , left: pos.left
      })

      this.$menu.show()
      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var that = this
        , items
        , q
        , value

      this.query = this.$element.val()

      if (typeof this.source == "function") {
        value = this.source(this, this.query)
        if (value) this.process(value)
      } else {
        this.process(this.source)
      }
    }

    , lookupAll: function( event ) {
        this.query = this.$element.val()

        var items = this.source

        return this.query == '' ?
            this.render(items.slice(0, this.options.items)).show() :
                this.lookup( event )
    }

  , process: function (results) {

      var that = this
        , items
        , q

      if (results.length && typeof results[0] != "string")
          this.strings = false

      this.query = this.$element.val()

      if (!this.query) {
        return this.shown ? this.hide() : this
      }

      items = $.grep(results, function (item) {
        if (!that.strings)
          item = item[that.options.property]
        if (that.matcher(item)) return item
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item
        , sortby

      while (item = items.shift()) {
        if (this.strings) sortby = item
        else sortby = item[this.options.property]

        if (!sortby.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~sortby.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', JSON.stringify(item))
        if (!that.strings)
            item = item[that.options.property]
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if ($.browser.webkit || $.browser.msie) {
        this.$element.on('keydown', $.proxy(this.keypress, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , keypress: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  $.fn.typeahead = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , onselect: null
  , property: 'value'
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD DATA-API
  * ================== */

  $(function () {
    $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
      var $this = $(this)
      if ($this.data('typeahead')) return
      e.preventDefault()
      $this.typeahead($this.data())
    })
  })


  /* end plugins */

})( window.jQuery );


;(function($) {

  /**
* Feature detect position sticky, if it exists then do nothing
*/
  if ((function(d) {
    try {
      // some browsers will throw an error when assigning an
      // unsupported value to a property
      d.style.position = "sticky"
    } catch (e) {
      return false
    }
    // this will return false if the browser doesn't recognize
    // "sticky" as a valid position value
    return d.style.position === "sticky"
  }(document.createElement("div")))) return


  /**
* A unique id used to safely remove event callbacks
*/
  var uniqueID = 0


  /**
* Scroll event callback
* Based on the scroll position toggle the element between
* position:fixed and its default position value
*/
  function onscroll($el) {
    var data = $el.data("position:sticky")
    if (!data) return
    if ($(window).scrollTop() >= data.offsetTop - data.top) {
      if (!data.$clone) {
        data.$clone = $el.clone().css({position: "fixed", top: data.top}).appendTo("body")
        $el.css("visibility", "hidden")
        onresize($el)
      }
    }
    else {
      if (data.$clone) {
        data.$clone.remove()
        data.$clone = null
        $el.css("visibility", "visible")
      }
    }
  }


  /**
* Resize event callback
* Recalculate the dimensions of the hidden element as
* it may have changed. If it has, update the clone
*/
  function onresize($el) {
    var data = $el.data("position:sticky")
      , offset
    // Make sure no operations that require a repaint are
    // done unless a cloned element exists
    if (data && data.$clone) {
      offset = $el.offset()
      data.offsetTop = offset.top
      data.$clone.css({left: offset.left, width: $el.width()})
    }
  }

  function doMatched(rules) {
    rules.each(function(rule) {
      var $elements = $(rule.getSelectors())
        , declaration = rule.getDeclaration()
      $elements.each(function() {
        var $this = $(this)
          , data = $this.data("position:sticky")
        if (!data) {
          data = {
            id: ++uniqueID,
            offsetTop: $this.offset().top,
            top: parseInt(declaration.top, 10)
          }
          $this.data("position:sticky", data)
        }
        onscroll($this)
        $(window).on("scroll.position:sticky:" + data.id, function() { onscroll($this) })
        $(window).on("resize.position:sticky:" + data.id, function() { onresize($this) })
      })
    })
  }

  function undoUnmatched(rules) {
    rules.each(function(rule) {
      var $elements = $(rule.getSelectors())
      $elements.each(function() {
        var $this = $(this)
          , data = $(this).data("position:sticky")
        if (data) {
          if (data.$clone) {
            data.$clone.remove()
            $this.css("visibility", "visible")
          }
          $(window).off(".position:sticky:" + data.id)
          $this.removeData("position:sticky")
        }
      })
    })
  }

  Polyfill({
    declarations:["position:sticky"]
  }, {
    include: ["position-sticky"]
  })
  .doMatched(doMatched)
  .undoUnmatched(undoUnmatched)

}(jQuery))