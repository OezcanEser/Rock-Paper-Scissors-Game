let playerScore = 0
let computerScore = 0
const fiveRounds = document.getElementById("fiveRounds")
const tenRounds = document.getElementById("tenRounds")
const fiveTeenRounds = document.getElementById("fiveTeenRounds")
const tweentyRounds = document.getElementById("tweentyRounds")
const playerScoreOutput = document.getElementById("playerScore")
const computerScoreOutput = document.getElementById("computerScore")
const result = document.getElementById("result")
const playerTake = document.getElementById("playerTake")
const computerTake = document.getElementById("computerTake")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")


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
}

function lose(playerChoice, computerChoice) {
    computerScore++
    computerScoreOutput.innerHTML = computerScore
    playerTake.innerHTML = converToEmoji(playerChoice)
    computerTake.innerHTML = converToEmoji(computerChoice)
}

function draw(playerChoice, computerChoice) {
    playerTake.innerHTML = converToEmoji(playerChoice)
    computerTake.innerHTML = converToEmoji(computerChoice)
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
        game("rock")
    })
    paper.addEventListener('click', function () {
        game("paper")
    })
    scissors.addEventListener('click', function () {
        game("scissors")
    })
}

main()