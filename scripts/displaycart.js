
function showcart(){
	var total =0;
	var obj = fetchShoppingList();
	
	document.getElementById("cart").innerHTML = obj.length;
	document.writeln('<H1>Your Shopping Cart</H1>');
	document.writeln(obj.length);
	/*if(obj.length > 0){
		
 	 for(i in obj.length){
		document.write( 
			'<div class="cart-item">' +
			'<img class="cart-item-img" src="'+ obj[i].itemImageSrc + '" alt="' +  obj[i].itemImageAlt + '">' +
			'<p class="model">' + obj[i].itemDescription + '</p>' +
			'<p class="model">' + obj[i].itemPrice + '</p>' +
			'<button class="cart-delete-button" type="button">Remove</button>' +
			'</div>'				
		);
		
		total += parseFloat(obj[i].itemPrice); 
		
		
	}
	
	}//end if
	*/ 
}//end fcn

