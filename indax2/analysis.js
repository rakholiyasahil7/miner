window.onload = function() {
    // Get stock reports from local storage
    const stockReports = JSON.parse(localStorage.getItem('stockReports')) || [];

    // Extract data for the chart
    const months = stockReports.map(report => report.month);
    const coalProductionData = stockReports.map(report => report.coalProduction);
    const inventoryLevelData = stockReports.map(report => report.inventoryLevel);

    // Create the chart using Chart.js
    const ctx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Coal Production (Tons)',
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    data: coalProductionData
                },
                {
                    label: 'Inventory Level (Tons)',
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    data: inventoryLevelData
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};
