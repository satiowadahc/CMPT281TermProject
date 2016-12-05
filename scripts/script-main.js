//Chad Woitas original
//Functions and vars related to all pages



function setup(){
	//add event listeners to add cart buttons
	var buttons = document.getElementsByClassName("addtocart");
		for (let i=0; i < buttons.length;i++){
			buttons[i].addEventListener("Click",addToCart());
		}
}

function addToCart(){
	alert(this);
}

