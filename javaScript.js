/*Being by creating the grid. Create the squares using CSS,
put the grid squares inside the container div. Create the grid
with JS by creating a 16x16 div grid*/

const container = document.getElementById('container')
//make grid function
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for(c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div")
        cell.innerText = (c + 1)
        container.appendChild(cell).className = 'grid-item'
    }
}
makeRows(16, 16)

