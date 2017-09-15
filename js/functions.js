(function($) {
  $(document).on('ready', function () {
    $('.hamburger').on('click', function () {
      $('.nav-menu').slideToggle();
    });

    $('.nav-menu ul li').on('click', function () {
      if ($(window).width() < 830) {
        $('.nav-menu').slideToggle();
      }
    })

    // A11Y

    $('.hamburger').on('keypress', function (e) {
      if (e.keyCode === 13) {
        $('.nav-menu').slideToggle();
      }
    });

    $('.nav-menu ul li').on('keypress', function () {
      if ($(window).width() < 830 && e.keyCode === 13) {
        $('.nav-menu').slideToggle();
      }
    })

    $('.contact-link').on('click', function () {
      $('.tooltip').toggle();
    })

    $('.contact-link').on('keypress', function (e) {
      if (e.keyCode === 13) {
        $('.tooltip').toggle();
      }
    })

    $(window).width() > 830 ? $('.nav-menu').attr('style', 'display: block') : $('.nav-menu').attr('style', 'display: none');

  });

  $(window).on('resize', function () {
    $(window).width() > 830 ? $('.nav-menu').attr('style', 'display: block') : $('.nav-menu').attr('style', 'display: none');
  });
})(jQuery);
