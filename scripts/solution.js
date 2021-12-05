$(function(){
  $('#console-box').append('console is ready...');
  // for the clicking on the 0-9 range
  $('li').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|Minutes:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
// clicking on the radio button
  $('.form-check').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|Hours/day+time:'+$(this).text()+'.');
  });
//  click radio and switch enable
  $(".form-check").on("change", function (e) {
    //enables the disable selection box
    $("#switch1").prop("disabled", false);
    $("#switch2").prop("disabled", false);
  
  });
});
  
