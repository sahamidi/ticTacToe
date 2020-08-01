let circleToken = "cell circle"
let xToken = "cell x"
let playerWin


//Hold cell of game to check for winner and for tie.
let gameBoard = []
let arrayOfWinner = [
    [gameBoard[0]==gameBoard[1]&&gameBoard[0]==gameBoard[2]],
    [gameBoard[0]==gameBoard[3]&&gameBoard[0]==gameBoard[6]],
    [gameBoard[0]==gameBoard[4]&&gameBoard[0]==gameBoard[8]],
    [gameBoard[1]==gameBoard[4]&&gameBoard[1]==gameBoard[7]],
    [gameBoard[2]==gameBoard[4]&&gameBoard[2]==gameBoard[6]],
    [gameBoard[2]==gameBoard[5]&&gameBoard[2]==gameBoard[8]],
    [gameBoard[6]==gameBoard[7]&&gameBoard[6]==gameBoard[8]],
    [gameBoard[3]==gameBoard[4]&&gameBoard[3]==gameBoard[5]]

]


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

//run game until winner is defined.
let count = 1
let whosTurn 
function handleCellClick(event, cellNumber)
{
     
     let whosTurn = (count % 2 !== 0) ? xToken:circleToken
    

            cellON = document.getElementById(`cell-${cellNumber}`)
            cellON.setAttribute('class', whosTurn)
            gameBoard[cellNumber]= whosTurn
            //apply click to the game state
            // which turn is it?
            // who's turn is it?
            // what is there marker? (X or O)
            // apply that marker to cellNNUM

            return count = count + 1
}

// while((arrayOfWinner[0][0]&&arrayOfWinner[1][0]&&arrayOfWinner[2][0]&&arrayOfWinner[3][0]&&
//     arrayOfWinner[4][0]&&arrayOfWinner[5][0]&&arrayOfWinner[6][0]&&arrayOfWinner[7][0]) == true)
// {
//xToken is represented by odd values and circle tokens represented by even values


//Render items to the board


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