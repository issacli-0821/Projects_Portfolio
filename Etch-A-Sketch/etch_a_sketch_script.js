const grid = document.querySelector("#grid-container");
const GRIDSIZE = 600;

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

let RANDOMIZED_COLOR = false;
let ERASER = false;
let STANDARD_COLOR = true;

const standardButton = document.querySelector("#standard");
standardButton.addEventListener("click", () => {
    RANDOMIZED_COLOR = false; 
    ERASER = false;
    STANDARD_COLOR = true;
});

const randomButton = document.querySelector("#random");
randomButton.addEventListener("click", () => {
    RANDOMIZED_COLOR = true; 
    ERASER = false;
    STANDARD_COLOR = false;
});

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => {
    RANDOMIZED_COLOR = false; 
    ERASER = true;
    STANDARD_COLOR = false;
});

/* Adds a square of size squareSize by squareSize to the main grid */
function generateSquare(squareSize)
{
    const square = document.createElement("div");
    square.style.height = squareSize;
    square.style.width = squareSize;
    square.classList.add("grid-square");
    square.addEventListener("mouseover", () => square.style.backgroundColor = getColor());
    grid.appendChild(square);
}

/* Generates squaresPerSide^2 squares for the main grid. Returns nothing */
function createSquares(squaresPerSide)
{
    let squareSize = `${GRIDSIZE / squaresPerSide}px`;
    for (let i = 0; i < squaresPerSide; i++)
    {
        for (let j = 0; j < squaresPerSide; j++) 
        {
            generateSquare(squareSize);
        }
    }
}

function resetGrid()
{
    let squaresPerSide = Math.min(parseInt(prompt("Enter the size of your new grid")), 100);
    while (grid.hasChildNodes()) grid.removeChild(grid.firstChild);
    createSquares(squaresPerSide);
}

function getColor()
{
    if (RANDOMIZED_COLOR) return "#" + getRandomRGBValue() + getRandomRGBValue() + getRandomRGBValue();
    if (ERASER) return "cornflowerblue";
    return "blue";
}

function getRandomRGBValue()
{
    return Math.floor(Math.random() * 255).toString(16);
}

createSquares(16);