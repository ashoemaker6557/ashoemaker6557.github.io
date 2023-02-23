"use strict";

$(document).ready( () => {
	
	let keys = Object.keys(sessionStorage);
	for(let key of keys) {
		let total_cost = 0;
		let text = `${sessionStorage.getItem(key)}`.split("|");
		total_cost = total_cost + (Number(text[1]) * Number(text[2]));
		let imgLink = text[3];
		$("div:last").after('<div class="clothingType">' + 
								'<img src="'+ text[3] + '" alt="Red Flannel Shirt" class="clothing">' +
								'<span class="middleSection">' +
									'<h1 class="clothingName" >' + text[0] + '</h1>' + 
									'<span class="numPrice">' +
										'<p class="test" >' + text[2] + '</p>' +
										'<p class="tests" >$' + total_cost + '</p>' +
									'</span>' +
									'<input type="number" id="number" min="0" max="' + Number(text[2]) + '">' +
									'<p class="removeButton" ><a title="' + text[0] + 'class="remove" href=".com">REMOVE</a></p>' +
								'</span>' +
							'</div>');
	}
	
	const removeInput = document.querySelectorAll("#number");

	$(".removeButton a").each( function(index){
		$(this).click(function(evt) {
			evt.preventDefault();
			let numberToRemove = $(removeInput[index]).val();
		});
	});
	
	
});