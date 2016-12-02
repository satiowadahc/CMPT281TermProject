//Chad Woitas original
//Functions and vars related to all pages
var featureBoxes = [    
  {   "model":"Strawberry Pi 3 Model B",
      "description":"The original!", 
      "photoLocation":"./images/Store_Products/Strawberry_Pi_3_Model_B.jpg", 
      "price":50.99},      
  {   "model":"Strawberry Pi Case", 
      "description":"Stepping things up! Multi-core!",
      "photoLocation":"./images/Store_Products/Strawberry_Pi_Case.jpg", 
      "price":10.95},
  {   "model":"Strawberry Pi Zero", 
      "description":"Stepping things up! Multi-core!",
      "photoLocation":"./images/Store_Products/Strawberry_Pi_Zero.jpg", 
      "price":29.95}
];

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

function display(featureBoxes){
	for (i=0;i<list.length;i++){
		document.writeln("<div class=featureBox id=\""+featureBoxes[i].model+"\"");
		document.writeln("<section class=model>");
		document.writeln("<img src="+featureBoxes[i].photoLocation + ">");
		document.writeln("<br>");
		document.writeln("<p>");
		document.writeln(featureBoxes[i].model);
		document.writeln("<br>");
		document.writeln("</p><p id=\"price\">");
		document.writeln(featureBoxes[i].price);
		document.writeln("<br>");
		document.writeln("<button type=\"button\" class=\"addtocart\" id=\"" + model + "onclick=\"addToCart()\">Add To Cart </button>");
		document.writeln("</section>");
		document.writeln("</div>");
	}
}