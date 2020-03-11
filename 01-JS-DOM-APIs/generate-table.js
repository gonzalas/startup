function generateTable() {
    //Get data from inputs
    let matrixData = new Array();

    let inputValues = document.getElementsByClassName("data-input");

    let dataValues = [].map.call(inputValues, dataInput => {
        matrixData.push(dataInput.value);
    });

    //Table creation with data
    let tableSection = document.getElementById("table-container");

    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    let header = document.createElement("tr");
    let c = 1;

    for (let i = 0; i < 3; i++) {
        let headerCell = document.createElement("th");
        headerCell.id = "cell";
        let headerInfo = document.createTextNode("Input " + c);

        c++;

        headerCell.appendChild(headerInfo);
        header.appendChild(headerCell);
    }

    tableBody.appendChild(header);

    let row = document.createElement("tr");

    for (let j = 0; j < matrixData.length; j++) {
        let cell = document.createElement("td");
        cell.id = "cell";
        let text = document.createTextNode(matrixData[j]);

        cell.appendChild(text);
        row.appendChild(cell);
    }

    tableBody.appendChild(row);

    table.appendChild(tableBody);

    tableSection.appendChild(table);
}