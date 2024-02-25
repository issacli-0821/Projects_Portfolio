let playerScore = 0;
let computerScore = 0;

let rockCount = 0;
let paperCount = 0;
let scissorsCount = 0;

const GAMEENDSCORE = 10;

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => handleClick("Rock"));
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => handleClick("Paper"));
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => handleClick("Scissors"));

const roundResult = document.querySelector("#round-result");
const computerScoreDiv = document.querySelector("#computer-score");
const playerScoreDiv = document.querySelector("#player-score");
const instructions = document.querySelector("#instructions");
instructions.textContent = `The game will end when one side reaches ${GAMEENDSCORE} points.`;

const modal = document.querySelector('.modal');
modal.toggleAttribute("hidden");
const gameEndReult = document.querySelector(".modal .subtext");
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => modal.style.display = "none");
const playAgainButton = document.querySelector("#play-again");
playAgainButton.addEventListener("click", () => resetGame());

function playRound(playerSelection)
{
    const computerSelection = getComputerSelection();

    if (playerSelection == computerSelection)
    {
        roundResult.textContent = "It's a tie! Play again!";
    }

    if (playerSelection == "Rock" && computerSelection == "Scissors" || 
    playerSelection == "Paper" && computerSelection == "Rock" || 
    playerSelection == "Scissors" && computerSelection == "Paper")
    {
        roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
        playerScore++;
        playerScoreDiv.textContent = `Player score: ${playerScore}`;
    }

    if (playerSelection == "Rock" && computerSelection == "Paper" || 
    playerSelection == "Paper" && computerSelection == "Scissors" || 
    playerSelection == "Scissors" && computerSelection == "Rock")
    {
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`
        computerScore++;
        computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    }
}

function updateCount(playerSelection)
{
    if (playerSelection == "Rock") rockCount++;
    else if (playerSelection == "Paper") paperCount++;
    else scissorsCount++;
}

/* Selects the move that counters the move that the player most frequently selects */
function getComputerSelection()
{
    if (rockCount > paperCount && rockCount > scissorsCount) return "Paper";
    if (paperCount > rockCount && paperCount > scissorsCount) return "Scissors";
    if (scissorsCount > paperCount && scissorsCount > rockCount) return "Rock";
    return getRandomComputerSelection();
}

/* Randomly selects a move */
function getRandomComputerSelection()
{
    let val = Math.floor(Math.random() * 3);
    switch (val)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function displayModal()
{
    modal.toggleAttribute("hidden");
    if (playerScore > computerScore) gameEndReult.textContent = `You won the game with a score of ${playerScore} to ${computerScore}`;
    else gameEndReult.textContent = `You lost the game with a score of ${playerScore} to ${computerScore}`;
}

/* Re-initializes the game */
function resetGame()
{
    modal.toggleAttribute("hidden");
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = `Player score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
    roundResult.textContent = "";
    rockCount = 0;
    paperCount = 0;
    scissorsCount = 0;
}

/* Plays a round when player selects an option, and resets game when needed */
function handleClick(playerSelection)
{
    playRound(playerSelection);
    updateCount(playerSelection);
    if (playerScore == GAMEENDSCORE || computerScore == GAMEENDSCORE) displayModal();
}