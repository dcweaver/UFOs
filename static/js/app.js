// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear any existing data from table with ""
    tbody.html("");

    // loop through data and append cells/rows for each value
    data.forEach((dataRow) => {
        // appending row to table
        let row = tbody.append("tr");

        //loop through each field in dataRow and add each value as cell in the table (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
    }
    );  
});

}

function handleClick() {
    //Get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter data useing that date
    if (date) {
        // apply filter to table data to only keep rows with matching datetime filter
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table using filtered Data 
    // NOTE: if no date was entered, original table will not change
    buildTable(filteredData);
};

// attach an event to listen for the form button
d3.selectAll("#Filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);