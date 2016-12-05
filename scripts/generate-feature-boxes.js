//Chad Woitas original

	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200){
		  var result = JSON.parse(this.responseText);
		  var popular = result["Popular Items"];
		  var strawberry = result["Strawberry Pi"];
		  var access = result["Strawberry Pi Acessories"];
		  var soc = result["Industrial Compute Model"];
		
		//store Page
		//display(strawberry,"StrawberryPi");
		//display(access,"StrawberryPiAcc");
		//display(soc,"soc");
		
		//index Page;
		display(popular,"indexholding");
		}
	};
	var urlMyEdit = "http://mockbin.org/bin/cf50b0da-56f2-44cb-9d5d-f898a2cb0c2c";
	xmlhttp.open("GET",urlMyEdit,true);
	xmlhttp.send();
	

function display(objlist,holdingCell){
for (let i=0;i<objlist.length;i++){
document.getElementById(holdingCell).innerHTML = 
	document.getElementById(holdingCell).innerHTML +
	 "<div class=featureBox id=\""+objlist[i].itemDescription+"\""
    +"<section class=\"model\">"
    +"<div class=\"imgbox\">"
	+"<img src="+objlist[i].itemImageSrc+">"
	+"</div>"
    +"<p>" +objlist[i].itemDescription +"</p>"
	+"<p id=\"price\">" +objlist[i].itemPrice +"</p>"
	+"<br>"
    +"<button type=\"button\" onclick=\"addToCart()\">Add To Cart </button>"
	+"</section>"
	+"</div>";
}
};


