let circleToken = "cell circle"
let xToken = "cell x"
//Hold cell of game to check for winner and for tie.
let gameBoard = []
let xPlayer = []
let circlePlayer = []


//Start Game function to clear the board for new game
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

playGame()

function playGame ()
{
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
//whosTurn defines current turn in the game based counter
let whosTurn 
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

let winnerIs;

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
                        document.getElementById("announceWinner").innerText = "Circle is the Winner. click to Replay"
                        //Reset game and gameboard
                        document.getElementById('replay').addEventListener('click', refreshGame);
                        return winnerIs = "circle";
                      
                    }
                    else if (countX == 3) 
                    {
                        document.getElementById("winner").style.display = 'block'; 
                        document.getElementById("announceWinner").innerText = "X is the Winner. click to Replay"
                    //  Reset game and gameboard
                        document.getElementById('replay').addEventListener('click', refreshGame);
                        return winnerIs = "x";
                    }   

                }

            }
}