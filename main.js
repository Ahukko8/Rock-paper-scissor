let moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let currentComputerChoice = "";
let round = 1;
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
        const move = results.find(function(m){
            return m[0] == choice && m[1] == currentComputerChoice;
        });
        if (move[2] == "win"){
            if(move[0] == choice){
                playerScore = playerScore+1;
            }
        }
        if(move[2] == "lose"){
            if(move[0]== choice){
                computerScore = computerScore+1;
            }
        }
        let message = `you selected ${choice} computer selected ${currentComputerChoice} so you ${move[2]}`
        document.getElementById('result').innerHTML = message;
    }
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    if(round == 5){
        alert(`${playerScore > computerScore?"Player Wins!! YOU ROCK!!":"Computer Wins!! YOU SUCK!!"}`);
        return location.reload() 
    }
    round = round+1;
    document.getElementById('round').innerHTML = `Round ${round}`
    getComputerChoice()
}

getComputerChoice()