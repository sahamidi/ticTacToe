let circleToken = "cell circle"
let xToken = "cell x"
let playerWin 
//Hold cell of game to check for winner and for tie.
let gameBoard = []

//Start Game function to clear the board for new game
function startGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            //Reset Gameboard for new game
            document.getElementById(`cell-${i}`).setAttribute('class', 'cell')
            gameBoard = []
        }
}

/*/Build out gameboard layout with functionality such as click events to apply either 
either x or circle tokens
A continuous loop occurs, which will assign to DOM id elements that will be referenced
later for toke assigning as well as used for identification of the winner
*/
for (let i=0; i<=8; i++)
{
    let cell = document.createElement("div")
    cell.id = "cell-" + i
    document.getElementById("board").appendChild(cell)
    cell.setAttribute("class", "cell")
    cell.setAttribute("name", `${i}`)
    //Begin board with empty set array of gameBoard tokens with neither x or circle
    gameBoard.push("") 
    /*
    Event listener to establish token turn, check for winners, check for ties.  This is 
    applied to each cell, and identified per div element which makes up the cell.
    */
    cell.addEventListener('click', function (e)
    {
        handleCellClick(e, i)
    })
}

//Counter established to alternate turns in the game betweene x and circle
let count = 1
//whosTurn defines current turn in the game based counter
let whosTurn 
function handleCellClick(event, cellNumber)
{
     let whosTurn = (count % 2 !== 0) ? xToken:circleToken
            cellON = document.getElementById(`cell-${cellNumber}`)
            cellON.setAttribute('class', whosTurn)
            gameBoard[cellNumber]= whosTurn
            findWinner()
            checkTie()
            return count = count + 1
}

/*Pre-establied patterns of winner options.  These are indexed in the find winner function
along with gameBOard to see if it is a x or circle token*/
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

/*loop to continuously check for winners by index of winningPattern and gameBoard
*/
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
                        if (gameBoard[winningPatterns[i][0]] == "cell x")
                        {
                            document.getElementById("winner").style.display = 'block'; 
                            document.getElementById("announceWinner").innerText = "X is the Winner. click to Replay"
                            //Reset game and gameboard
                            document.getElementById('replay').addEventListener('click', startGame)
                        }   
                        else if (gameBoard[winningPatterns[i][0]] == "cell circle")
                        {
                            document.getElementById("winner").style.display = 'block'; 
                            document.getElementById("announceWinner").innerText = "Circle is the Winner. click to Replay"
                            //Reset game and gameboard
                            document.getElementById('replay').addEventListener('click', startGame)
                        }     
                    }
            }
        }
}      

//Checking for tie each round
function checkTie()
    {
        let thisCounter = 0 
        for (i=0; i <= gameBoard.length; i++)
        {            
            if (gameBoard[i] == "cell circle" || gameBoard[i] == "cell x")
            {
                thisCounter = thisCounter+1
                if (thisCounter == 8)   
                {
                    document.getElementById("winner").style.display = 'block'; 
                    document.getElementById("announceWinner").innerText = "You tied. click to Replay"
                    //Reset game and gamboard
                    document.getElementById('replay').addEventListener('click', startGame)
                }    
            }
        }
    }
