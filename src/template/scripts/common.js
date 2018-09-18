$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.slider__list').slick({
		arrows: false,
		dots: true,
		fade: true
	});

	var reviewsNumHTML = $('.reviews__counts-num'),
			reviewsSumHTML = $('.reviews__counts-sum'),
			reviewsList = $('.reviews__list'),
			reviewsArrows = $('.reviews__arrows');



	reviewsSumHTML.html($('.reviews__item').length);

	reviewsList.slick({
		fade: true,
		infinite: false,
		appendArrows: reviewsArrows
	});

	reviewsList.on('afterChange', function(event, slick, direction){
		var reviewIndex = direction+1;
		reviewsNumHTML.html(reviewIndex);

	});


	var stepsList = $('.steps__list'),
			stepsControl = $('.steps__control');

	stepsList.slick({
		infinite: false,
		variableWidth: true,
		appendArrows: stepsControl,
		responsive: [{
			breakpoint: 752,
			settings: {
				variableWidth: false
			}
		}]
	})



	$('.for').tabs();

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input');
	

	$('.input .input__wrap').focus(function(event) {
		var input = $(this).parents('.input');

		input.toggleClass('input_focus');

	});

	$('.input .input__wrap').blur(function(event) {
		var input = $(this).parents('.input');
		input.removeClass('input_focus');
	});

	$('.input .input__wrap').change(function(event) {
		var input = $(this).parents('.input'),
				text = $(this).val();
		if (text != '') {
			input.addClass('input_filled');
		} else {
			input.removeClass('input_filled');
		}
	});

	$(".panel__nav a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
		return false;
	});
});
