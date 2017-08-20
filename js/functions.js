(function($) {
  $(document).on('ready', function (){

    // Hide / Show movile menu
    $('.hamburger').on('click', function () {
      $('.nav-menu').slideToggle();
    });


      $('.nav-menu ul li').on('click', function () {
        if ($(window).width() < 640) {
          $('.nav-menu').slideToggle();
        }
      })


    //Hide Info Modal
    $('.close').on('click', function () {
      $('.modal').removeClass('show');
    });

    //Hide History Modal
    $('.history-wrapper').on('click', function () {
      $('.history-modal').removeClass('show');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && $('.history-modal').hasClass('show')) {
         $('.history-modal').removeClass('show');
        }
        if (e.keyCode == 27 && $('.modal').hasClass('show')) {
         $('.modal').removeClass('show');
        }
      });
    });

    $(window).on('resize', function () {
      $(window).width() > 640 ? $('.nav-menu').attr('style', 'display: block') : $('.nav-menu').attr('style', 'display: none');
    })

})(jQuery);
