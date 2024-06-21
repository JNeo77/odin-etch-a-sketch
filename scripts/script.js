const container = document.querySelector(".container");

function createGrid (count = 16) {
  for (let i = 0; i < count; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < count; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("column");
      rowDiv.appendChild(colDiv);
    }
    container.appendChild(rowDiv);
  }
}

createGrid();