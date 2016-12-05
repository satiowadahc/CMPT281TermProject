//Chad Woitas original
var featureBoxes = [    
  {   "model":"Call Us",
      "description":"(123) 456-7890"
      },      
  {   "model":"Visit Us", 
      "description":"42, Wallaby Way, Saskatoon, Sk 12345"
      },
  {   "model":"Follow Us", 
      "description":"Insert Links Here"
      }
];


for (i=0;i<featureBoxes.length;i++){
document.writeln("<div class=featureBox>");
document.writeln("<section class=model>");
document.writeln(featureBoxes[i].model);
document.writeln("<br>");
document.writeln(featureBoxes[i].description);
document.writeln("</section>");
document.writeln("</div>");
}