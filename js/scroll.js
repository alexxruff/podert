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

		var mercado = ['mercado1.jpeg', 'mercado2.jpeg', 'mercado3.jpeg', 'mercado4.jpeg'];
		var unacar = ['unacar1.jpeg', 'unacar2.jpeg', 'unacar3.jpeg', 'unacar4.jpeg'];
		var megaParque = ['megaparque1.jpeg', 'megaparque2.jpeg', 'megaparque3.jpeg', 'megaparque4.jpeg', 'megaparque5.jpeg', 'megaparque6.jpeg'];
		var info = {
			mercadoTitle: 'ARCOTECHO: MERCADO',
			mercadoDescription: 'Ciudad PEMEX, Macuspana, Tabasco.',
			megaParqueTitle: 'MEGAPARQUE: NAVES INDUSTRIALES',
			megaParqueDescription: 'Villahermosa, Tabasco.',
			unacarTitle: 'MULTYPANEL: UNACAR',
			unacarDescription: 'Ciudad del carmen, Campeche.'
		}
		var count = 0;
		var how = [unacar, megaParque, mercado];
		var countHow = 0;

		$('#mercado').click(function(){
			$('.galeria').css({
				'display': 'block',
			});	
			$("#galeria3").attr("src",'images/'+mercado[0]);

			$("#titleGaleria").text(info.mercadoTitle);
			$("#descriptionGaleria").text(info.mercadoDescription);

			count = 0;
			countHow = 2
		});

		$('#unacar').click(function(){
			$('.galeria').css({
				'display': 'block',
			});	
			$("#galeria3").attr("src",'images/'+unacar[0]);

			$("#titleGaleria").text(info.unacarTitle);
			$("#descriptionGaleria").text(info.unacarDescription);

			count = 0;
			countHow = 0
		});

		$('#megaparque').click(function(){
			$('.galeria').css({
				'display': 'block',
			});	
			$("#galeria3").attr("src",'images/'+megaParque[0]);

			$("#titleGaleria").text(info.megaParqueTitle);
			$("#descriptionGaleria").text(info.megaParqueDescription);

			count = 0;
			countHow = 1
		});

		$('#closeGaleria').click(function(){
			$('.galeria').css({
				'display': 'none',
			});	

		});
		$('#adelante').click(function(){
			var largo = how[countHow].length;
			console.log(count)
			if (count < largo - 1){
				count = count + 1;
				console.log(count)
				return $("#galeria3").attr("src",'images/'+how[countHow][count]);
			}else{
				return true
			}

		});
		$('#atras').click(function(){
			var largo = 0;
			console.log(count)
			if (count > largo){
				count = count - 1;
				console.log(count)
				return $("#galeria3").attr("src",'images/'+how[countHow][count]);
			}else{
				return true
			}

		});

		if (barra > 150) {
			$('.navbarTop').css({
				'background': '#ffffff',
				'transition' : '.5s',
				'paddingTop' : '5px',
				'boxShadow' : 'rgba(0,0,0,.3) 5px 5px 10px'
			});		
			$('.logo').css({
				'width' : '70px',
				'transition' : '.5s'

			});			
			$('.nav-link').css({
				'color': '#222'
			});		
		}else{
			$('.navbarTop').css({
				'background': 'transparent',
				'transition' : '.5s',
				'paddingTop' : '20px',
				'boxShadow' : 'none'
			});		
			$('.logo').css({
				'width' : '110px',
				'transition' : '.5s'

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