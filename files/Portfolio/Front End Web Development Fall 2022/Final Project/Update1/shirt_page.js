"use strict";

$(document).ready( () => {
	
	$(".underImage a").each( function(index){
		// number of times a the same shirt has been purchased
		this.numPurchases = 0;
		
		// Gets item information
		let text = $(this).attr("title").split("|");
		let imgLink = $(this).attr("href");
		let cost = text[0];
		let name = text[1];
		
		$(this).click(function(evt) {
			evt.preventDefault();
			this.numPurchases = this.numPurchases + 1;
			
			// Adds the item information to be used at checkout
			sessionStorage.setItem(name, name + "|" + cost + "|" + this.numPurchases + "|" + imgLink);
			
		});
		
	});
	
	
});