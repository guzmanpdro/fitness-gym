var video = document.getElementById('video');
var boton = document.getElementById('boton');

//Función reproductor de video

function playVideo(){
	video.play();
	boton.style.display = "none";
}

video.addEventListener('ended', function(){
	boton.style.display = "block";
})

$(document).ready(function(){
	$('.menu-mobile').on('click', function(){
		$('nav').slideToggle();
	})
})