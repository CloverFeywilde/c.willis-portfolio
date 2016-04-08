$(document).ready(function(){
	$('nav a[href^="#"], header a').on('click', function(e) { 
	//Smooth Scroll Script
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
			}, 900, 'swing', function() {
				window.location.hash = target;
				});	
	});
	
	//Gallery Sorter Script
	
	$('ul#filter a').click(function() {
		var filterName = $(this).text().toLowerCase().replace(' ', '-');
		if (filterName == "all") {
			$('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
			} 
		else {
			$('ul#portfolio li').each(function() { 
			if(!$(this).hasClass(filterName)){
				$(this).fadeOut('normal').addClass('hidden');              
			}
			else {
				$(this).fadeIn('normal').removeClass('hidden');
			}
			})
		}
		return(false); 
	})




})