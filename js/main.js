/*----- constants -----*/
var lookup = {
    '1': 'pink',
    '-1': 'green',
    'null': 'azure'
};

var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
var board, turn, winner

/*----- cached element references -----*/
var squares = document.querySelectorAll('td div');
var message = document.querySelector('h1');

/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize);


/*----- functions -----*/

initialize();

function handleMove(evt) {
    // find index of square
    var idx = parseInt(evt.target.id.replace('sq', ''))
    // check to see if square is available, if not, return
    if (board[idx] || winner) return;
    // update state
    board[idx] = turn
    turn *= -1
    winner = getWinner()
    render()
}

function getWinner() {
    for (var i = 0; i < winningCombos.length; i++) {
        if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
    }
    if (board.includes(null)) return null;
    return 'T';
}

function render() {
    board.forEach(function (sq, idx) {
        squares[idx].style.background = lookup[sq];
    });
    if (winner === 'T') {
        message.innerHTML = 'Tie game!';
    } else if (winner) {
        message.innerHTML = `Congrats ${lookup[winner]}!`;
    } else {
        message.innerHTML = `${lookup[turn]}'s Turn`;
    }
}

function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    // board = new Array(9).fill(null);
    turn = 1;
    winner = null;
    render();
}
