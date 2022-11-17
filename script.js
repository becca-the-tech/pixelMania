const grid = document.getElementById("grid");
const gridLengthBtn = document.getElementById("grid-length");
const colorBtn = document.getElementById("color-picker");

//listens to the whole grid for clicks,
//if it's a div with class of "cell", change the background of that cell
//to colorBtn (the color input's) current value
grid.addEventListener("click", function(event) {
    if (event.target.matches("div.cell")) {
        event.target.style.background = colorBtn.value;
    }
});

//creates an individual row of length size and adds it to the grid
function makeRow(length) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < length; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (i % 2 == 0) {
            cell.classList.add("cell-other");
        }
        row.append(cell);
    }
    grid.append(row);
}

//builds the grid by repeating makeRow with column-length number of cells
function makeGrid(rowLength, columnLength) {
    for (let i = 0; i < rowLength; i++) {
        makeRow(columnLength);
    }
}

//when user selects a grid size
gridLengthBtn.addEventListener("click", function(event) {
    event.preventDefault();
    grid.innerHTML = "";
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    makeGrid(rows, columns);
});
