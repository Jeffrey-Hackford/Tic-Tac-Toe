function Player (mark) {
  var mark = mark;
}

function Space (row, column, state) {
  var row = row;
  var column = column;
  var state = state;
}

function Board (spaces) {
  var spaces = 9;
}

function Game (turn, gameOver) {
  var turn = 0;
  var gameOver = false;
}

$(document).ready(function() {

$("form#submitButton").submit(function(event) {
    event.preventDefault();
alert("test");
  var inputtedBox = $("#spaceInput :selected").val();

  console.log(inputtedBox);

  });
});
