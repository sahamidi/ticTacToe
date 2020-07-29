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
    function applyOToken()
        {
            document.getElementById(cell.id).addEventListener('click', function circleMark(){})
        }
    
}

applyOToken(i)
//Begin game by clearing the board
function startGame()
{
    document.querySelector(".winner").style.display = "none"
    for (i=0; i<=8; i++)
        {
            document.getElementById(`cell-${i})`).setAttribute('class', 'cell')
        }
}


//Apply 'X' token when x plays
function xMark(i)
{
    if (document.getElementById(`cell-${i}`).className()='cell')
    {
        document.getElementById(`cell-${i}`).setAttribute('class', 'cell x')
        
    }
    else 
    {    
        alert(`Choose an empty spot`) 
    }
}

//Apply 'O' token when circle plays
function circleMark(i)
{
    if (document.getElementById(`cell-${i}`).className.includes('cell'))
    {
        document.getElementById(`cell-${i}`).setAttribute('class', 'cell circle')
        
    }
    else 
    {    
        alert(`Choose an empty spot`)
    }
}


