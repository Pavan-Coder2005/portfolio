// Rock Paper Scissors game logic
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computer-choice');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const buttons = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore++;
        return `You Win! ${capitalize(player)} beats ${capitalize(computer)}.`;
    } else {
        computerScore++;
        return `You Lose! ${capitalize(computer)} beats ${capitalize(player)}.`;
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.dataset.choice;
        const computerChoice = computerPlay();
        const resultMsg = determineWinner(playerChoice, computerChoice);

        resultDiv.textContent = resultMsg;
        computerChoiceDiv.textContent = `Computer chose: ${capitalize(computerChoice)}`;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;

        buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
    });
});

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    resultDiv.textContent = 'Make your move!';
    computerChoiceDiv.textContent = '';
    buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const purpose = [...document.getElementsByName('purpose')].find(r => r.checked)?.value || '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(
        `Your details submitted:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Purpose: ${purpose}\n` +
        `Message: ${message}`
    );
});
