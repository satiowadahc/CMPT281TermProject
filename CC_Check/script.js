
function validate(){

	var odd=0;
	var even=0;
var i = document.getElementById("one").value;
var j = document.getElementById("two").value;
var k = document.getElementById("three").value;
var l = document.getElementById("four").value;

var m = i.concat(j,k,l);
if(m.length=16){
 for(let n=0;n<m.length;n++){
	if(m.charAt(n)%2 == 0){
		even=even+1;
	};
	if(m.charAt(n)%2 != 0){
		odd=odd+1;
	}//endelseif
  }//end for
}//end if

if(odd!=even){
	document.getElementById("one").style.backgroundColor= "red";
	document.getElementById("two").style.backgroundColor= "red";
	document.getElementById("three").style.backgroundColor= "red";
	document.getElementById("four").style.backgroundColor= "red";
	document.getElementById("send").disabled =true;

}
if(odd==even){
	document.getElementById("one").style.backgroundColor= "white";
	document.getElementById("two").style.backgroundColor= "white";
	document.getElementById("three").style.backgroundColor= "white";
	document.getElementById("four").style.backgroundColor= "white";
	document.getElementById("send").disabled =false;

}
}