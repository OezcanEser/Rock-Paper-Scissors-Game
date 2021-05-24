// scores
let playerScore = 0
let computerScore = 0
const playerScoreOutput = document.getElementById("playerScore")
const computerScoreOutput = document.getElementById("computerScore")
const result = document.getElementById("result")

// rounds
let playedRounds = 0
let totalRounds = 0
const fiveRounds = document.getElementById("fiveRounds")
const tenRounds = document.getElementById("tenRounds")
const fifteenRounds = document.getElementById("fifteenRounds")
const tweentyRounds = document.getElementById("tweentyRounds")


// choices
const playerTake = document.getElementById("playerTake")
const computerTake = document.getElementById("computerTake")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")


// default
const resetButton = document.getElementById("reset");
const roundsTable = document.getElementById("roundsTable")
const roundsCounter = document.getElementById("roundsCounter")
let gameIsOver = false


function gameFlow(playerChoice) {
    if (totalRounds == 0) {
        if (!getTotalRounds())
            return
    }
    if (playedRounds == totalRounds - 1 && totalRounds !== 0) {
        checkScore()
        return
    }
    if (totalRounds > 0) {
        game(playerChoice)
        playedRounds++
        roundsCounter.innerHTML = `${playedRounds} / ${totalRounds}`
        roundsTable.style.display = "none"
        roundsCounter.style.display = "block"
    }
}

function checkScore() {
    if (playerScore > computerScore) {
        roundsCounter.innerHTML = "You Win!"
    } else if (playerScore < computerScore) {
        roundsCounter.innerHTML = "Computer Wins!"
    } else {
        roundsCounter.innerHTML = "Game ends in a draw!"
    }
}

function getTotalRounds() {
    if (fiveRounds.checked) {
        totalRounds = fiveRounds.value
    } else if (tenRounds.checked) {
        totalRounds = tenRounds.value
    } else if (fifteenRounds.checked) {
        totalRounds = fifteenRounds.value
    } else if (tweentyRounds.checked) {
        totalRounds = tweentyRounds.value
    } else {
        return false
    }
    return true
}

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * 3)
    return computerChoices[randomChoice]
}

function converToEmoji(letter) {
    if (letter === "rock") return "✊"
    if (letter === "paper") return "✋"
    return "✌️"
}

function win(playerChoice, computerChoice) {
    playerScore++
    playerScoreOutput.innerHTML = playerScore
    playerTake.innerHTML = converToEmoji(playerChoice)
    computerTake.innerHTML = converToEmoji(computerChoice)
    result.innerHTML = "Player Scores!"
    result.style.backgroundColor = "green"
}

function lose(playerChoice, computerChoice) {
    computerScore++
    computerScoreOutput.innerHTML = computerScore
    playerTake.innerHTML = converToEmoji(playerChoice)
    computerTake.innerHTML = converToEmoji(computerChoice)
    result.innerHTML = "Computer Scores!"
    result.style.backgroundColor = "red"
}

function draw(playerChoice, computerChoice) {
    playerTake.innerHTML = converToEmoji(playerChoice)
    computerTake.innerHTML = converToEmoji(computerChoice)
    result.innerHTML = "Draw!"
    result.style.backgroundColor = "gray"
}

function game(playerChoice) {
    const computerChoice = getComputerChoice()
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(playerChoice, computerChoice)
            break
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            lose(playerChoice, computerChoice)
            break
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(playerChoice, computerChoice)
            break
    }
}

function main() {
    rock.addEventListener('click', function () {
        gameFlow("rock")
    })
    paper.addEventListener('click', function () {
        gameFlow("paper")
    })
    scissors.addEventListener('click', function () {
        gameFlow("scissors")
    })
}

main()

resetButton.addEventListener('click', reset)
function reset() {
    gameIsOver = false
    playedRounds = 0
    totalRounds = 0
    playerScore = 0
    computerScore = 0
    playerScoreOutput.textContent = 0
    computerScoreOutput.textContent = 0
    result.innerHTML = "vs"
    playerTake.innerHTML = "You"
    computerTake.innerHTML = "Computer"
    roundsTable.style.display = "block"
    roundsCounter.style.display = "none"
    result.style.backgroundColor = ""
}