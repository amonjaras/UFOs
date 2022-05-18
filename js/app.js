// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Creating dynamic tables
function buildTable(data) {
    tbody.html("");

// Adding for loop
data.forEach((dataRow) => {
    // Append row to HTML table
    let row = tbody.append("tr");
    // Add each value from object into cell
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );    
});
}