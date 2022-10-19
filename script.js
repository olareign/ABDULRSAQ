const operationScreen = document.getElementById('operation');
const resultScreen = document.getElementById('result');

const numericKeys = document.querySelectorAll('.numeric');
const operatorKeys = document.querySelectorAll('.operator');
const decimal = document.getElementById('dot');


const equator = document.getElementById('equator');
equator.addEventListener('click', function(){
    resultScreen.textContent = eval(operationScreen.textContent);
    // console.log(equator);
})

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function() {
    operationScreen.innerText = '';
    resultScreen.innerText = '';
});

const deletBtn = document.getElementById('delete');
deletBtn.addEventListener('click', function(){
    operationScreen.textContent = operationScreen.textContent.slice(0,-1);
});

//clicking of the numeric keys
for (let i = 0; i < numericKeys.length; i++) {
    numericKeys[i].addEventListener('click', function () {
       let keys = Number(numericKeys[i].innerText);
       operationScreen.innerText += keys;
       //    console.log(keys + keys);
    });
}; 

decimal.addEventListener('click', function(){
    let keys = decimal.innerText;
    operationScreen.innerText += keys
});


//clicking of the operators keys
for (let i = 0; i < operatorKeys.length; i++) {
    operatorKeys[i].addEventListener('click', function (){
        let signs = operatorKeys[i].innerText;
        operationScreen.innerText += signs;
       
})};
