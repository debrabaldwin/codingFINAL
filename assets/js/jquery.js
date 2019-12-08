$(document).ready(function() {

$("p").mouseover(function(){
  $("p").css("background-color", "lightyellow");
});

$("p").mouseleave(function(){
      $("p").css("background-color", "lightyellow");
   });



    $("button").click(function(){
         //console.log("Does this work when i click?");
         //$("div").animate({left: '250px'});
         console.log("Still working?");

            $("button").css("background-color", "pink");


   });

 //hide the dog catcher by default on page start
      $(".about").hide();

      var hideStatus = false;

 
        //SHOW AND HIDE EVENTS
        $(".me").on("click", function() {


          // if true
          if(hideStatus == false){
              console.log("Just me");

              $(".about").show();

              hideStatus = true;
          } 
          else{
             console.log("show about!");

              $(".about").hide();
              hideStatus = false;
          }


      });



   console.log("addText is online");

   $(".addText").on("click", function() {
      
      var textToAdd = prompt("Ask me anything!");

      $(".userText").html(textToAdd);




   });

      $("footer").mouseover(function(){
      $("footer").css("display", "none");

   }); //mouse over

   $("footer").mouseleave(function(){
      $("footer").css("display", "block");
   });
 
 });



