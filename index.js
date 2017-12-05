$(document).ready(function(){
    $( window ).load( function(){
        $( '.lazyload' ).each( function(){
            //* set the img src from data-src
            $( this ).attr( 'src', $( this ).attr( 'data-src' ) );
        } );
        $( '.lazyloadBackground' ).each( function(){
            //* set the img src from data-src
            $( this ).css( 'background-image','url('+ $( this ).attr( 'data-src' )+")" );
        } );
    } );
})