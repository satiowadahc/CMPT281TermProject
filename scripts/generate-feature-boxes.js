//Chad Woitas original

	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200){
		 //do things here
		  var result = JSON.parse(this.responseText);
		  alert("hi");
		  var allitems = result["Popular Items"];
		  var strawberry = result["Strawberry Pi"];
		  var access = result["Strawberry Pi Acessories"];
		  var soc = result["Industrial Compute Model"];
		  
		  display(allitems);
		}
	};
	//"http://mockbin.org/bin/a3b756a8-b006-415b-812b-108f98d8ee08/"
	var url="https://mockbin.org/bin/bc8ed2d5-1d54-42ca-a910-cfe9ded06d26";
	
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	
function display(objlist){
for (i=0;i<objlist.length;i++){
document.getElementById("indexholding").innerHTML = writeln(
	 "<div class=featureBox id=\""+objlist[i].model+"\""
    +"<section class=\"model\">"
    +"<div class=\"imgbox\">"
	+"<img src="+objlist[i].photoLocation+">"
	+"</div>"
    +"<p>" +objlist[i].model +"</p>"
	+"<p id=\"price\">" +objlist[i].price +"</p>"
	+"<br>"
    +"<button type=\"button\" onclick=\"addToCart()\">Add To Cart </button>"
	+"</section>"
	+"</div>");
}
}


