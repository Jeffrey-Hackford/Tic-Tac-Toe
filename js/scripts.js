function Player (mark) {
  this.mark = mark;
  this.spaces = [];
  this.isWinner = false;
}

function Space (mark, boardLocation) {
  //this.row = row;
  //this.column = column;
  this.mark = mark;
  this.boardLocation = boardLocation;
  //this.markedBy = markedBy;
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

$("form#box-option").submit(function(event) {
    event.preventDefault();

  var inputtedBox = parseInt($("#spaceInput :selected").val());

  var newSpace = new Space("X", inputtedBox);
  player1.spaces.push(newSpace);
  console.log(player1.spaces);

  if (newSpace.boardLocation === (1 && 2 && 3 || 4 && 5 && 6 || 7 && 8 && 9 || 1 && 4 && 7 || 2 && 5 && 8 || 3 && 6 && 9 || 1 && 5 && 9 || 3 && 5 && 7))  {
    alert("winner!");
  }





  });
});
