
//Chad Woitas original
var featureBoxes = [    
  {   "model":"Teach",
      "description":"Lorem ipsum dolor sit amet, ut enim elitr vim, sea cu summo graecis quaestio. Eu stet cotidieque nam, cibo dolores sea an", 
      "photoLocation":"./images/smiley.png", 
      },      
  {   "model":"Learn", 
      "description":"Lorem ipsum dolor sit amet, ut enim elitr vim, sea cu summo graecis quaestio. Eu stet cotidieque nam, cibo dolores sea an",
      "photoLocation":"./images/smiley.png", 
      },
  {   "model":"Create", 
      "description":"Lorem ipsum dolor sit amet, ut enim elitr vim, sea cu summo graecis quaestio. Eu stet cotidieque nam, cibo dolores sea an",
      "photoLocation":"./images/smiley.png", 
      }
];


for (i=0;i<featureBoxes.length;i++){
document.writeln("<div class=featureBox>");
document.writeln("<section class=model>");
document.writeln("<img src="+featureBoxes[i].photoLocation + ">");
document.writeln("<br>");
document.writeln(featureBoxes[i].model);
document.writeln("<br>");
document.writeln(featureBoxes[i].description);
document.writeln("</section>");
document.writeln("</div>");
}