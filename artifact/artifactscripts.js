$(document).ready(function(){
	//include your img ID's below on line 3.
  $('#one, #two, #three, #four, #five, #six, #seven').click(function() {
	$('#one, #two, #three, #four, #five, #six, #seven').css('margin-top', '');
    $('#one, #two, #three, #four, #five, #six, #seven').css('margin-left', '');
    $('#one, #two, #three, #four, #five, #six, #seven').css('width', '');
    $('#one, #two, #three, #four, #five, #six, #seven').css('height', '');
	$('section.artifactsection div.acontainer div.artimgsingle a div.item img').css('width', 'auto');
    $(this).addClass('lightbox')
    
      //image starting dimensions
    var height = $(this).height();
    var width = $(this).width();

    //viewport dimensions
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
   
    //image resize dimensions
    var imgHeight = screenHeight - screenHeight*.25;
    var imgWidth = screenWidth - screenWidth*.25;
    //check which side of the screen is smaller
    if (screenWidth > screenHeight) { //set image's height to screen's height
      $('.lightbox').css('height', imgHeight);
      //move image up by half it's new height to center it
      $('.lightbox').css('margin-top', -1 * imgHeight / 2 + "px");

      //recalculate new image width 
      var width = $(this).width();
      //move image by half it's new width to center it
      $('.lightbox').css('margin-left', -1 * width / 2 + "px");
    } else {
      $('.lightbox').css('width', imgWidth);

      //move image by half it's new width to center it
      $('.lightbox').css('margin-left', -1 * imgWidth / 2 + "px");

      //recalculate new image height
      var height = $(this).height();

      //move image up by half it's new height to center it
      $('.lightbox').css('margin-top', -1 * height / 2 + "px");
    }

    $('.screen').css('display', 'block');
	
  });

  //make click off function here and reset all CSS data 
  $('.screen').click(function() {
    $('.screen').css('display', 'none');
    $('#one, #two, #three, #four, #five, #six, #seven').removeClass('lightbox');
    $('#one, #two, #three, #four, #five, #six, #seven').css('margin-top', '');
    $('#one, #two, #three, #four, #five, #six, #seven').css('margin-left', '');
    $('#one, #two, #three, #four, #five, #six, #seven').css('width', '');
    $('#one, #two, #three, #four, #five, #six, #seven').css('height', '');
  })
  
  //square thumbnail script
  $('.item').nailthumb({width:200, height:200});

	})