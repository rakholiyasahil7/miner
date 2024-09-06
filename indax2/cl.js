document.getElementById('calculator-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const coalProduction = parseFloat(document.getElementById('coalProduction').value);
    const costPerTon = parseFloat(document.getElementById('costPerTon').value);
    const sellingPricePerTon = parseFloat(document.getElementById('sellingPricePerTon').value);

    // Calculate total cost, total revenue, and total profit
    const totalCost = coalProduction * costPerTon;
    const totalRevenue = coalProduction * sellingPricePerTon;
    const totalProfit = totalRevenue - totalCost;

    // Display results
    document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById('totalRevenue').textContent = `Total Revenue: $${totalRevenue.toFixed(2)}`;
    document.getElementById('totalProfit').textContent = `Total Profit: $${totalProfit.toFixed(2)}`;
});
