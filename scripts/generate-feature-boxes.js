//Chad Woitas original

function updateInventory(page){
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200){
		  var result = JSON.parse(this.responseText);
		  var popular = result["Popular Items"];
		  var strawberry = result["Strawberry Pi"];
		  var access = result["Strawberry Pi Acessories"];
		  var soc = result["Industrial Compute Model"];
			if(page =="store"){
			//store Page
			display(strawberry,"StrawberryPi");
			display(access,"StrawberryPiAcc");
			display(soc,"soc");
			}
			else if(page=="index"){
			//index Page;
			display(popular,"indexholding");
			}
		}
	};
	var urlNoComma = "https://mockbin.org/bin/0ceb11fe-604f-4d2b-a03c-d641f94cbb61";
	var urlMyEdit = "http://mockbin.org/bin/f57fcb2a-ca7c-4a7c-8366-0a9d19cc65f4";
	xmlhttp.open("GET",urlMyEdit,true);
	xmlhttp.send();
}

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


