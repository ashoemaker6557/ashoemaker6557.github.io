"use strict";

$(document).ready( () => {
	
	$(".underImage a").each( function(index){
		// Gets item information
		let text = $(this).attr("title").split("|");
		let imgLink = $(this).attr("href");
		let cost = text[0];
		let name = text[1];
		
		$(this).click(function(evt) {
			evt.preventDefault();
			
			// Creates the key for the item if one does not exist
			if (sessionStorage.getItem(name) == null) {
				sessionStorage.setItem(name, name + "|" + cost + "|1|" + imgLink);
			} else {
				let numPurchased = Number(sessionStorage.getItem(name).split("|")[2]);
				numPurchased = numPurchased + 1;
				sessionStorage.setItem(name, name + "|" + cost + "|" + numPurchased + "|" + imgLink);
			}
			
		});
		
	});
	
	
});