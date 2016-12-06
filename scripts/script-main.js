//Chad Woitas original
//Functions and vars related to all pages

function setup(){
//NOT MY OWN CODE BELOW \/    \/    \/    \/     \/   \/
document.getElementById("logo").addEventListener("mouseover", function(){
		iconMouseover("0.5");
    });
    
    document.getElementById("cart").addEventListener("mouseover", function(){
		cartMouseover("0.5");
    });
    
    var menuItems = document.getElementsByClassName("menuopt");
    for (let i=0; i < menuItems.length; i++) {
 		menuItems[i].addEventListener("mouseover", function() {
 	    	menuItemMouseover(i, "0.5");
 		});
    }
    

    window.addEventListener("resize", function() {
    	
     	if (whereIsMouse == "cart")  {
    		cartMouseover("0");
    	}
    	else if (whereIsMouse == "icon" )  {
	    	iconMouseover("0");
    	}
    	else {
    	    menuItemMouseover(parseInt( whereIsMouse[4] ), "0")
    	}
    });
    
//NOT MY OWN CODE ABOVE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
}

//BELOW HERE IS NOT MY OWN CODE \/    \/    \/    \/     \/   \/
function iconMouseover(v) {
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	line.style.width = (160 + "px");
	line.style.left = 0 + "px";
	whereIsMouse = "icon";
}


function cartMouseover(v) {
	var pageWrapWidth = document.getElementById("pageWrap").offsetWidth;
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	line.style.width = 68 + "px";
	line.style.left = (pageWrapWidth - 78) + "px"; /*38 px for the width of the icon, 20 px for padding on the right, 10 for padding on the left*/
	whereIsMouse = "cart";
	document.getElementById("underlineLoc").innerHTML = whereIsMouse;

}

function menuItemMouseover(ind,v) {
	var pageWrapWidth = document.getElementById("pageWrap").offsetWidth;
	var line = document.getElementById("underline");
	line.style.transition = "left " + v + "s"
	whereIsMouse = "item" + ind;
	line.style.width = 74 + "px";
	line.style.left = (pageWrapWidth - 78) - (74 * ( 1 + ind) ) + "px";
//   	document.getElementById("underlineLoc").innerHTML = whereIsMouse;

}
//ABOVE HERE IS NOT MY OWN CODE ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^





function addToCart(){
	alert(this);
}

