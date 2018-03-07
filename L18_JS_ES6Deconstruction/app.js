(function () {

    // //数组解构
    // let arr = [2, "Hello"];
    // let [num, str, arg = "Song"] = arr;
    // console.log(num, str, arg);

    //对象解构
    // let obj = {name: "Song", age: 18, data: "目标对象"};
    // let {name, age, data = "Hello World"} = obj;
    // console.log(name, age, data);

    // let obj = {name: "Song", age: 18};
    // let {name, age, data = "Hello World"} = obj;
    // console.log(name, age, data);

    //eg:  一个函数返回多个值   ES6的功能,以前的没有
    function getNumbers() {
        return [1, 2, 3];
    }

    let [a, b, c] = getNumbers();
    console.log(a, b, c);
})();