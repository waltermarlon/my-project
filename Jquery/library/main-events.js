







$(document).ready(function(){

$("#click").click(function(){


  alert('Hello world');


})

//keyup event

// $("#name").keyup(function(){

  // var show =  $("#name").val();
  
  //  alert(show)

// });

//keypress keydown

$("#name").keypress(function(){

     var show =  $("#name").val();
      alert(show);

  });



// hover events
$(".hover").hover(function(){
    $("p").css("background","blue");
    //  $("p").css("background","yellow");
   // alert("Double click is working");
});


// keyup events
$(".keyup").keyup(function(){
  $("p").css("background","blue");
  //  $("p").css("background","yellow");
 // alert("Double click is working");
});

$(".mouseenter").mouseenter(function(){

  $("p").css("background","blue");
 alert("Double click is working");
});

//mouse leave event
$(".mouseleave").mouseleave(function(){

    $(".mouseleave").css("background","yellow");
 // alert("Double click is working");
});
      
    

});

        


   






