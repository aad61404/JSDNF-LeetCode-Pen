var nickName = '小明';

function callName() {
    console.log(this.nickName);
}
// callName();

var auntie = {
    nickName: '帥溝',
    callName: callName,
    callName2: function() {
        // console.log(this);
        console.log(this.nickName);
    },
    child: {
        nickName: '帥溝的小孩',
        callName: callName
    }
};
// auntie.callName();
// auntie.callName2();
auntie.child.callName();

// 重要********************

var callSome = auntie.child.callName;
callSome(); // 小明 ，不是帥溝的小孩
// 關鍵是你在哪個物件被呼叫
// auntie.child.callName 
// 重要********************


// 下一題
// 複製物件
var PhoneTemplate = {
    brand: 'xxx',
    model: 'z1',
    withCamera: false,
    takePhoto: function(){
        if(this.withCamera){
            console.log('照相');
        }else {
            console.log('這台沒有照樣功能');
        }
    }
}

var iPhone = PhoneTemplate; // 傳參考
iPhone.withCamera = true; 
iPhone.takePhoto(); // 照相

PhoneTemplate.takePhoto(); // 照相
console.log(iPhone, PhoneTemplate);


// -----------
function PhoneTemplate(brand, withCamera) {
    this.brand = brand;
    this.withCamera = withCamera;
    this.isPhone = true;
}

var iPhone = new PhoneTemplate('Apple', true);
var N3310 = new PhoneTemplate('Nokia', false);

// 掛載原形的方法
PhoneTemplate.prototype.takePhoto = function() {
    if(this.withCamera) {
        console.log(this.brand + '照相');
    } else {
        console.log(this.brand + '這台沒有照相功能');
    }
}

iPhone.takePhoto();
N3310.takePhoto();

// iPhone.__proto__; 寫法會找不到 父原形
// N3310.__proto__;
// 使用 PhoneTemplate.prototype 寫會比較好
// 原形鍊的功能 解決 多陣列時情況重覆的方法
var a =[]; // 陣列裡面的原形方法都非常多 forEach filter indexOf ...
// 每個陣列都有這些方法的話 會消耗太多記憶體資源

JSON.stringify(iPhone) // "{"brand":"Apple","withCamera":true,"isPhone":true}"
iPhone === PhoneTemplate // false
iPhone == PhoneTemplate // false

var a = new String('aaa');
typeof a //"object"
typeof 'aaa' // string
var date = new Date();
console.dir(date); // 可以看到原形