const container = document.querySelector(".container");

function createGrid (count = 16) {
  for (let i = 0; i < count; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < count; j++) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      squareDiv.addEventListener("mouseover", () => {
        squareDiv.classList.add("color");
      });
      rowDiv.appendChild(squareDiv);
    }
    container.appendChild(rowDiv);
  }
}


createGrid();

