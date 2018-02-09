window.myns = window.myns || {};

//箭头函数的闭包函数
(() => {
    function hello() {
        console.log("Hello from hello1")
    }

    window.myns.h1 = hello;
})();


