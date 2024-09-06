function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("guidelinesTable");
    switching = true;

    // Set the switching direction to ascending:
    var direction = "asc"; 

    while (switching) {
        switching = false;
        rows = table.rows;

        // Loop through all table rows (except the first, which contains the headers):
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            // Get the two elements to compare, one from the current row and one from the next:
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            // Check if the two rows should switch place:
            if (direction === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (direction === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done:
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        } else {
            // If no switching has been done and the direction is "asc", set the direction to "desc" and run the loop again:
            if (direction === "asc") {
                direction = "desc";
                switching = true;
            }
        }
    }
}