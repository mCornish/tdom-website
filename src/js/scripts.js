$( document ).ready( function() {
  init();
});

function init() {
  bindEvents();
}

function bindEvents() {
	$( window ).on( 'mousemove', function(e) {
		const $light = $( '.js-flashlight' );
		const width = $light.width();
		const height = $light.height();
		const left = e.pageX - ( width / 2 );
		const top = e.pageY - ( height / 2 );
		$light.css({'margin-left': `${left}px`, 'margin-top': `${top}px`});
	});
}