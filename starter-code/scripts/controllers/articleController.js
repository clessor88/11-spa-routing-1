(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
    /* TODO: Use your DOM skills to reveal only the articles section! */
  };

  module.articleController = articleController;
})(window);
