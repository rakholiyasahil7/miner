



// Function to add stock data to the table
function addStockData(mineName, stock, grade, lastUpdated) {
    const tableBody = document.getElementById('stock-data');

    // Create a new row
    const row = document.createElement('tr');

    // Create and append cells for each data field
    const mineNameCell = document.createElement('td');
    mineNameCell.textContent = mineName;
    row.appendChild(mineNameCell);

    const stockCell = document.createElement('td');
    stockCell.textContent = stock;
    row.appendChild(stockCell);

    const gradeCell = document.createElement('td');
    gradeCell.textContent = grade;
    row.appendChild(gradeCell);

    const lastUpdatedCell = document.createElement('td');
    lastUpdatedCell.textContent = lastUpdated;
    row.appendChild(lastUpdatedCell);

    // Append the row to the table
    tableBody.appendChild(row);
}

document.getElementById('stockReportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get input values
    const month = document.getElementById('month').value;
    const coalProduction = document.getElementById('coalProduction').value;
    const inventoryLevel = document.getElementById('inventoryLevel').value;

    // Create an object for the stock report
    const stockReport = {
        month: month,
        coalProduction: parseFloat(coalProduction),
        inventoryLevel: parseFloat(inventoryLevel)
    };

    // Get existing stock reports from local storage or initialize an empty array
    let stockReports = JSON.parse(localStorage.getItem('stockReports')) || [];

    // Add the new report to the array
    stockReports.push(stockReport);

    // Save the updated reports back to local storage
    localStorage.setItem('stockReports', JSON.stringify(stockReports));

    // Clear the form
    document.getElementById('stockReportForm').reset();

    alert('Stock report submitted successfully!');
});

