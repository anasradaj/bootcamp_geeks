// Replace with your own API key from https://www.exchangerate-api.com/
const API_KEY = '0dd30ab374d8a873c0d9c896';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');
const form = document.getElementById('converter-form');
const switchBtn = document.getElementById('switch-btn');

// Fetch supported currencies and populate dropdowns
async function fetchCurrencies() {
    try {
        const res = await fetch(`${BASE_URL}/codes`);
        const data = await res.json();
        if (data.result !== 'success') throw new Error('Failed to fetch currencies');
        fromCurrency.innerHTML = '';
        toCurrency.innerHTML = '';
        data.supported_codes.forEach(([code, name]) => {
            const option1 = document.createElement('option');
            option1.value = code;
            option1.textContent = `${code} - ${name}`;
            fromCurrency.appendChild(option1);
            const option2 = document.createElement('option');
            option2.value = code;
            option2.textContent = `${code} - ${name}`;
            toCurrency.appendChild(option2);
        });
        fromCurrency.value = 'USD';
        toCurrency.value = 'EUR';
    } catch (err) {
        errorDiv.textContent = 'Error loading currencies.';
    }
}

// Fetch conversion rate and display result
async function convertCurrency(e) {
    e.preventDefault();
    errorDiv.textContent = '';
    resultDiv.textContent = '';
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value;
    if (!from || !to || !amount || amount <= 0) {
        errorDiv.textContent = 'Please enter valid values.';
        return;
    }
    resultDiv.textContent = 'Loading...';
    try {
        const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
        const data = await res.json();
        if (data.result !== 'success') throw new Error('Conversion failed');
        resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } catch (err) {
        resultDiv.textContent = '';
        errorDiv.textContent = 'Error converting currency.';
    }
}

// Switch currencies and re-calculate
switchBtn.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    // Optionally, trigger conversion if amount is present
    if (amountInput.value && amountInput.value > 0) {
        form.dispatchEvent(new Event('submit'));
    }
});

form.addEventListener('submit', convertCurrency);

fetchCurrencies();