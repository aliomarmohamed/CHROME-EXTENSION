const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY = ""
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

convert.addEventListener('click', () => {
    console.log('hi')
    const amountTotal = amount.value;
    console.log('total', amountTotal)
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;
    console.log('url', url)

    fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            console.log('rate', rate)
            const resultPrice = amountTotal * rate;
            console.log('result', resultPrice)
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
        })
        .catch(error => {
            console.error('Request failed', error);
            result.innerHTML = 'an error occured pease try again later.'
        })
})