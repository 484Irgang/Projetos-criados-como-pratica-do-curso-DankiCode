$(function(){

var somaSlide = $('.box-slide').length
var tamBox = 100 * somaSlide;
var tamSlide = 100 / somaSlide;

	$('.boxSlides').css('width',tamBox+'%')
	$('.box-slide').css('width',tamSlide+'%')

for(i=0;i<somaSlide;i++){
	if(i==0)
		$('.slide').append('<span style="background-color:black;"></span>')
	else{
		$('.slide').append('<span></span>')
	}
}

var indexSlide = 0;
var intervalo;

autoplay();
function autoplay(){
	intervalo = setInterval(function(){
	indexSlide++
	if(indexSlide == somaSlide){
		indexSlide = 0;
	}
	alterarSlide(indexSlide);
	},2500)
}	

cliqueSlide();
function cliqueSlide(){
	$('.slide span').click(function(){
		clearInterval(intervalo);
		indexSlide = $(this).index()
		alterarSlide(indexSlide);
	})
}

function alterarSlide(indexSlide){
	var offSetX = $('.box-slide').eq(indexSlide).offset().left - $('.boxSlides').offset().left
	$('.boxGeral').animate({'scrollLeft':offSetX})
	$('.slide span').css('background-color','#B6B6B6')
	$('.slide span').eq(indexSlide).css("background-color","black")
}

contato();
function contato(){
	$('[goto=contato]').click(function(){
		var offSet = $('#contato').offset().top;
		$('html,body').animate({'scrollTop':offSet})
		$('nav a').css('color','black')
		$(this).css('color','red')
		return false
	})
}


})