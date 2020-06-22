const sketchBoard = document.querySelector(".sketchBoard");
/*
const create = document.querySelector("#create");
create.addEventListener("click", createGrid);

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);

const test = document.querySelector("#test");
test.addEventListener("click", () => {
  alert("Hello World");
});
*/

function createGrid(gridSize) {
  const div = document.createElement("div");
  div.className = "sketchDivs";
  //Loop to create columns
  for (i = 0; i < 10; i++) {
    //Loop to create rows

    sketchBoard.appendChild(div);
    console.log(i);
  }
  //   alert(`Grid Size is now ${gridSize}`);
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
