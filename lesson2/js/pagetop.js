$(function() {
  'use strict';

  $('#pagetop a').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 1000);
  });
});