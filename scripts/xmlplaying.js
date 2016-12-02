function loadXMLDoc(){
	
	var i = sessionStorage.clickcount;
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if (this.readyState==4 
		 && this.status==200){
		 //do things here
		  var result = JSON.parse(this.responseText);
		  var popular = result["Popular Items"];
		  document.getElementById("newxml").innerHTML = 
			popular[i].itemDescription + 
			popular[i].itemPrice;
		}
	};
	
	xmlhttp.open("GET","http://mockbin.org/bin/a3b756a8-b006-415b-812b-108f98d8ee08/",true);
	xmlhttp.send();
	counter();
}

//Counts to 4 and loops for sake of display items 1 at a time.
function counter(){
	if(sessionStorage.clickcount){
		if(Number(sessionStorage.clickcount) < 4){
		sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
		document.getElementById("counter").innerHTML = sessionStorage.clickcount;
		}
		else{
		//write the reset counter
		sessionStorage.clickcount=0;
		}
	}
	else{
		//set counter
		sessionStorage.clickcount=0;
	}
}
//obj.employees[1].firstName + " " + obj.employees[1].lastName;