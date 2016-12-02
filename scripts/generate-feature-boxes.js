//Chad Woitas original

	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200){
		 //do things here
		  var result = JSON.parse(this.responseText);
		  alert("hi");
		  var popular = result["Popular Items"];
		  var strawberry = result["Strawberry Pi"];
		  var access = result["Strawberry Pi Acessories"];
		  var soc = result["Industrial Compute Model"];
		  document.getElementById("newxml").innerHTML = 
			allitems[i].itemDescription + 
			allitems[i].itemPrice;
		}
	};
	//"http://mockbin.org/bin/a3b756a8-b006-415b-812b-108f98d8ee08/"
	xmlhttp.open("GET","http://mockbin.org/bin/a3b756a8-b006-415b-812b-108f98d8ee08/",true);
	xmlhttp.send();
	
/* for (i=0;i<popular.length;i++){
document.writeln("<div class=featureBox id=\""+popular[i].model+"\"");
document.writeln("<section class=\"model\">");
document.writeln("<div class=\"imgbox\"><img src="+popular[i].photoLocation + "></div>");
document.writeln("<p>");
document.writeln(popular[i].model);
document.writeln("</p><p id=\"price\">");
document.writeln(popular[i].price);
document.writeln("</p><br>");
document.writeln("<button type=\"button\" onclick=\"addToCart()\">Add To Cart </button>");
document.writeln("</section>");
document.writeln("</div>");
} */
