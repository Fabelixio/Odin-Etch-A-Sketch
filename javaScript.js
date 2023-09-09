//Create the grid with size based on number input, default to 16x16
function makeGrid(number) {
    const gridContainer = document.querySelector('.container')
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement('div')
        div.classList.add("grid-box")
        gridContainer.appendChild(div)
    }
    document.querySelector('.grid-dimensions').textContent = `${number}x${number}`
}
//Make grid boxes change color on mouse over
let gridNumber = 16
makeGrid(gridNumber)
let gridBoxList = document.querySelectorAll(".grid-box")
gridBoxList.forEach(gridbox => {
    gridbox.addEventListener("mouseover", changeColor)
})

function changeColor(event) {
    event.target.style.backgroundColor = 'black'
}
//Clear the previous grid and make a new one when user presses button based on prompt
function resetGrid() {
    let userNum = prompt("select a grid size less than 100:")
    if(userNum === null || userNum === undefined || userNum === "") {
        return
    } 
    while(userNum > 100) {
        userNum = prompt("Select a smaller number")
    }
    const gridContainer = document.querySelector('.container')
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    makeGrid(userNum)
    let gridBoxList = document.querySelectorAll('.grid-box')
    gridBoxList.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', changeColor)
    })
}
//When pressed return the colours back to default
function buttonClear() {
    let gridBoxList = document.querySelectorAll('.grid-box')
    gridBoxList.forEach((gridBox) => gridBox.style.backgroundColor = null)
}
const clearBTN = document.querySelector('.clear-button')
clearBTN.addEventListener('click', buttonClear)

const resetBTN = document.querySelector('.reset-button')
resetBTN.addEventListener('click', resetGrid)

//Add button functionality to resize.
//Maybe add ability to change to multicolour.