// https://www.youtube.com/watch?v=wdlbWhlftAY
// 陣列原形 -> 物件原形  
// Array , Object  ,  
// 印出所有P  ,NodeList 
document.querySelectorAll('p');

// 印出所有P的 內容
document.querySelectorAll('p').forEach(function(b){console.log(b)});

// 

// 類陣列 
[...document.querySelectorAll('p')]  // 原形從 NodeList變成Array
// 類陣列2
function callName(a) {
    var args = [...arguments]; // 印出來後沒那麼多Method，需轉類陣列，_proto_
    console.log(a , arguments); // 會印出剩下的資訊
}
callName(1,2,3,4); // 原本function 沒寫那麼多參數
callName("1","2","3","4"); // 印出來後沒那麼多Method，需轉類陣列

var person = {
    name: '小明',
    sex: 'male',
    height: 160
};
var person2 = {
    name: '帥勾',
    sex: 'female',
    height: 183
}

// person1 , person2 共用 物件原形
person.__proto__.nickName = '小明家人';

var family = [1,2,3];
family.__proto__.nickName = '只是陣列';
var abc = [];
console.log(abc); // 可以找到 __proto__只是陣列

// -----------------------------------------
var a = new String('aaa');
// __proto__ = String

