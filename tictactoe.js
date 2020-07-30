let circleToken = "cell cirlce"
let xToken = "cell x"
let playerWin


//Hold cell of game to check for winner and for tie.
let gameBoard = []
let arrayOfWinner = [
    [gameBoard[0]==gameBoard[1]==gameBoard[2]],
    [gameBoard[0]==gameBoard[3]==gameBoard[6]],
    [gameBoard[0]==gameBoard[4]==gameBoard[8]],
    [gameBoard[1]==gameBoard[4]==gameBoard[7]],
    [gameBoard[2]==gameBoard[4]==gameBoard[6]],
    [gameBoard[2]==gameBoard[5]==gameBoard[8]],
    [gameBoard[6]==gameBoard[7]==gameBoard[8]],
    [gameBoard[3]==gameBoard[4]==gameBoard[5]]

]


//Render items to the board
for (i=0; i<=8; i++)
{
    let cell = document.createElement("div")
    cell.id = "cell-" + i
    document.getElementById("board").appendChild(cell)
    cell.setAttribute("class", "cell")
    gameBoard.push(cell.id) 

}

// document.querySelectorAll('.cell').forEach(item => {item.addEventListener('click', function(){'element'.
// setAttribute('class', 'cell circle')}
// ))



document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'cell' ) ) {
        event.currentTarget.setAttribute('click', 'cell circle')
    }
}, false);




//Begin game by clearing the board
function startGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            document.getElementById(`cell-$(i)`).setAttribute('class', 'cell')
        }
}