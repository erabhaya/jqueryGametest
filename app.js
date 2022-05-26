var move = 0;

$("#1").click(function(){
       
   $("#1").toggleClass("black");
     $("#2").toggleClass("black");
     $("#4").toggleClass("black");
     move++;
     game();
   });

   $("#2").click(function(){
       
      $("#2").toggleClass("black");
      $("#1").toggleClass("black");
     $("#3").toggleClass("black");
     $("#5").toggleClass("black");
     move++;
     game();
   });


   $("#3").click(function(){
      
     $("#3").toggleClass("black");
     $("#2").toggleClass("black");
     $("#6").toggleClass("black");
     move++;
     game();
   });

   $("#4").click(function(){
     
     $("#1").toggleClass("black");
     $("#4").toggleClass("black");
     $("#5").toggleClass("black");
     $("#7").toggleClass("black");
     move++;
     game();
   });

   $("#5").click(function(){
      
     $("#2").toggleClass("black");
     $("#4").toggleClass("black");
     $("#6").toggleClass("black");
     $("#5").toggleClass("black");
     $("#8").toggleClass("black");
     move++;
     game();
   });

   $("#6").click(function(){
      
     $("#3").toggleClass("black");
     $("#5").toggleClass("black");
     $("#9").toggleClass("black");
     $("#6").toggleClass("black");
     move++;
     game();
   });

   $("#7").click(function(){
      
     $("#7").toggleClass("black");
     $("#4").toggleClass("black");
     $("#8").toggleClass("black");
     move++;
     game();
   });

   $("#8").click(function(){
       
     $("#8").toggleClass("black");
     $("#7").toggleClass("black");
     $("#5").toggleClass("black");
     $("#9").toggleClass("black");
     move++;
     game();
   });

   $("#9").click(function(){
       
     $("#9").toggleClass("black");
     $("#6").toggleClass("black");
     $("#8").toggleClass("black");
     move++;
     game();
    });
  function game() {
    var count = 0;
    for(var i=1; i<=9; i++){
      var ab = $(`#${i}`).attr("class");
      console.log(ab);
      if(ab=='black'){
        count++;
      }
    }
    if(count==0){
      alert("you win in "+move+" moves hurrrray!");
    }
  }



















   
   
   
   
   
   
   
   

