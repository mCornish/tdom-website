"use strict";

$(document).ready(function () {
	init();
});

function init() {
	bindEvents();
}

function bindEvents() {
	var BACKGROUND_WIDTH = 3840;
	var BACKGROUND_HEIGHT = 2160;

	// $( '.js-intro' ).on( 'mousemove', function(e) {
	// 	const $light = $( '.js-flashlight' );
	// 	const elWidth = $light.width();
	// 	const elHeight = $light.height();
	// 	const winWidth = $( window ).width();
	// 	const winHeight = $( window ).height();
	// 	const widthRate = BACKGROUND_WIDTH / winWidth;
	// 	const heightRate = BACKGROUND_HEIGHT / winHeight;

	// 	const elLeft = e.pageX - ( elWidth / 2 ); // Left position of flashlight
	// 	const elTop = e.pageY - ( elHeight / 2 ); // Top position of flashlight
	// 	const backLeft = -( e.pageX - ( elWidth / 2 ) ) * widthRate; // Left position of background
	// 	const backTop = -( e.pageY - ( elHeight / 2 ) ) * heightRate; // Top position of background

	// 	$light.css({
	// 		'margin-left': `${elLeft}px`, 
	// 		'margin-top': `${elTop}px`,
	// 		'background-position': `${backLeft}px ${backTop}px`
	// 	});
	// });
}