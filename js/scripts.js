function Player (mark) {
  this.mark = mark;
  this.spaces = [];
}

function Space (mark, boardLocation) {
  this.mark = mark;
  this.boardLocation = boardLocation;
}

function Game (player1, player2, turn, gameOver) {
  this.player1 = player1;
  this.player2 = player2;
  this.turn = 0;
  this.gameOver = false;
}


$(document).ready(function() {
  var player1 = new Player("X");
  var player2 = new Player("O");

//for player X ---------------------------//
$("form#box-option").submit(function(event) {
    event.preventDefault();


  var inputtedBox = parseInt($("#spaceInput :selected").val());

  var newSpaceX = new Space("X", inputtedBox);
  player1.spaces.push(newSpaceX);
  
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

  if (newSpaceX.boardLocation === (1 && 2 && 3 || 4 && 5 && 6 || 7 && 8 && 9 || 1 && 4 && 7 || 2 && 5 && 8 || 3 && 6 && 9 || 1 && 5 && 9 || 3 && 5 && 7))  {
    alert("winner!");
  }
});

//for playerO ------------------------------//

  $("form#box-option2").submit(function(event) {
      event.preventDefault();

    var inputtedBox = parseInt($("#spaceInput2 :selected").val());

    var newSpaceO = new Space("O", inputtedBox);
    player2.spaces.push(newSpaceO);
    console.log(player2.spaces);

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


    if (newSpaceO.boardLocation === (1 && 2 && 3 || 4 && 5 && 6 || 7 && 8 && 9 || 1 && 4 && 7 || 2 && 5 && 8 || 3 && 6 && 9 || 1 && 5 && 9 || 3 && 5 && 7))  {
      alert("winner!");
    }



  });
});
