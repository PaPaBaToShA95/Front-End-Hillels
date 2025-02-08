const div = document.querySelector('.homework');
const button = document.querySelector('.button');
const numberOfColumns = document.querySelector('.input');

button.addEventListener('click', () => {
    const tableNum = parseInt(numberOfColumns.value);
    div.innerHTML = '';
    const table = document.createElement('table');
    table.style.border = '4px solid black';
    table.style.borderCollapse = 'collapse';
    div.appendChild(table);
    const nameRow = document.createElement('tr');
    for (let i = 0; i <= tableNum; i++) {
        const nameCell = document.createElement('th');
        nameCell.style.border = '2px solid black';
        nameCell.style.padding = '10px';
        nameCell.style.textAlign = 'center';
        nameCell.textContent = i === 0 ? '' : i;
        nameRow.appendChild(nameCell);
    }
    table.appendChild(nameRow);
    for (let i = 1; i <= tableNum; i++) {
        const row = document.createElement('tr');
        const rowHeader = document.createElement('th');
        rowHeader.style.border = '1px solid black';
        rowHeader.style.padding = '10px';
        rowHeader.style.textAlign = 'center';
        rowHeader.textContent = i;
        row.appendChild(rowHeader);
        for (let j = 1; j <= tableNum; j++) {
            const cell = document.createElement('td');
            cell.style.border = '1px solid black';
            cell.style.padding = '10px';
            cell.style.textAlign = 'center';
            cell.textContent = i * j;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
});
