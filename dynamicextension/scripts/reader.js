$(document).ready(function() {
    // Play video
    $("#videoplayer").mousedown(function() {
  
      if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
        $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
        $("#thevideo")[0].play();
      } else {
        $($("#videoplayer").children()[0]).attr("src","pics/play.png");
        $("#thevideo")[0].pause();
      }
    });
    
  
    // Form validation
    $("#signupbutton").click(function() {
      if($("#fn").val()=="") {
        $("#firstName").addClass("error");
  
        return;
      } else {
        $("#firstName").removeClass("error");
      }
  
      if($("#ln").val()=="") {
        $("#lastName").addClass("error");
  
        return;
      } else {
        $("#lastName").removeClass("error");
      }
  
      if($("#em").val()=="") {
        $("#email").addClass("error");
  
        return;
      } else {
        $("#email").removeClass("error");
      }
  
      alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
    });
  });
  