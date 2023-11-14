$(document).ready(function(){
    let title = $('h1');
    title.addClass( "myClass yourClass" );
    title.on( "click", function() {
        $( ".test" ).toggle( "slow", function() {
            // Animation complete.
          });
      } );
    console.log(title);
});