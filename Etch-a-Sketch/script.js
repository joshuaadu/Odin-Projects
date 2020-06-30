const sketchBoard = document.querySelector(".sketchBoard");
let hasGrid = false;

//Create Grid
function createGrid(gridSize) {
  if (hasGrid == true) {
    clearGrid();
  }
  for (i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.className = "sketchDivs";
    sketchBoard.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;
    sketchBoard.appendChild(div);
  }
  //Add color
  const sketchDivs = Array.from(document.querySelectorAll(".sketchDivs"));
  sketchDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.background = changeColor();
    });
  });
  hasGrid = true;
}

//Remove Grid item divs
function clearGrid() {
  while (sketchBoard.firstChild) {
    sketchBoard.removeChild(sketchBoard.firstChild);
  }
}

//Add event listeners to buttons using the target property
const buttons = document.querySelector(".container");
buttons.addEventListener("click", (event) => {
  if (event.target.textContent == "Create") {
    let gridSize = 0;
    while (!gridSize) {
      gridSize = Number(prompt("Enter Grid Size(note: only numbers allowed)"));
    }
    createGrid(gridSize);
  } else if (event.target.textContent == "Clear") {
    clearGrid();
  }
});

function changeColor() {
  const color = document.querySelector("#color");
  let newColor = color.value;
  color.addEventListener("input", (e) => {
    newColor = event.target.value;
  });
  return newColor;
}

/*Add the following functionalities
1. Click and hold to add color to the SketchDivs
2. Add a keypress event to call the create and clear functions

*/
