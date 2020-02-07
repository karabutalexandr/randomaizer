var buttonRndValue = document.getElementById("rnd-val");
var inputRndValue = document.getElementById("input-rnd-val");
var inputMinValue = document.getElementById("min-val");
var inputMaxValue = document.getElementById("max-val");

var resultArray = [];

function getRandomValue(event) {
    event.preventDefault()

    var min = +inputMinValue.value;
    var max = +inputMaxValue.value;

    if (min >= max) {

        inputRndValue.value = 'Введите корректные данные'
        
    } else {

        var result = Math.floor( min + Math.random() * (max + 1 - min) );

        if (resultArray.indexOf(result) === -1) {
            resultArray.push(result);
            inputRndValue.value = result;
            return resultArray;
        }

        if(resultArray.length === (max - min +1)) {
            inputRndValue.value = 'Задайте другой интервал'
        }
    }
}

buttonRndValue.onclick = getRandomValue

document.getElementById("reset-button").onclick = function(event) {
    resultArray.length = 0
}