//1.循环调用
function printHello() {
    console.log("Hello World");
}

printHello();
printHello();

//2.计算
//①
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

//②
function addTwo(a, b) {
    b = b || 10;
    return a + b;
}

console.log(addTwo(2));

//3.arguments关键字   可以获取到函数的所有传入参数
function example() {
    console.log(arguments);
}

example(10, 8);  //在这里  括号内可写可不写