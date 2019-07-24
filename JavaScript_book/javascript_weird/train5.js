false == 0
//  true
null == 0
// false
null < 1
// true

"" == 0
//  true
"" == false
//  true

Boolean(undefined)
// false
Boolean(null)
// false
Boolean("")
// false

var a ;
if(a || a === 0 ) {
    console.log("Something happen");
}
// undefined
//--------------------------
function greet(name) {
    name = name || 'Your name here';
    console.log('Hello '+ name);
}

greet();
greet('James;')
