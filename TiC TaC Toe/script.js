let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let winner = document.getElementById('winner');
let winnerDeclared = false; // Corrected to false
let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
winner.style.display = 'none';
// initialize
function init() {
    let tdcells = document.getElementsByTagName('td');
    for (let i = 0; i < 9; i++) {
        tdcells[i].addEventListener('click', handleClick);
    }

}

init();
// handling the click
function handleClick() {
    if (winnerDeclared) {
        return; // Stop further clicks if winner is declared
    }

    let td = event.target;
   
    let index = parseInt(td.getAttribute('index'));
    if (td.innerHTML == '') {
        td.innerHTML = currentPlayer;
        gameState[index] = currentPlayer;
        
    }

    if (!checkWinner()) { // Only change player if no winner is found
        changePlayer();
    }

    checkDraw();
}


// check for winner
function checkWinner() {
    for (let i = 0; i < 8; i++) {
        let a = winConditions[i][0];
        let b = winConditions[i][1];
        let c = winConditions[i][2];
        if (gameState[a] === currentPlayer && gameState[b] === currentPlayer && gameState[c] === currentPlayer) {
            winner.innerHTML = "Winner is " + currentPlayer;
            winner.style.display = 'block'; 
            winnerDeclared = true;
            return true; 
        }
    }
    return false; // Return false if no winner is found
}


function changePlayer() {
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    return currentPlayer
}




// check for draw
function checkDraw() {
    if (!gameState.includes('') && !winnerDeclared) {
        winner.innerHTML = 'Game is Tied';
        winner.style.display = 'block'; 
    }
}
