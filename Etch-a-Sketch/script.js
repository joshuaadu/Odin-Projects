const sketchBoard = document.querySelector(".sketchBoard");

function createGrid(gridSize) {
  const div = document.createElement("div");
  div.className = "sketchDivs";
  
  for (i = 0; i < 10; i++) {
   

    sketchBoard.appendChild(div);
    console.log(i);
  }
  
}

function clearGrid() {
  alert(`Grid Size is now ${gridSize - gridSize}`);
}

//Add event listeners to buttons using the target property
const buttons = document.querySelector(".container");
buttons.addEventListener("click", (event) => {
  if (event.target.textContent == "Create") {
    const gridSize = Number(prompt());
    createGrid(gridSize);
  } else if (event.target.textContent == "Clear") {
    clearGrid(gridSize);
  } else {
    console.log("default");
  }
});
