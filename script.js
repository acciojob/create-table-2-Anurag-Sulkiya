function createTable() {
    
  const rowInput = prompt("Input number of rows");
  const columnInput = prompt("Input number of columns");

	if(!isValidNumber(rowInput) || !isValidNumber(columnInput)){
         alert("please enter valid positive number");
		return;
	}

	const numberOfRows = Number(rowInput);
	const numberOfColumns = Number(columnInput);

	clearExistingTable();

	const table = document.getElementById("myTable");

	for(let rowIndex =0; rowIndex < numberOfRows; rowIndex++)
	{
       const newRow = createRow(rowIndex, numberOfColumns);
		table.appendChild(newRow);
	}
}


function isValidNumber(value) {
	const number = Number(value);

	if(isNaN(number)){
      return false;
	}

	if(number <= 0){
       return false;
	}
	
   return true;
}

function clearExistingTable() {
	const table = document.getElementById("myTable");
	table.innerHTML = "";
}

function createRow(rowIndex, numberOfColumns){
   const newRow = document.createElement("tr");

   for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++)
	   {
          const newCell = document.createElement("td");
		  newCell.textContent = "Row-" +rowIndex + "Column-" + columnIndex;
		  newRow.appendChild(newCell);
	   }
	return newRow;
}

