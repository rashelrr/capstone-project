$(document).ready(function() {

  // Error validation
  const email1 = document.getElementById("mail1");

  email1.addEventListener("input", (event) => {
    if (email1.validity.typeMismatch) {
      email1.setCustomValidity("Please enter a valid email address.");
      // $(document).getElementById("errmsg").style.display = "inline";
    } else {
      email1.setCustomValidity("");
      // $(document).getElementById("errmsg").style.display = "none";
    }
  });

  const email2 = document.getElementById("mail2");

  email2.addEventListener("input", (event) => {
    if (email2.validity.typeMismatch) {
      email2.setAttribute("aria-invalid", "true");
      // email2.setCustomValidity("Please enter a valid email address.");
      // $(document).getElementById("errmsg").style.display = "inline";
    } else {
      email2.setAttribute("aria-invalid", "false")
      // email2.setCustomValidity("");
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

  // Good Hover Content Example
  var parent = document.getElementById('parent');

  parent.onmouseover = function() {
      document.getElementById('popup').style.display = 'block';
  }

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
        document.getElementById('popup').style.display = 'none';
  });


});
  