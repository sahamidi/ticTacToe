let playerData = 
{

}

let gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""],
]

for (i=0; i<=8; i++)
{
    let cell = document.createElement("div")
    cell.id = "cell-" + i
    document.getElementById("board").appendChild(cell)
    cell.setAttribute("class", "cell")
}