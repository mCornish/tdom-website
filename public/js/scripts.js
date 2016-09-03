'use strict';

$(document).ready(function () {
	init();
});

function init() {
	bindEvents();
}

function bindEvents() {
	$(window).on('mousemove', function (e) {
		var $light = $('.js-flashlight');
		var width = $light.width();
		var height = $light.height();
		var left = e.pageX - width / 2;
		var top = e.pageY - height / 2;
		$light.css({ 'margin-left': left + 'px', 'margin-top': top + 'px' });
	});
}