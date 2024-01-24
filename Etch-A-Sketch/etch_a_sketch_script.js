const grid = document.querySelector("#grid-container");
const GRIDSIZE = 600;

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", resetGrid);

function generateSquare(squaresPerSide)
{
    const square = document.createElement("div");
    square.style.height = `${GRIDSIZE / squaresPerSide}px`;
    square.style.width = `${GRIDSIZE / squaresPerSide}px`;
    square.classList.add("grid-square");
    square.addEventListener("mouseover", () => square.style.backgroundColor = "blue");
    grid.appendChild(square);
}

function createSquares(squaresPerSide)
{
    for (let i = 0; i < squaresPerSide; i++)
    {
        for (let j = 0; j < squaresPerSide; j++) generateSquare(squaresPerSide);
    }
}

function resetGrid()
{
    let squaresPerSide = Math.min(parseInt(prompt("Enter the size of your new grid")), 100);
    while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);
    createSquares(squaresPerSide);
}

createSquares(16);