$(function() {
  'use strict';
  let $target = $('#pageTop');
  
  $target.on('click', pageTop);
  
  function pageTop() {
    $('html, body').animate({scrollTop: 0}, 500);
  }
});