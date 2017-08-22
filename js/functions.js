(function($) {
  $(document).on('ready', function (){

    $('.hamburger').on('click', function () {
      $('.nav-menu').slideToggle();
    });

    $('.nav-menu ul li').on('click', function () {
      if ($(window).width() < 830) {
        $('.nav-menu').slideToggle();
      }
    })

  });

  $(window).on('resize', function () {
    $(window).width() > 830 ? $('.nav-menu').attr('style', 'display: block') : $('.nav-menu').attr('style', 'display: none');
  });

})(jQuery);
