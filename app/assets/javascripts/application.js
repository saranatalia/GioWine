// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_self

var start_to_fix_header = 30;
var calc_for_fixed_report = function() {
  var current_scroll_top = $(window).scrollTop();
  var current_position = $('#header').css('position');
  if ((current_scroll_top > start_to_fix_header) && (current_position != 'fixed')) {
    $('#header').addClass('fixed');
    $('#saracontent').css('margin-top', $('#header').height()+($('#header').height()/2));
  }
  if ((current_scroll_top < (start_to_fix_header + 1)) && (current_position == 'fixed')) {
    $('#header').removeClass('fixed');
    $('#saracontent').css('margin-top', 0);
  }
};
$(window).scroll(calc_for_fixed_report);
calc_for_fixed_report();
