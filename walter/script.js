$(document).ready(function(){
    $("p").hide()
    $("#btn").click(function(){
        $(".greeting").toggle()
        $("p").fadeIn(1000).slideUp(3000)
        $("my").fadeOut(1000)
        $("[href]").fadeTo(1000,0.3)
        $(".con").animate({left:"300px"})
    })

$("#add-after").click(function(){
    //add element or specifed content to the selected element after it
    $("ul").after("")
})

$(".add").click(function(){


      $("body").css("background-color", "purple");

});
        $(".append").click(function(){


             $("ul").append("<li>Jake<li>")


             $("#target").on("keypree", function(){
                console.log("how are u");
             })

        })

        $(".prepend").click(function(){


            $("ul").prepend("<li>Josh</li>")

       })
       $(".before").click(function(){
        
        $("h1").before("<p>A computer porter</p>")
       })
       $(".two").click(function(){

        $("p").after("<p>welcom to my resident</p>")
       })


})