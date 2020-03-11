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

//Exercise correction

//Hardcoded matrix data
const matrix = [
    ["a", "b", "c"],
    [1, 2, 3],
    [4, 5, 6]
];

//Function to generate table after clicking in "Generate" button
const createTable = () => {
    const tableSection = document.getElementById("table-container");

    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    //Creating table headers with first matrix element
    let header = document.createElement("tr");
    for (let i = 0; i < matrix[0].length; i++) {
        let headerCell = document.createElement("th");
        headerCell.id = "cell";
        let headerInfo = document.createTextNode(matrix[0][i]);

        headerCell.appendChild(headerInfo);
        header.appendChild(headerCell);
    }
    tableBody.appendChild(header);

    //Creating table rows depending on content length
    for (let i = 1; i < matrix.length; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < matrix[i].length; j++) {
            let cell = document.createElement("td");
            cell.id = "cell";
            let text = document.createTextNode(matrix[i][j]);

            cell.appendChild(text);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);

    tableSection.appendChild(table);
};

const buttonTable = document.getElementById("button-table");

buttonTable.addEventListener("click", createTable);