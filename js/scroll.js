$(document).ready(function(){ 	
		if ($(window).width() < 520){
			console.log('Prueba');
		}
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.13);
		console.log(barra)
		$('.portada').css({
			'background-position': '0 -' + posicion + 'px'
		});

		if (barra > 150) {
			$('.navbarTop').css({
				'background': '#1F1F1F',
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