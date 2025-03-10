let balance = 0;
let dailyWithdrawal = 0;
const dailyLimit = 500;
const feedbackElement = document.getElementById('feedback');
const balanceElement = document.getElementById('balance');
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const transactionHistoryElement = document.getElementById('history');

depositButton.addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        feedbackElement.textContent = 'Please enter a valid amount.';
        return;
    }
    balance += amount;
    updateUI('Deposit', amount);
    feedbackElement.textContent = 'Deposit successful!';
});

withdrawButton.addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        feedbackElement.textContent = 'Please enter a valid amount.';
        return;
    }
    if (amount > balance) {
        feedbackElement.textContent = 'Insufficient balance.';
        return;
    }
    if (dailyWithdrawal + amount > dailyLimit) {
        feedbackElement.textContent = 'Daily withdrawal limit exceeded.';
        return;
    }
    balance -= amount;
    dailyWithdrawal += amount;
    updateUI('Withdraw', amount);
    feedbackElement.textContent = 'Withdrawal successful!';
});

function updateUI(type, amount) {
    balanceElement.textContent = balance.toFixed(2);
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `${type}: $${amount.toFixed(2)}`;
    transactionHistoryElement.appendChild(transactionItem);
}