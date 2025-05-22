// Exercise 5 : Red table

document.addEventListener('DOMContentLoaded', function() {
    let table = document.body.querySelector('table');
    let rowCount = table.rows.length;
    let colCount = table.rows[0].cells.length;
    for (let i = 0; i < rowCount; i++) {
        // Main diagonal
        let cell = table.rows[i].cells[i];
        if (cell) {
            cell.style.backgroundColor = 'red';
        }
        // Anti-diagonal
        let antiCell = table.rows[i].cells[colCount - 1 - i];
        if (antiCell && antiCell !== cell) {
            antiCell.style.backgroundColor = 'red';
        }
    }
});
