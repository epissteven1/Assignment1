let balance = 0;

const balanceElement = document.getElementById('balance');
const amountElement = document.getElementById('amount');
const feedbackElement = document.getElementById('feedback');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');

function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

function showFeedback(message) {
    feedbackElement.textContent = message;
}

depositButton.addEventListener('click', () => {
    const amount = parseFloat(amountElement.value);
    if (isNaN(amount) || amount <= 0) {
        showFeedback('Please enter a valid amount.');
        return;
    }
    balance += amount;
    updateBalance();
    showFeedback(`Deposited $${amount.toFixed(2)} successfully.`);
});

withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(amountElement.value);
    if (isNaN(amount) || amount <= 0) {
        showFeedback('Please enter a valid amount.');
        return;
    }
    if (amount > balance) {
        showFeedback('Insufficient funds.');
        return;
    }
    balance -= amount;
    updateBalance();
    showFeedback(`Withdrew $${amount.toFixed(2)} successfully.`);
});

updateBalance();