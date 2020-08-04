let circleToken = "cell circle"
let xToken = "cell x"
let playerWin 



//Hold cell of game to check for winner and for tie.
let gameBoard = []
let arrayOfWinner = []



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
            updateGameStatus()
            findWinner()
            return count = count + 1
            
}

function updateGameStatus()
{
    arrayOfWinner = [
        gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2],
        gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6],
        gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8],
        gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7],
        gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6],
        gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8],
        gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8],
        gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]]
    
}

let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
]

function findWinner()
{
    if (arrayOfWinner.includes = true)
    {
        updateGameStatus()
        for (i=0; i <= arrayOfWinner.length; i++)
        {
            if (arrayOfWinner[i] == true)
            {
                function winnerIs() 
                {
                return   gameBoard[winningPatterns[i][0]] == 'cell x' ? "X Wins" 
                :gameBoard[winningPatterns[i][0]] == 'cell circle' ? "Circle Wins"
                :"";
                } 
                console.log(winnerIs())
            }
        }
    
    }
}

function startGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            document.getElementById(`cell-$(i)`).setAttribute('class', 'cell')
        }
}