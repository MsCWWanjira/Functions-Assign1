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
function displayResult(outcome, playerChoice, computerChoice) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. <br> You ${outcome}!`;

        if (outcome === 'Win') {
            playerScore++;
        } else if (outcome === 'Lose') {
            computerScore++;
        }
        resultDiv.innerHTML += `<br> Player Score: ${playerScore} | Computer Score: ${computerScore}`;

        if (playerScore === 3 || computerScore === 3) {
            const winner = playerScore === 3 ? 'You' : 'Computer';
            resultDiv.innerHTML += `<br> **${winner} wins!**`;
        }
    }
