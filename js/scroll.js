$(document).ready(function(){ 
	$('#menuTrabajos').click(function(){
		$('body, html').animate({
			scrollTop: $('#trabajos').offset().top
		}, 500);

	});		
		if ($(window).width() < 520){
			console.log('Prueba');
		}
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.13);
		$('.portada').css({
			'background-position': '0 -' + posicion + 'px'
		});

		if (barra > 150) {
			$('.navbarTop').css({
				'background': '#272727',
				'transition' : '.5s'
			});		
		}else{
			$('.navbarTop').css({
				'background': 'transparent',
				'transition' : '.5s'
			});		
		}
 
	});
 
});