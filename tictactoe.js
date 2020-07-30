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

function handleCellClick(event, cellNumber)
{
    cellON = document.getElementById(`cell-${cellNumber}`)
    cellON.setAttribute('class', 'cell x')
    //apply click to the game state
    // which turn is it?
    // who's turn is it?
    // what is there marker? (X or O)
    // apply that marker to cellNNUM
}

//Render items to the board
for (let i=0; i<=8; i++)
{
    let cell = document.createElement("div")
    cell.id = "cell-" + i
    document.getElementById("board").appendChild(cell)
    cell.setAttribute("class", "cell")
    // alternatively
    cell.setAttribute("name", `${i}`)
    
    gameBoard.push(cell.id) 
    //event listeners, are expected to be passed an object function when activatedtakes two argument
    //take first argument, which is click, the second argument is a function to be called when function happens
    //contract between you and add event listener add event listener will call your function with that event

    cell.addEventListener('click', function (e)
    {
        handleCellClick(e, i)
    })
}

// document.querySelectorAll('.cell').forEach(item => {item.addEventListener('click', function(){'element'.
// setAttribute('class', 'cell circle')}
// ))






//Begin game by clearing the board
function startGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            document.getElementById(`cell-$(i)`).setAttribute('class', 'cell')
        }
}