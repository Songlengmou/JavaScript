(function () {
//参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math

    for (var i = 0; i < 100; i++) {
        // console.log(Math.random() * 100);//0~100随机数
        console.log(Math.random() * 8 + 2);//2~10随机数
    }
})();