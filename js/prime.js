(function ($) {
    Drupal.behaviors.prime = {
        attach: function (context, settings) {
            $(".block-prime li").addClass('prime-node');
        }
    };
})(jQuery);
