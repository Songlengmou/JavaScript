//判断属于哪种类型
var a = 10;
var b = "Hello";
var c = false;    // var c=true;
var d = Symbol("s");   //这个Symbol需要在File-settings-Language&Frameworks-JavaScript把5.1改为6.0即可出现
var e = null;
var f = undefined;
var g = {};  //声明对象
var arr = [];  //声明数组

function hello() {
}

//分别输入上述名称来看它们所属的类型
console.log(typeof d);  // typeof只能用于判断基本数据类型
// console.log(typeof hello);
