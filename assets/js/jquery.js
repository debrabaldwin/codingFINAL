$(document).ready(function() {

$("p").mouseover(function(){
  $("p").css("background-color", "lightgreen");
});

$("p").mouseleave(function(){
      $("p").css("background-color", "lightblue");
   });



   $("footer").mouseover(function(){
      $("footer").css("display", "none");

   }); //mouse over

   $("footer").mouseleave(function(){
      $("footer").css("display", "block");
   });
 
    $("button").click(function(){
         //console.log("Does this work when i click?");
         //$("div").animate({left: '250px'});
         console.log("Still working?");

            $("button").css("background-color", "pink");


   });


   console.log("addText is online");

   $(".addText").on("click", function() {
      
      var textToAdd = prompt("Ask me anything!");

      $(".userText").html(textToAdd);




   });
 });



