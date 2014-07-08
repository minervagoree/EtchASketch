/* Insert divs into etch a sketch */

var divRows = 50;
var divCols = 50;



$(document).ready(function() {
	/*for (var i = 0; i < divNumber; i++) {
		$('#etchBody').append('<div id="eachDiv' + i +' " class="draw">s</div>');
	}; */
	//alert("I'm working");
	/*for(var i = 0; i<divRows; i++) {
		$('#etchTable').append('<tr><td><div class="draw">s</div></td></tr>');
	}*/

	for(var i = 0; i<divRows; i++) {
		$('#etchTable').append('<tr></tr>');
	}
	for(var j = 0; j<divCols; j++) {
			$('tr').append('<td><div class="draw">s</div></td>');
	}


	//alert("Rows you have" + $('tr').length);


	$('.draw').on('mouseenter', function() {
		$(this).addClass('highlight');
	});

	$('.draw').on('mouseleave', function() {
		$(this).addClass('trail');
	});

	
	$('#clear').click(function() {
		 	$(this).removeClass('.draw');
		 	$('tr, td').remove();
		 	var divRows2 = prompt("How many rows would you like? (1-100)");
		 	var divCols2 = prompt("How many columns would you like? (1-100)");
		 	
		 	for(var x = 0; x<divRows2; x++) {
				$('#etchTable').append('<tr></tr>');
			}
			for(var y = 0; y<divCols2; y++) {
				$('tr').append('<td><div class="draw">s</div></td>');
			}
			$('.draw').on('mouseenter', function() {
		$(this).addClass('highlight');
	});

	$('.draw').on('mouseleave', function() {
		$(this).addClass('trail');
	});
       
	});



});

