// Roadmap:
// Store all of the elements we need to access as variables in js
// Access each element of the grid, and be able to handle a click event, change tile adding either x or o based on turn
// create logic for tie being if all there are no spaces in the array with label 0 call tie
// create logic for restart button
// create logic for win conditions
// create logic for keeping score



/*----- constants -----*/
const PLAYERS = {
  '1': {
    name: 'Player 1',
    symbol: 'X'
  },
  '-1': {
    name: 'Player 2',
    symbol: 'O'
  }
}

/*----- cached elements -----*/
const gameBoard = document.getElementById('gameBoard')
const xScore = document.getElementById('scoreXWins')
const oScore = document.getElementById('scoreOWins')
const whosTurn = document.getElementsByClassName('whosTurn')
const currentTurn = document.getElementById('currentTurn')
const restartBtn = document.getElementById('restartButton')

/*----- state variables -----*/
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let turn = 1
let playedSquares = []

/*----- functions -----*/
function render() {
  board.forEach((square, idx) => {
    if (square === 1) {
      document.getElementById(idx).innerText = 'x'
    } else if (square === -1) {
      document.getElementById(idx).innerText = 'o'
    } else {
      document.getElementById(idx).innerText = ''
    }
  })
}

function handleSquareClick(evt) {
  const square = evt.target
  const idx = square.id

  if (board[idx] !== 0 || playedSquares.includes(idx)) {
    // Square has already been played, do nothing
    return
  }

  // Mark the square with the current player's symbol
  board[idx] = turn

  // Add the square to the played squares list
  playedSquares.push(idx)

  // Switch to the other player's turn
  turn *= -1

  render()
}

function handleRestartClick() {
  // Reset the game state
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  playedSquares = []
  render()
}

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleSquareClick)
restartBtn.addEventListener('click', handleRestartClick)

render()
