$(document).ready(function() {

  // Error validation
  const email = document.getElementById("mail");

  email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Please enter an email address.");
      // $(document).getElementById("errmsg").style.display = "inline";
    } else {
      email.setCustomValidity("");
      // $(document).getElementById("errmsg").style.display = "none";
    }
  });


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
  