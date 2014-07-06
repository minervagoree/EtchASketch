/* Insert divs into etch a sketch */

var divNumber = 10;

$(document).ready(function() {
	for (var i = 0; i < divNumber; i++) {
		$('#etchBody').append('<div id="eachDiv' + i +' " class="draw">Something</div>');
	};



});