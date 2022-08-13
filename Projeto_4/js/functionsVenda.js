$(function(){

var pressed = false

	$('.botao').mousedown(function(){
		pressed = true
		$('body').css('user-select','none')
	})
	$(document).mouseup(function(){
		pressed = false
		$('body').css('user-select','auto')
	})
	
	calcularBox();
	function calcularBox(){
		
		$('.campo').mousemove(function(e){
			if(pressed){
				var tamBox = $(this).width();
				var mouseX = e.pageX - $(this).offset().left;
				if(mouseX < 0)
					mouseX = 0
				else if(mouseX > $(this).width())
					mouseX = $(this).width();

				var mousePorcent = mouseX * (100 / tamBox);

				$('.botao').css('left',mousePorcent+'%')
				$('.preenchimento').css('width',mousePorcent+'%')

				var valorFiltro = mousePorcent * (90000 / 100);
				valorFiltro = formatarValor(valorFiltro);

				$('.valorEscolhido').html('');
				$('.valorEscolhido').html('<span>R$'+valorFiltro+'</span>')
			}
			
		})
	}

	function formatarValor(valorFiltro){
		valorFiltro = valorFiltro.toFixed(2);
		valorArr = valorFiltro.split('.');

		var valorAtual = formatarNum(valorArr);
		return valorAtual
	}

	function formatarNum(valorArr){
		if(valorArr[0] < 1000){
			return valorArr[0]+','+valorArr[1];
		}
		else if(valorArr[0] < 10000){
			return valorArr[0][0]+'.'+valorArr[0].substr(1,valorArr[0].length)+','+valorArr[1];
		}
		else if(valorArr[0] < 100000){
			return valorArr[0][0]+valorArr[0][1]+'.'+valorArr[0].substr(2,valorArr[0].length)+','+valorArr[1]
		}
	}

})