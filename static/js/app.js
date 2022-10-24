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