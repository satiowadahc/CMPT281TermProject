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
	
	var urlMyEdit = "http://mockbin.org/bin/f57fcb2a-ca7c-4a7c-8366-0a9d19cc65f4";
	var url = "http://mockbin.org/bin/ead89685-6b95-44ec-89f9-cb70933e8edb";
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}


function display(objlist,holdingCell){
	//let i in objlist required for safari
for (let i in objlist){
	var id = "additem" + objlist[i].modelnum;
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
    +"<button id=\"" + id +"\">Add To Cart </button>"
	+"</section>"
	+"</div>";
	let c = objlist[i];
	document.getElementById( id ).addEventListener("click", function(){addToShoppingList(c)});
}
};


