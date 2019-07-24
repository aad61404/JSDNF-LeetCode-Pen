// 先拿到 該行的div 的控制
var temp = document.querySelector('.temp div');
let input = document.querySelector('.input div');
let button = document.querySelectorAll('.main a');
let tempText = '';
let resultText = '';
let isOutcome = false; // 記錄是否按下 = 鍵
let isOperator = true; // 記錄算式結尾是否為運算符

// 將 01234 等 功能寫到top 上
function mainCalc(e) {
    e.preventDefault();
    switch (e.target.className) {
        case 'number':
            dealWithNumber(e);
            break;
        case 'operator':
            dealWithOperator(e);
            break;
        case 'allClear':
            clear();
            break;
    }
}
// 加減乘除功能補上
function dealWithNumber(e) {
    let text = e.target.textContent;
     if (isOutcome) clear(); // 如果剛才才按過 = 鍵，則初始化
     if (isOperator) inputText = ''; // 初始或如果剛才才按過 operator

    switch (text) {
        default:
            if(input.innerHTML === '0'){
                inputText = '' + text;
                if(tempText.endsWith('0')){
                    tempText = tempText.slice(0, -1) + text;
                } else {
                    tempText += text;
                }           
            } else {
                inputText += text;
                tempText += text;
            }
            break;
    }
    input.innerHTML = inputText;
    temp.innerHTML = tempText;
    isOperator = false;
    // resizeText();
}


function dealWithOperator(e){
    let text = e.target.textContent;
    if (isOperator) return;
    if (tempText.endsWith('.')) {
        tempText = tempText.slice(0, -1);
    }
    tempText += text;
    temp.innerHTML = tempText;
    isOperator = true;
    isOutcome = false;
}

// 清空
function clear() {
    input.innerHTML = 0;
    tempText = '';
    temp.innerHTML = '';
}

 
button.forEach(item => item.addEventListener('click', mainCalc));