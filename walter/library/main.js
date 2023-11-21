// execute code when the web pages is loaded 
$(document).ready(function(){


  // Element selector
  // this select elements by elemnet name  

/*$("button").click(function(){
   
   alert("you clicked the element selector");


});*/

//Class selector
//Select element by class name
$(".click").click(function(){

    alert("Hello");

});

 //ID selector
//Select element by ID name
$("#click").click(function(){
   
    alert("That was a class selector");
 
 
 });

 //Atrribute selector
 $("[id=clicked]").click(function(){
   
    alert("That was an attribute selector");
    $("[id=clicked]").css('background', 'yellow');
 
 });

});





