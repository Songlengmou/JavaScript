"use strict"; //使用严格模式

(function () {

    //①
    // function hello() {
    //     console.log("Hello World");
    // }
    //
    // hello();

    //②
    // var hello = function () {
    //     console.log("Hello World");
    // }
    // hello();

    //③
    // function hello() {
    //     console.log("Hello World");
    // }
    //
    // var h = hello;
    // // h; //(1)
    //
    // // h.call();//(2)
    // h.apply();  //(3)

    //④
    // function hello() {
    //     console.log("Hello " + this.name);
    // }
    //
    // var student = {name: "XiaoLi", age: 10};
    // var h = hello;
    // // h.call(null, "XiaoMing");
    // // h.apply(null, ["XiaoMing"]);
    //
    // h.call(student, "XiaoMing");

    //⑤
    // function hello() {
    //     console.log("Hello " + this.name);
    // }
    //
    // var student = {name: "XiaoLi", age: 10};
    // var h = hello.bind(student);
    //
    // // h();
    // h.apply(null, ["XiaoMing"]);

    //⑥
    var student = {
        name: "XiaoLi", age: 10, hello: function () {
            console.log("Hello " + this.name);
        }
    };
    student.hello();
})();