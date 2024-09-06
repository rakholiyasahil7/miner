document.getElementById('stock-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const mineName = document.getElementById('mineName').value;
    const stock = document.getElementById('stock').value;
    const grade = document.getElementById('grade').value;
    const lastUpdated = document.getElementById('lastUpdated').value;

    // Fetch existing data from localStorage or initialize a new array
    let stockData = JSON.parse(localStorage.getItem('stockData')) || [];

    // Add new data to the stockData array
    stockData.push({ mineName, stock: parseFloat(stock), grade, lastUpdated });

    // Save the updated data back to localStorage
    localStorage.setItem('stockData', JSON.stringify(stockData));

    // Reset the form after submission
    document.getElementById('stock-form').reset();
});
