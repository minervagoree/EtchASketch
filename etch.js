/* Insert divs into etch a sketch */

var divNumber = 100;
//var divNumberSquared = divNumber * 2;

$(document).ready(function() {
	for (var i = 0; i < divNumber; i++) {
		$('#etchBody').append('<div id="eachDiv' + i +' " class="draw">s</div>');
	};

	$('.draw').on('mouseenter', function() {
		$(this).addClass('highlight');
	});

	$('.draw').on('mouseleave', function() {
		$(this).addClass('trail');
	});

	
	$('#clear, #new').click(function() {
		if(this.id === "clear") {
		 	$('.draw').removeClass('trail');
        };
        /*else if (this.id === "new") {

        }; */

	});

});