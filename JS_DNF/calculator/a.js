let temp = document.querySelector('.temp div');
let input = document.querySelector('.input div');
let button = document.querySelectorAll('.main a');
let tempText = '';
let resultText = '';
let isOutcome = false;   // 記錄是否按下 = 鍵
let isOperator = true;  // 記錄算式結尾是否為運算符
let size = 56;  // 初始 input 文字大小

function mainCalc(e){
    e.preventDefault();
    switch (e.target.className) {
        case 'number':
            dealWithNumber(e);
            break;
        case 'operator':
            dealWithOperator(e);
            break;
        case 'allClear':
            allClear();
            break;
        case 'back':
            backspace();
            break;
        case 'equal':
            getOutcome();
            break;
    }
}

function dealWithNumber(e){
    let text = e.target.textContent;
    if (isOutcome)  allClear();  // 如果剛才才按過 = 鍵，則初始化
    if (isOperator)  inputText = '';  // 初始或如果剛才才按過 operator
        
    switch (text) {
        case '0':
            dealWithZero(text);
            break;
        case '00':
            dealWithZero(text);
            break;
        case '.':
            dealWithDot();
            break;
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
    input.innerHTML = addComma(inputText);
    temp.innerHTML = addComma(tempText);
    isOperator = false;
    resizeText();
}

function dealWithZero(text){
    if (isOperator || input.innerHTML === '0'){
        inputText = '0';
        if(tempText.endsWith('0')){
            tempText += '';
        } else {
            tempText += '0';
        }
    } else {
        inputText += text;
        tempText += text;
    }
    return inputText, tempText;
}

function dealWithDot(){
    if(inputText.includes('.')){
        inputText += '';
        tempText += '';
    } else {
        if (isOperator){
            inputText = '0.';
            tempText += '0.';
        } else {
            inputText += '.';
            tempText += '.';
        }
    }
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

function backspace(){
    if (isOutcome) {
        input.innerHTML = 0;
        isOutcome = false;
    }

    if (tempText.endsWith(' ')) {  // 如果以空格結尾，表示是 operator
        tempText = tempText.slice(0, -3);
        isOperator = false;
    } else {
        tempText = tempText.slice(0, -1);
        inputText = inputText.slice(0, -1);
    }

    temp.innerHTML = addComma(tempText);
    if (tempText.endsWith(' '))  isOperator = true;

    if (inputText.length == 0) {
        input.innerHTML = 0;
    } else {
        input.innerHTML = addComma(inputText);
    }

    resizeText();
}

function getOutcome(){
    if(isOperator || isOutcome) return;

    let tempTextArray = tempText.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').split(' ');  // 將字串中的乘(×)、除(÷)、減(−)以正確的運算子取代，並以空白字元分割存成陣列

    // 將陣列中的字串(或數字)從左至右一次拿兩個出來計算，先乘除後加減
    for(let i = 0; i < tempTextArray.length; i += 2){
        let num1, num2, answer;
        if (tempTextArray.includes('*') || tempTextArray.includes('/')){
            switch (tempTextArray[i + 1]){
                case '*':
                    num1 = tempTextArray[i];
                    num2 = tempTextArray[i + 2];
                    answer = calc(num1, num2, '*');
                    tempTextArray.splice(i, 3, answer);
                    i -=2;
                    break;
                case '/':
                    num1 = tempTextArray[i];
                    num2 = tempTextArray[i + 2];
                    answer = calc(num1, num2, '/');
                    tempTextArray.splice(i, 3, answer);
                    i -= 2;
                    break;
            }
        } else {
            i = 0;  // 重新計算 i 
            switch (tempTextArray[i + 1]){
                case '+':
                    num1 = tempTextArray[i]; 
                    num2 = tempTextArray[i + 2];
                    answer = calc(num1, num2, '+');
                    tempTextArray.splice(i, 3, answer);
                    i -= 2;
                    break;
                case '-':
                    num1 = tempTextArray[i]; 
                    num2 = tempTextArray[i + 2];
                    answer = calc(num1, num2, '-');
                    tempTextArray.splice(i, 3, answer);
                    i -= 2;
                    break;
            }
        }
    }

    let outcome = tempTextArray.toString();
    if (isNaN(outcome) || outcome == 'Infinity' || outcome == '-Infinity') {
        input.innerHTML = 0;
        temp.innerHTML = 'Error';
    } else {
        input.innerHTML = addComma(outcome);
        temp.innerHTML += ' = ';
    }

    isOutcome = true;
    resizeText();
}

function allClear(){
    tempText = '';
    temp.innerHTML = tempText;
    inputText = '';
    input.innerHTML = 0;
    input.style.fontSize = '56px';
    isOutcome = false;
    isOperator = true;
}

// 小數點前增加千分位
function addComma(str){
    let parts = str.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

// 縮放字型大小
function resizeText(){
    let inputWidth = input.scrollWidth;
    let inputParentWidth = input.parentElement.clientWidth;
    let scalePercent = inputParentWidth / inputWidth;
    size *= scalePercent;
    if (size > 56)  size = 56;
    input.style.fontSize = size + 'px';
}

// 浮點數的運算：先將浮點數轉換成整數再計算，計算完再轉換回浮點數
// 參考文章 https://kknews.cc/tech/4q42eeq.html
function calc(num1, num2, operator){
    let point1, point2, m, n;  // point 為 num 小數點後的位數

    if (num1.toString().includes('.')) {
        point1 = num1.toString().split('.')[1].length;
    } else {
        point1 = 0;
    }
    if (num2.toString().includes('.')) {
        point2 = num2.toString().split('.')[1].length;
    } else {
        point2 = 0;
    }

    switch (operator) {
        case '+':
            m = Math.pow(10, Math.max(point1, point2));
            return Math.round(num1 * m + num2 * m) / m;
        case '-':
            m = Math.pow(10, Math.max(point1, point2));
            n = (point1 >= point2)? point1: point2;
            return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
        case '*':
            num1 = num1.toString().replace('.', '');
            num2 = num2.toString().replace('.', '');
            return (num1 * num2) / Math.pow(10, (point1 + point2));
        case '/':
            num1 = num1.toString().replace('.', '');
            num2 = num2.toString().replace('.', '');
            return (num1 / num2) * Math.pow(10, (point2 - point1));
    }
}

button.forEach(item => item.addEventListener('click', mainCalc));