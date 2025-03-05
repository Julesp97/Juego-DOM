function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random * options.length);
    return options[randomIndex];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
    
}
console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));