/*----- constants -----*/
const SHAPES = {
    '0': 'null',
    '1': 'X',
    '2': 'Y'

}

/*----- state variables -----*/
let board;
let turn;
let winner;

/*----- cached elements  -----*/
const xWins = document.getElementById("scoreXVal")

/*----- event listeners -----*/

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