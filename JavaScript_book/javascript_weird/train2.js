function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar =1;
a();

// ------------------------------------
// Question what the value of Myvar is ?

function a() {
    
    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    b();
}

var myVar =1;
a();

// Question what the value of Myvar is ?