const grid = document.querySelector("#grid-container");
const GRIDSIZE = 600;

const squaresPerSide = 16;

function generateSquare(grid)
{
    const square = document.createElement("div");
    square.style.height = `${GRIDSIZE / squaresPerSide}px`;
    square.style.width = `${GRIDSIZE / squaresPerSide}px`;
    square.classList.add("grid-square");
    square.addEventListener("mouseover", () => square.style.backgroundColor = "blue");
    grid.appendChild(square);
}



for (let i = 0; i < squaresPerSide; i++)
{
    for (let j = 0; j < squaresPerSide; j++) generateSquare(grid);
}

