window.myns = window.myns || {};

//箭头函数的闭包函数
(() => {
    function hello() {
        console.log("Hello from hello2")
    }

    window.myns.h2 = hello;
})();