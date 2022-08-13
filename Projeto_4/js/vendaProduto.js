$(function(){

	indexAtual = 0;
	indexMax = Math.ceil($('.img-nav').length/3)-1;

	criarSlide();
	alterarSlide();
	clickarImg();

	function criarSlide(){
		tamBoxSlide = $('.img-nav').length * 33.3;
		$('.nav').css('width',tamBoxSlide+'%')
		$('.img-nav').css('width',33.3*(100/tamBoxSlide)+'%')
	}

	function alterarSlide(){
		$('#right').click(function(){
			if(indexAtual < indexMax){
				indexAtual++
				var offSet = $('.img-nav').eq(indexAtual*3).offset().left - $('.nav').offset().left;
				$('.box-nav').animate({'scrollLeft':offSet})
			}
			else{
				console.log('chegamos ao final')
			}
		})

		$('#left').click(function(){
			if(indexAtual > 0){
				indexAtual--
				var offSet = $('.img-nav').eq(indexAtual*3).offset().left - $('.nav').offset().left;
				$('.box-nav').animate({'scrollLeft':offSet})
			}
			else{
				console.log('chegamos ao final')
			}
		})
	}

	function clickarImg(){
		$('.img-nav').click(function(){
			$('.img-nav').css('border','5px solid white')
			$(this).css('border','3px solid #DF090A')
			img = $(this).css('background-image')
			$('.img').css('background-image',img)
		})

	}
})