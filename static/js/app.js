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
            });    
    });
}
// Add filters for date data
function handleClick() {
    // Grab the datetime value form the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Using if statement to filter only entered date
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Atach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);