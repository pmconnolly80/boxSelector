//****************************************
// Click event for a div
//****************************************
$('div').click(function() {
  var $allDivs = $('div');
  $allDivs.css('border', 'none');
  $allDivs.removeClass('selectedDiv');
  
  var $clickedDiv = $(this);
  $clickedDiv.css('border', '1px solid black');
  $clickedDiv.addClass('selectedDiv');
  
  $('form').removeClass('hidden');
});

//****************************************
// Click event for the form button
//****************************************
$('button').click(function(event) {
  event.preventDefault();
  
  var color = $('input').val();
  
  $('.selectedDiv').css('background', color);
   
});