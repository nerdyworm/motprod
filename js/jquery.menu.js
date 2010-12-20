$(document).ready(function() {
  $("#nav li").hover(function() {
    $(this).find(".subnav").slideDown('fast');
  }, function() {
    $(this).find(".subnav").slideUp('fast');
  });
});
