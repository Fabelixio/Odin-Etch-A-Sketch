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

let gridNumber = 16
makeGrid(gridNumber)
let gridBoxList = document.querySelectorAll(".grid-box")
gridBoxList.forEach(gridbox => {
    gridbox.addEventListener("mouseover", changeColor)
})

function changeColor(event) {
    event.target.style.backgroundColor = 'black'
}

//Add button functionality to reset grid and resize.
//Maybe add ability to change to multicolour.
