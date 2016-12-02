//Chad Woitas original
for (i=0;i<featureBoxes.length;i++){
document.writeln("<div class=featureBox id=\""+featureBoxes[i].model+"\"");
document.writeln("<section class=model>");
document.writeln("<div class=\"imgbox\"><img src="+featureBoxes[i].photoLocation + "></div>");
document.writeln("<p>");
document.writeln(featureBoxes[i].model);
document.writeln("</p><p id=\"price\">");
document.writeln(featureBoxes[i].price);
document.writeln("</p><br>");
document.writeln("<button type=\"button\" onclick=\"addToCart()\">Add To Cart </button>");
document.writeln("</section>");
document.writeln("</div>");
}
