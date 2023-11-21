$(document).ready(function(){


 $(".box").hide();

 $(".btn").click(function(){

      $(".box").fadeIn(3000);


   });


   $(".fade-out").click(function(){

    $(".box").fadeOut(3000);


   })

   $(".show").click(function(){

     
      $(".box").show(3000);


   })

   $(".hide").click(function(){

     
    $(".box").hide(3000);


 })


 $(".toggle").click(function(){

     
    $(".box").toggle(3000);


 })

 $(".animate").click(function(){

     
    $(".box").animate({height: '800px'}, 3000);


 });


})