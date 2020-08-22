
document.getElementById('buttonPlayers').addEventListener('click', addPlayer, {once: true})

function addPlayer()
{
    xName = document.getElementById('playerName1').value
    circleName = document.getElementById('playerName2').value
}


let circleToken = "cell circle"
let xToken = "cell x"
//Empty arrays for game board, xplayer played spots and circle player game spots
let gameBoard = []
let xPlayer = []
let circlePlayer = []

//Refresh function to clear the board for new game
function refreshGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            //Reset Gameboard for new game
            document.getElementById(`cell-${i}`).setAttribute('class', 'cell')
            gameBoard = ["","","","","","","","",""]
            xPlayer = [];
            circlePlayer = [];
        }
}

//Play game function which renders the board to html and builds empty array for board, x and circle
//Builds out the cells with unique IDs and same class that will change to x class or circle class as playe
playGame()


function playGame ()
{



for (let i=0; i<=8; i++)
{
    let cell = document.createElement("div")
    cell.id = "cell-" + i
    document.getElementById("board").appendChild(cell)
    cell.setAttribute("class", "cell")
    cell.setAttribute("name", `${i}`)
    //Begin board with empty set array of gameBoard tokens with neither x or circle
    gameBoard.push("") 
    xPlayer.push("")
    circlePlayer.push("")
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

//Add x or circle cells to gameboard
function handleCellClick(event, cellNumber)
{
    let cellON = document.getElementById(`cell-${cellNumber}`)
    if (cellON.className != "cell")
    {
        alert("choose a an empty spot")
    }
    else
    {
        let whosTurn = (count % 2 !== 0) ? xToken:circleToken
        count = count + 1
        cellON.setAttribute('class', whosTurn)
        gameBoard[cellNumber]= whosTurn
//Add to array for x and circle to check against index of winnning patterns
//This will be used to index winning patterns to see if winner is x or circle.
        if (whosTurn == xToken)
        {
            xPlayer[cellNumber] = cellNumber
        } 
        else if (whosTurn == circleToken)
        {
            circlePlayer[cellNumber] = cellNumber
        }
        checkWinner()
        

    }
 
}
}


//Check for winner by referencing winner function for x or circle, and if none, then check for tie
function checkWinner ()
{

    gameBoardEmptyCell = gameBoard.includes("")
       if (gameBoardEmptyCell == true) 
       {
            whoWinner();
        } 
        else if (gameBoardEmptyCell == false)
        {
            whoWinner()
            let WinnerExist = whoWinner()
            if (WinnerExist == undefined)
            {
            document.getElementById("winner").style.display = 'block'; 
            document.getElementById("announceWinner").innerText = "Tie Game!. click to Replay"
        //  Reset game and gameboard
            document.getElementById('replay').addEventListener('click', refreshGame);
            }
        }
}

//Counter is to add to html and associate with Player X or Player Circle
let gamesWonX = 0
let gamesWonCircle = 0

//Check for winner x or circle through indexing a patter of winners.

function whoWinner()
{
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
    
    for (let r=0; r < winningPatterns.length; r++)
            {
                let countX = 0;
                let countCircle = 0;
                for (let s=0; s<=2; s++)
                {
                    if (winningPatterns[r][s] === xPlayer[winningPatterns[r][s]])
                    {
                        countX = countX + 1;
                    }
                    if (winningPatterns[r][s] === circlePlayer[winningPatterns[r][s]])
                    {
                        countCircle = countCircle + 1;
                    }
                    if (countCircle == 3)
                    {
                        document.getElementById("winner").style.display = 'block'; 
                        document.getElementById("announceWinner").innerText = `${circleName} is the Winner. click to Replay`
                        //Reset game and gameboard
                        document.getElementById('replay').addEventListener('click', refreshGame);
                        return gamesWonCircle = gamesWonCircle + 1;
                      
                    }
                    else if (countX == 3) 
                    {
                        document.getElementById("winner").style.display = 'block'; 
                        document.getElementById("announceWinner").innerText = `${xName} is the Winner. click to Replay`
                    //  Reset game and gameboard
                        document.getElementById('replay').addEventListener('click', refreshGame);
                        return gamesWonX = gamesWonX + 1;
                    }   

                }

            }
}