Handlebars.getTemplate = function(name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url : '/js/tmpl/' + name + '.handlebars',
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



var CB = window.CB || {};

CB.help = ( function( $, window, document ) {

    "use strict";
    /*jshint devel:true, jquery:true*/
    /*global alert $ document window*/

    var $el = {
        homeSearchInput :  $('#q'),
        globalSearchInput : $('#q-top')
    };

    var config = {
        typeaheadAction: 'http://localhost:3000/help/autocomplete?query=',
        searchAction:    'http://localhost:3000/help/search.json',
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

    var init = function() {
        bindEvents();
        if ( $el.homeSearchInput.length ) {
            homeSearch();
        }
    };

    var bindEvents = function() {
        $el.homeSearchInput.typeahead( typeAhead );
        $('#js-home-search').submit(function() {
            var form = this;
            postSeach( form );
            return false;
        });
    };

    var postSeach = function( form ) {
        var searchTerm = $( form ).serialize();
        var searchUrl = '/help/search.json?'+searchTerm;
        history.pushState(null, null, searchUrl);

        $.ajax({
            url:  config.searchAction,
            type: form.method,
            data: $( form ).serialize(),
            success: function( data ) {
               renderSearchResults( data );
            }
        });
    };

    var renderSearchResults = function( response ) {

        if ( !response.results.length ) {
            return;
        }

        var compiledTemplate   = Handlebars.getTemplate('searchResults');
        var searchResultsHtml  = compiledTemplate( response );

        console.log( searchResultsHtml );
        $('#js-primary-content').html( searchResultsHtml );
    };

    var homeSearch = function() {
        console.log('homeSearch');
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