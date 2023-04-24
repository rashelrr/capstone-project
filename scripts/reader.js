$(document).ready(function() {

  /* ERROR VALIDATION */
  // WRONG
  const email1 = document.getElementById("mail1");

  email1.addEventListener("input", (event) => {
    if (email1.validity.typeMismatch) {
      email1.setCustomValidity("Please enter a valid email address.");
    } else {
      email1.setCustomValidity("");
    }
  });

  // RIGHT
  const email2 = document.getElementById("mail2");

  email2.addEventListener("input", (event) => {
    if (email2.validity.typeMismatch) {
      email2.setAttribute("aria-invalid", "true");
      // email2.setCustomValidity("Please enter a valid email address.");
      document.getElementById("errmsg").style.display = "inline";
    } else {
      email2.setAttribute("aria-invalid", "false")
      // email2.setCustomValidity("");
      document.getElementById("errmsg").style.display = "none";
    }
  });

  /* HOVER CONTENT */
  // Good
  var parent = document.getElementById('parent');

  parent.onmouseover = function() {
      document.getElementById('popup').style.display = 'block';
  }

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
        document.getElementById('popup').style.display = 'none';
  });

  /* STATUS MESSAGES */
  // BAD 
  var c = 0;
  $("button[id='badCartBtn']").click(badAddCart);
  function badAddCart() {
    c += 1;
    document.getElementById("badCart").innerHTML = c;
  };
  
  // GOOD 
  var counter = 0;
  $("button[id='cartButton']").click(goodAddCart);
  function goodAddCart() {
    counter += 1;
    document.getElementById("cart").innerHTML = counter;
  };

  /* ALERT MESSAGES */
  // BAD
  $("button[id='errorMsg']").click(badAlert);
  function badAlert() {
    alert("Your log in session will expire in 2 minutes!");
  };

  // GOOD
  $("button[id='goodError']").click(goodAlert);
  function goodAlert() {
    $('span').removeClass('hidden');
  };

  /* FLOWER RIDDLE GAME */
  // SUNFLOWER
  const riddle1 = document.getElementById("riddle_sunflower");
  const button1 = document.getElementById("riddleAnswer_sunflower");

  button1.addEventListener('click', function() {
    console.log(riddle1.value);
    if (riddle1.value != "sunflower") {
      riddle1.setAttribute("aria-invalid", "true");
      document.getElementById("errmsg_sunflower").style.display = "block";
      document.getElementById("correctmsg_sunflower").style.display = "none";
    } else {
      riddle1.setAttribute("aria-invalid", "false");
      document.getElementById("errmsg_sunflower").style.display = "none";
      document.getElementById("correctmsg_sunflower").style.display = "block";
    }
  });

  const hint1 = document.getElementById("hint1");

  hint1.onmouseover = function() {
    document.getElementById("popup_sunflower").style.display = 'block';
  }

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
        document.getElementById('popup_sunflower').style.display = 'none';
  });

  // DAISY
  const riddle2 = document.getElementById("riddle_daisy");
  const button2 = document.getElementById("riddleAnswer_daisy");

  button2.addEventListener('click', function() {
    if (riddle2.value != "daisy") {
      riddle1.setAttribute("aria-invalid", "true");
      document.getElementById("errmsg_daisy").style.display = "block";
      document.getElementById("correctmsg_daisy").style.display = "none";
    } else {
      riddle1.setAttribute("aria-invalid", "false");
      document.getElementById("errmsg_daisy").style.display = "none";
      document.getElementById("correctmsg_daisy").style.display = "block";
    }
  });

  const hint2 = document.getElementById("hint2");

  hint2.onmouseover = function() {
    document.getElementById("popup_daisy").style.display = 'block';
  }

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
        document.getElementById('popup_daisy').style.display = 'none';
  });

  // LAVENDER
  const riddle3 = document.getElementById("riddle_lavender");
  const button3 = document.getElementById("riddleAnswer_lavender");

  button3.addEventListener('click', function() {
    if (riddle3.value != "lavender") {
      riddle3.setAttribute("aria-invalid", "true");
      document.getElementById("errmsg_lavender").style.display = "block";
      document.getElementById("correctmsg_lavender").style.display = "none";
    } else {
      riddle3.setAttribute("aria-invalid", "false");
      document.getElementById("errmsg_lavender").style.display = "none";
      document.getElementById("correctmsg_lavender").style.display = "block";
    }
  });

  const hint3 = document.getElementById("hint3");

  hint3.onmouseover = function() {
    document.getElementById("popup_lavender").style.display = 'block';
  }

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
        document.getElementById('popup_lavender').style.display = 'none';
  });

  // MISTLETOE
  const riddle4 = document.getElementById("riddle_mistletoe");
  const button4 = document.getElementById("riddleAnswer_mistletoe");

  button4.addEventListener('click', function() {
    if (riddle4.value != "mistletoe") {
      riddle4.setAttribute("aria-invalid", "true");
      document.getElementById("errmsg_mistletoe").style.display = "block";
      document.getElementById("correctmsg_mistletoe").style.display = "none";
    } else {
      riddle4.setAttribute("aria-invalid", "false");
      document.getElementById("errmsg_mistletoe").style.display = "none";
      document.getElementById("correctmsg_mistletoe").style.display = "block";
    }
  });

  const hint4 = document.getElementById("hint4");

  hint4.onmouseover = function() {
    document.getElementById("popup_mistletoe").style.display = 'block';
  }

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape')
        document.getElementById('popup_mistletoe').style.display = 'none';
  });

  /* TIC TAC TOE GAME */
  document.addEventListener('click', function (e) {     
    if ($(e.target).hasClass('box')) {  
      var content = $(e.target).val();
      turn(e.target.id, $(e.target), content); 
      checkWinner();                        
    }                                                             
  })

  function readLocation(id) {
    switch (id) {
      case "b1": 
        return "Top left box.";
      case "b2":
        return "Top middle box.";
      case "b3":
        return "Top right box.";
      case "b4":
        return "Middle left box.";
      case "b5": 
        return "Center box.";
      case "b6":
        return "Middle right box.";
      case "b7":
        return "Bottom left box.";
      case "b8":
        return "Bottom middle box.";
      case "b9":
        return "Bottom right box.";
      default:
        return "error!";
    }
  }

  var player = "X";
  function turn(id, target, content) {
    var message = readLocation(id);
    if (content.includes("X") || content.includes("O")) {
      // warning
      message += " Box already contains an 'X' or 'O'. Please try again."
      document.getElementById("update").innerHTML = message;
    } else { 
      // play turn
      if (player === "X") {
        target.val('X');
        player = "O";
        message += " Player O's turn."
        document.getElementById("update").innerHTML = message;
      } else {
        target.val("O");
        player = "X";
        message += " Player x's turn."
        document.getElementById("update").innerHTML = message;
      }
    }
  };

  function checkWinner() {
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var p = "X";
    if (((b1 == p) && (b2 == p) && (b3 == p)) ||
       ((b1 == p) && (b4 == p) && (b7 == p)) ||
       ((b7 == p) && (b8 == p) && (b9 == p)) ||
       ((b3 == p) && (b6 == p) && (b9 == p)) ||
       ((b1 == p) && (b5 == p) && (b9 == p)) ||
       ((b3 == p) && (b5 == p) && (b7 == p)) ||
       ((b2 == p) && (b5 == p) && (b8 == p)) ||
       ((b4 == p) && (b5 == p) && (b6 == p)) ) {
      document.getElementById("gameResult").innerHTML = "Player X won!";
      document.getElementById("update").innerHTML = "";
    }

    var p = "O";
    if (((b1 == p) && (b2 == p) && (b3 == p)) ||
       ((b1 == p) && (b4 == p) && (b7 == p)) ||
       ((b7 == p) && (b8 == p) && (b9 == p)) ||
       ((b3 == p) && (b6 == p) && (b9 == p)) ||
       ((b1 == p) && (b5 == p) && (b9 == p)) ||
       ((b3 == p) && (b5 == p) && (b7 == p)) ||
       ((b2 == p) && (b5 == p) && (b8 == p)) ||
       ((b4 == p) && (b5 == p) && (b6 == p)) ) {
      document.getElementById("gameResult").innerHTML = "Player O won!";
      document.getElementById("update").innerHTML = "";
    }
  }

});
  