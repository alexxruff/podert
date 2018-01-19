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
				'background': '#ffffff',
				'transition' : '.5s',
				'boxShadow' : 'rgba(0,0,0,.3) 5px 5px 10px'
			});		
			$('.nav-link').css({
				'color': '#222'
			});		
		}else{
			$('.navbarTop').css({
				'background': 'transparent',
				'transition' : '.5s',
				'boxShadow' : 'none'
			});		
			$('.nav-link').css({
				'color': '#fff'
			});	
		}

		if (barra > 150) {
			$('.nav-link').css({
				'color': '#222'
			});		
		}else{
			$('.nav-link').css({
				'color': '#fff'
			});	
		}
 
	});
 
});