$( document ).ready( function() {
  	init();
});

function init() {
  	bindEvents();
}

function bindEvents() {
	const BACKGROUND_WIDTH = 3840;
	const BACKGROUND_HEIGHT = 2160;

	$( '.js-nav-link' ).on( 'click', function(e) {
		$( '.js-nav-link.is-active' ).removeClass( 'is-active' );
		$( e.target ).addClass( 'is-active' );
	});

    // Derived from smooth scroll code here: https://jsfiddle.net/cse_tushar/Dxtyu/141/
    $( document ).on('scroll', handleScroll);

    // Smooth scroll
    $( '.js-nav a' ).on('click', function( e ) {
        e.preventDefault();
        $( document ).off( 'scroll' );

        $( '.js-nav a' ).each(function() {
            $( this ).removeClass( 'is-active' );
        });
        $( this ).addClass( 'is-active' );

        const target = this.hash;
        const menu = target;
        const $target = $( target );
        $( 'html, body' ).stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $( document ).on('scroll', handleScroll);
        });
    });

    function handleScroll( e ) {
        const scrollPos = $( document ).scrollTop();
        $( '.js-nav a' ).each(function() {
            const $currLink = $( this );
            const $refEl = $( $currLink.attr('href') );
            console.log($refEl.offset().top, scrollPos, $refEl.height());
            if( $refEl.offset().top <= scrollPos + 200 && $refEl.offset().top + $refEl.height() > scrollPos ) {
                $( '.js-nav a' ).removeClass( 'is-active' );
                $currLink.addClass( 'is-active' );
                console.log('yes');
            } else {
                $currLink.removeClass( 'is-active' );
            }
        });
    }

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
