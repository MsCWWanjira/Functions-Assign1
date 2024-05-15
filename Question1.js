let playerScore = 0;
        let computerScore = 0;

        function playGame(playerChoice) {
            const computerChoice = getComputerChoice();
            const outcome = determineWinner(playerChoice, computerChoice);
            displayResult(outcome, playerChoice, computerChoice);
        }

        function getComputerChoice(cheatMode = false) {
            const randomNumber = Math.random();
            if (cheatMode) {
                return 'scissors';
            } else {
                if (randomNumber < 0.34) {
                    return 'rock';
                } else if (randomNumber < 0.67) {
                    return 'paper';
                } else {
                    return 'scissors';
                }
            }
        }
        const determineWinner = (playerChoice, computerChoice) => (
        playerChoice === computerChoice ? 'Tie' :
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ? 'Win' : 'Lose'
    );