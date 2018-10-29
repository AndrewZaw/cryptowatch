function fillArray(array, table) {
    for (var i = 0; i < table.rows.length - 1; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            if (j == 2){
                if (array[i][j] >= 0){
                    table.rows[i + 1].cells[j].style.color = "#00b33c"
                }
                else{
                    table.rows[i + 1].cells[j].style.color = "#ff3300"
                }
                table.rows[i + 1].cells[j].innerHTML = array[i][j] + "%";
                break;
            }
            table.rows[i + 1].cells[j].innerHTML = array[i][j];
        }
    }

}

function compare(a,b){
    if (a[3] > b[3]){
        return 1;
    }
    return -1;
}

var request = new XMLHttpRequest();

var dataArray = new Array();
request.open('GET', 'https://api.coinmarketcap.com/v2/ticker/?limit=10', true);

request.onload = function() {
    var doc = JSON.parse(this.response);
    data = doc.data;

    if (request.status >= 200 && request.status < 400) {
        Object.keys(data).forEach(key => {
            item = data[key];
            var tempArray = new Array();
            tempArray.push(item.name + " (" + item.symbol + ")");
            tempArray.push(item.quotes.USD.price.toFixed(2));
            tempArray.push(item.quotes.USD.percent_change_24h);
            tempArray.push(item.rank);
            dataArray.push(tempArray);
        });
    }
}

request.send();


setTimeout(function() {
    dataArray = dataArray.sort(compare);
    table = document.getElementById('modal-table');
    fillArray(dataArray, table);
}, 1000);

console.log(dataArray);


/*
const rp = require('request-promise');
const requestOptions = {
    method: 'GET',
    uri: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        start: 1,
        limit: 10,
        convert: 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': '6453597e-8761-4ca7-8a3a-46af72ce2da4'
    },
    json: true,
    gzip: true
};

rp(requestOptions).then(response => {
    console.log('API call response:', response);
}).catch((err) => {
    console.log('API call error:', err.message);
});
*/