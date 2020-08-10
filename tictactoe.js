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
    
    gameBoard.push("") 
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
            findWinner()
            return count = count + 1
            
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
        for (i=0; i < winningPatterns.length; i++)
        {
            if (gameBoard[winningPatterns[i][0]] != "")
            {
                   if( gameBoard[winningPatterns[i][0]] ==
                    gameBoard[winningPatterns[i][1]] &&
                    gameBoard[winningPatterns[i][1]] ==
                    gameBoard[winningPatterns[i][2]])
                    {
                    console.log(gameBoard[winningPatterns[i][0]])
                    }
            }
        }
}                

function startGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            document.getElementById(`cell-${i}`).setAttribute('class', 'cell')
        }
}