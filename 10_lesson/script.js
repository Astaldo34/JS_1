containerEl = document.querySelector('.container');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        dataInfo = data;
        divEur = document.createElement('div');
        divEur.textContent = `1 bitcoin = ${data.bpi.EUR.rate_float} EUR`;
        containerEl.appendChild(divEur);
        divDol = document.createElement('div');
        divDol.textContent = `1 bitcoin = ${data.bpi.USD.rate_float} USD`;
        containerEl.appendChild(divDol);
    });