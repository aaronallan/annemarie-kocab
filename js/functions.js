(function($) {
  $(document).on('ready', function (){

    // Hide / Show movile menu
    $('.hamburger, .mobile-menu ul li').on('click', function () {
      $('.mobile-menu').slideToggle();
    });

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

})(jQuery);
