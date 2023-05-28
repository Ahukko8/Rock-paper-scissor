let moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let currentComputerChoice = "";
const results = [
    ["rock", "scissors", "win"],
    ["scissors", "paper","win"],
    ["paper", "rock", "win"],
    ["scissors", "rock", "lose"],
    ["rock", "paper", "lose"],
    ["paper", "scissors", "lose"]
];

function getComputerChoice() {
    const index = Math.floor(Math.random() * moves.length);
    const move = moves[index];
    currentComputerChoice = move;
}

function isWinningMove(choice, computerChoice) {
    wins.find(function(move){
        return move[0] == choice || move[1] == computerChoice;
    })

} 

function myChoice(choice) {
    console.log(choice, currentComputerChoice)
    if (currentComputerChoice == choice) {
        document.getElementById("result").innerHTML = "Tie!"
        console.log("tie")
    } else {
        if (choice == "rock" && currentComputerChoice == "paper" || choice == "paper" && currentComputerChoice == "scissors" || choice == "scissors" && currentComputerChoice == "rock") {
            document.getElementById("result").innerHTML = "You lose!"
        }
    }
}

getComputerChoice()