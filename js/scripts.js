function Player (mark, []) {
  this.mark = mark;
  this.spaces = [];
  this.isWinner = false;
}


function Space (mark, boardLocation) {
  this.mark = mark;
  this.boardLocation = boardLocation;
}

Player.prototype.Winner = function(player) {

  var locations = [];
  for (index = 0; index < player.spaces.length; index ++) {
    locations.push(player.spaces[index].boardLocation);
  }
  var string = locations.join();

  if ((string.includes("1") && string.includes("2") && string.includes("3")) ||
      (string.includes("4") && string.includes("5") && string.includes("6")) ||
      (string.includes("7") && string.includes("8") && string.includes("9")) ||
      (string.includes("1") && string.includes("4") && string.includes("7")) ||
      (string.includes("2") && string.includes("5") && string.includes("8")) ||
      (string.includes("3") && string.includes("6") && string.includes("9")) ||
      (string.includes("1") && string.includes("5") && string.includes("9")) ||
      (string.includes("3") && string.includes("5") && string.includes("7")))
        {
    alert("Winner!!!");
  }
}

$(document).ready(function() {
  var player1 = new Player("X", []);
  var player2 = new Player("O", []);

//for player X ---------------------------//
$("form#box-option").submit(function(event) {
    event.preventDefault();

    $("#box-option").hide();
    $("#box-option2").show();


    var inputtedBoxX = parseInt($("#spaceInput :selected").val());

    var newSpaceX = new Space("X", inputtedBoxX);
    player1.spaces.push(newSpaceX);

    console.log("player1" + newSpaceX);
    console.log(player1);


  if (newSpaceX.boardLocation === 1) {
    $(".display1").append("<img src='img/X.png'>");
    $(".opt1").remove();
  }
  if (newSpaceX.boardLocation === 2) {
    $(".display2").append("<img src='img/X.png'>");
    $(".opt2").remove();
  }
  if (newSpaceX.boardLocation === 3) {
    $(".display3").append("<img src='img/X.png'>");
    $(".opt3").remove();
  }
  if (newSpaceX.boardLocation === 4) {
    $(".display4").append("<img src='img/X.png'>");
    $(".opt4").remove();
  }
  if (newSpaceX.boardLocation === 5) {
    $(".display5").append("<img src='img/X.png'>");
    $(".opt5").remove();
  }
  if (newSpaceX.boardLocation === 6) {
    $(".display6").append("<img src='img/X.png'>");
    $(".opt6").remove();
  }
  if (newSpaceX.boardLocation === 7) {
    $(".display7").append("<img src='img/X.png'>");
    $(".opt7").remove();
  }
  if (newSpaceX.boardLocation === 8) {
    $(".display8").append("<img src='img/X.png'>");
    $(".opt8").remove();
  }
  if (newSpaceX.boardLocation === 9) {
    $(".display9").append("<img src='img/X.png'>");
    $(".opt9").remove();
  }

    player1.Winner(player1);
  // console.log("boardlocastionx" + newSpaceX.boardLocation);
  // if (newSpaceX.boardLocation === (4 && 5 && 6))  {
  //   alert("winner!");
  // }
});

//for playerO ------------------------------//

  $("form#box-option2").submit(function(event) {
      event.preventDefault();

      $("#box-option2").hide();
      $("#box-option").show();



      var inputtedBoxO = parseInt($("#spaceInput2 :selected").val());

      var newSpaceO = new Space("O", inputtedBoxO);

      player2.spaces.push(newSpaceO);

      console.log("player2" + newSpaceO);
      console.log(player2);

    if (newSpaceO.boardLocation === 1) {
      $(".display1").append("<img src='img/O.png'>");
      $(".opt1").remove();
    }
    if (newSpaceO.boardLocation === 2) {
      $(".display2").append("<img src='img/O.png'>");
      $(".opt2").remove();
    }
    if (newSpaceO.boardLocation === 3) {
      $(".display3").append("<img src='img/O.png'>");
      $(".opt3").remove();
    }
    if (newSpaceO.boardLocation === 4) {
      $(".display4").append("<img src='img/O.png'>");
      $(".opt4").remove();
    }
    if (newSpaceO.boardLocation === 5) {
      $(".display5").append("<img src='img/O.png'>");
      $(".opt5").remove();
    }
    if (newSpaceO.boardLocation === 6) {
      $(".display6").append("<img src='img/O.png'>");
      $(".opt6").remove();
    }
    if (newSpaceO.boardLocation === 7) {
      $(".display7").append("<img src='img/O.png'>");
      $(".opt7").remove();
    }
    if (newSpaceO.boardLocation === 8) {
      $(".display8").append("<img src='img/O.png'>");
      $(".opt8").remove();
    }
    if (newSpaceO.boardLocation === 9) {
      $(".display9").append("<img src='img/O.png'>");
      $(".opt9").remove();
    }

    player2.Winner(player2)
  });
});
