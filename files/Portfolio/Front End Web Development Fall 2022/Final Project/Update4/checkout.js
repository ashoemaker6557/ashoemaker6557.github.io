"use strict";

$(document).ready( () => {
    let keys = Object.keys(sessionStorage);
    let total_cost2 = 0;
    for(let key of keys) {
        let total_cost = 0;
		let text = sessionStorage.getItem(key).split("|");
		total_cost = total_cost + (Number(text[1]) * Number(text[2]));

        $("h4:last").after('<p>' + text[2] + ' <a href="#">' + text[0] + '</a> <span class="price">' + total_cost + '</span></p>');
        total_cost2 = total_cost2 + total_cost;
    }

    $("b").html(total_cost2)
});