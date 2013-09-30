var CB = window.CB || {};

Handlebars.c66 = window.Handlebars.c66 || {};

Handlebars.c66.config = {
    tmplPath:      '/js/tmpl/',
    tmplExtention: '.handlebars'
};

Handlebars.getTemplate = function( name ) {
    if ( Handlebars.templates === undefined || Handlebars.templates[name] === undefined ) {
        $.ajax({
            url : Handlebars.c66.config.tmplPath + name + Handlebars.c66.config.tmplExtention,
            datatype: 'text/javascript',
            success : function(response, status, jqXHR) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                //Handlebars.templates[name] = Handlebars.compile(jqXHR.responseText);
                Handlebars.templates[name] = Handlebars.compile(response);
            },
            async : false
        });
    }
    return Handlebars.templates[name];
};


CB.help = ( function( $, window, document ) {

    "use strict";
    /*jshint devel:true, jquery:true*/
    /*global alert $ document window*/

    var $el = {
        homeSearchInput :     $('#q'),
        globalSearchInput :   $('#q-top'),
        autoCompleteFields :  $('input.js-typeahead'),
        searchForm :          $('form.js-search-form')
    };

    var config = {
        typeaheadAction: 'http://localhost:3000/help/autocomplete?query=',
        searchAction:    'http://localhost:3000/help/search.json',
        home:            'http://localhost:4000/'
    };

    var init = function() {
        bindEvents();

        if ( $('body').hasClass('home') ) {
            homeSearch();
        }
    };

    var bindEvents = function() {

        $el.autoCompleteFields.typeahead( typeAhead );

        $el.searchForm.submit(function() {
            var form = this;
            postSeach( form );
            return false;
        });

        $(document.body).on('click', 'nav.crumbs a', function(){
            window.history.back();
        });

        /*
        * Necessary hack because WebKit fires a popstate event on document load
        * https://code.google.com/p/chromium/issues/detail?id=63040
        * https://bugs.webkit.org/process_bug.cgi
        */
        window.addEventListener('load', function() {
          setTimeout(function() {
            window.addEventListener('popstate', function() {
                console.log('popstate fired - do some navigation');
                goHome();
            });
          }, 0);
        });

    };

    var goHome = function() {
        window.location.href = config.home;
    };

    var typeAhead = {
         source: function( typeahead, query ) {
            var searchAction = config.typeaheadAction + query;

            $.ajax({
                url: searchAction
            }).done(function (data) {
                console.log( data );
                typeahead.process( data.suggestions );
            }).fail(function (jqXHR, textStatus) {
                console.log( jqXHR );
                console.log( textStatus );
            });
        }
    };

    var postSeach = function( form ) {
        var searchTerm = $( form ).serialize();
        var searchUrl = '/help/search.json?'+searchTerm;
        history.pushState(null, null, searchUrl);

        $.ajax({
            url:  config.searchAction,
            type: form.method,
            data: searchTerm,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            complete: function () {
                $('body').removeClass('loading');
            },
            success: function( data ) {
               renderSearchResults( data );
            }
        });
    };

    var renderSearchResults = function( response ) {
        console.log( response.results );
        if ( !response.results.length ) {
            return;
        }

        var compiledTemplate   = Handlebars.getTemplate('searchResults');
        var searchResultsHtml  = compiledTemplate( response );

        if ( $('#js-primary-content').length ) {
            $('#js-primary-content').html( searchResultsHtml );
        } else {
            $('article.article').html( searchResultsHtml );
        }

    };

    var homeSearch = function() {

        $el.homeSearchInput.appear();

        $(document.body).on('appear', '#q', function(e) {
            $('.top-search').css( 'visibility','hidden' );
        });

        $(document.body).on('disappear', '#q', function(e) {
            $('.top-search').css( 'visibility','visible' );
            $('#q-top').focus();
        });
    };



    // Return public
    return {
        init: init
    };

})( jQuery, this, document );