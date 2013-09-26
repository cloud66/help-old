var CB = window.CB || {};

CB.help = ( function( $, window, document ) {

    var init = function() {
        // autocomplete();
        if ( $('div.search-pri-box').length ) {
            homeSearch();
        }
    };

    var autocomplete = function() {
        $('input[name="q"]').typeahead( {

            source: function( typeahead, query ) {
                var searchAction = '/help/autocomplete' + "?query=" + query;

                $.ajax({
                    url: searchAction
                }).done(function (data) {
                    typeahead.process( data.suggestions );
                }).fail(function (jqXHR, textStatus) {
                   console.log( textStatus );
                });
            }

        });
    };

    var homeSearch = function() {
        $('#q').appear();

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