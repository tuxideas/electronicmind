(function ($) {
  $(document).ready(function(){

    $('.generos').find('.section-title').find('a').click(function(event){
      event.preventDefault();
    });

    $('.dj').find('.section-title').find('a').click(function(event){
      event.preventDefault();
    })

    var anchor_generos = $('.generos').find('.section-content-single').find('a');
    var anchor_djs = $('.djs').find('.section-content-single').find('a');

    var button_close = $('.button-close');

    jQuery.ajaxSetup({cache:false});

    anchor_generos.click(function(event){
      event.preventDefault();
      var page_link = $(this).attr("href");

      if( $(window).width() > 520 ) {
        $('.content_generos_page').html("Abriendo la definición");
        $('.content_generos_page').load(page_link + " .content-area");
      }
      else {
        window.location.replace($(this).attr("href"));
      }
    });

    anchor_djs.click(function(event){
      event.preventDefault();
      var page_link = $(this).attr("href");

      if( $(window).width() > 520 ) {
        $('.content_djs_page').html("Abriendo la definición");
        $('.content_djs_page').load(page_link + " .content-area");
      }
      else {
        window.location.replace($(this).attr("href"));
      }
    });

  });


})(jQuery);
