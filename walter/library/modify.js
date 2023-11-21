$(document).ready(function(){

$("#add").click(function(){
// adds element to the selected element as the first child
 //$("ul").prepend("<li>Jake</li>");
 $("ul").append("<li>Jake</li>");

});


/*$("#add").click(function(){
    // adds elements or specified content to the selected element as the last child
    $("ul").append("<li>Jake</li>");
   
   
});*/


$("#add-after").click(function(){
    // adds elements or specified content to the selected element after it
    $("ul").after("<p>Jake</p>");
   
   
   });

   $("#add-before").click(function(){
    // adds elements or specified content to the selected element before it
    $("ul").before("<p>Jake</p>");
   
   
   });



   
   $("#add-class").click(function(){
    // Adds class to the selected element
    $("p").addClass(".main-class");
   
   
   });


    
   $("#change-css").click(function(){
    // changes css style
    $("body").css("background-color", "blue");
   
   
   });








});