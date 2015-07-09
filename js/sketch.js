$(document).ready(function() {
   //var $square = $('<div class=".square" />'); 
   
   for(var i = 0; i < 432; ++i){
     $('#wrapper').append('<div></div>');
   }
   $('#wrapper > div').addClass('square');
   
   $('.square').on('mouseenter',
         function() {
            $(this).addClass('highlighted');
         });
   $('a').click(function(event){
      event.preventDefault();
      $('#wrapper > div').removeClass('highlighted');                  
      });
});