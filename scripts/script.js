const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-btn");
const resetButton = document.querySelector(".reset-btn");

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

function deleteGrid () {
  let containerChild = container.lastElementChild;
  while (containerChild) {
    container.removeChild(containerChild);
    containerChild = container.lastElementChild;
  } 
}

document.addEventListener("DOMContentLoaded", () => {
  createGrid();
});

gridButton.addEventListener("click", () => {
  const size = Number(prompt("Enter size of the grid (max is 100)."));
  if (size > 100) {
    alert(`Maximum size is 100x100 squares. You entered ${size}. Please try again!`);
  } else if (size <= 0) {
    alert(`Must be a number greater than 0. You entered ${size}. Please try again!`);
  } else {
    deleteGrid();
    createGrid(size);
  }
});

resetButton.addEventListener("click", () => {
  const gridSquare = document.querySelectorAll(".square");
  for (let i = 0; i < gridSquare.length; i++) {
    gridSquare[i].classList.remove("color");
  }
});