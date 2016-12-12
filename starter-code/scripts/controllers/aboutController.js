(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
    /* TODO: Use your DOM skills to reveal only the about section! */
  };

  module.aboutController = aboutController;
})(window);
