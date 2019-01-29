// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
var submit = d3.select("#submit");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // var inputElement1 = d3.select("#city");
    // var inputElement2 = d3.select("#state");

     // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // var inputValue1 = inputElement1.property("value");
    // var inputValue2 = inputElement2.property("value");

    console.log(inputValue);
    // console.log(inputValue1);
    // console.log(inputValue2);

  
    var filteredData = tableData.filter(data => data.datetime === inputValue); 
    
    console.log(filteredData);

    filteredData.forEach((weatherReport) => {
      var row = tbody.append("tr");
        Object.entries(weatherReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});