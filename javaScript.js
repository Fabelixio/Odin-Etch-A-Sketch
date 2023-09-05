/*Being by creating the grid. Create the squares using CSS,
put the grid squares inside the container div. Create the grid
with JS by creating a 16x16 div grid*/
let columns = 16
let rows = 16
    for(let i = 0; i < columns; i++) {
        let column = document.createElement('div')
        column.className = 'column'
        for(let j = 0; j < rows; j++) {
            let row = document.createElement('div')
            row.className = 'row'
            row.textContent = i + '-' + j
            column.appendChild(row)
        }
        gridContainer.appendChild(column)
    }