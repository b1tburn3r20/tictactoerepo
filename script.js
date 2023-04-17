/*----- constants -----*/
const SHAPES = {
    '0': 'null',
    '1': 'X',
    '-1': 'O'

}

/*----- state variables -----*/
let board;
let turn;
let winner;

/*----- cached elements  -----*/
const xWins = document.getElementById("scoreXVal");
const OWins = document.getElementById("scoreOVal")
const resetBtn = document.getElementById("restartButton");
const gameBoard = document.getElementById("gameBoard");
const gridIndices = [...document.querySelectorAll('#gameBoard > div')]


/*----- event listeners -----*/
document.getElementById('gameBoard').addEventListener('click', tileChange)
resetBtn.addEventListener('click', initialize)

/*----- functions -----*/
initialize()
function initialize() {
    board = [
            [0, 0, 0] //row 1
            [0, 0, 0] //row 2
            [0, 0, 0] //row 3
    //column 1  2  3
        ]
        turn = 1;
        winner = null;
        render()
    }

function handleTile(evt) {
    const colIdx = gridIndices.indexOf(evt.target);
    //Guards...
    if (colIdx === -1) return;
    // shortcut to the column array?
    const colArray = board[colIdx]
    //find index of the first 0 in colArray
    const rowIdx = collArr.indexOf(0)
    // update the board state with the current player value
    colArr[rowIdx] = turn;
    //switch turn player
    turn *= -1;

}



function render() {
    board.forEach(function(rowArr, rowIdx) {
        //iterates over the cells in rows
        rowArr.forEach(function(cellValue, colIdx) {
            const cellId = `r${rowIdx}c${colIdx}`;
            const cellEl = getElementById(cellId)

      
          });
        });
      }
      
function displayMessages() {

}
function handleControls() {

}