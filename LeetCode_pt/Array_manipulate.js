// https://wcc723.github.io/javascript/2017/06/29/es6-native-array/
// 內容豐富
// 相同的陣列
var people = [{
        name: 'Casper',
        like: '鍋燒意麵',
        age: 18
    },
    {
        name: 'Wang',
        like: '炒麵',
        age: 24
    },
    {
        name: 'Bobo',
        like: '蘿蔔泥',
        age: 1
    },
    {
        name: '滷蛋',
        like: '蘿蔔泥',
        age: 3
    }
];

var filterEmpty = people.filter(function (item, index, array) {});
console.log(filterEmpty); // 沒有條件，會是一個空陣列
var filterAgeThan5 = people.filter(function (item, index, array) {
    return item.age > 5; // 取得大於五歲的
});
console.log(filterAgeThan5); // Casper, Wang 這兩個物件
var filterDouble = people.filter(function (item, index, array) {
    return index % 2 === 1; // 取得陣列中雙數的物件
});
console.log(filterDouble); // Wang, 滷蛋 這兩個物件