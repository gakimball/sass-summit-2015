$(document).foundation();

var $cart = $('#shopping-cart');

$('#shopping-cart-open').click(function() {
  Foundation.Motion.animateIn($cart, 'hinge-in', function() {
    $('.shopping-cart-items').addClass('is-animating');
  });
});

$('#shopping-cart-close').click(function() {
  Foundation.Motion.animateOut($cart, 'hinge-out');
});
