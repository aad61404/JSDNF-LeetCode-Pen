// function a () {
//     console.log("a");
//     b();
//     var c;
//     console.log(c);
// }

// function b() {
//     console.log("b");
//     var d;
// }

// a();
// -------------------------------
function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar =2;
    console.log(myVar);
    b();
}

var myVar =1;
console.log(myVar);
a();
console.log(myVar);