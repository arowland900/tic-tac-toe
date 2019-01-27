/*----- constants -----*/
var lookup = {
    '1': 'purple',
    '-1': 'lime',
    'null': 'white'
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

}

function getWinner() {

}

function render() {

}

function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    // board = new Array(9).fill(null);
    turn = 1;
    winner = null;
    render();
}
