(function () {

    //①
    // var str = "Hello world hello,hello me";
    // //如果指定，标志可以具有以下值的任意组合：
    // //g全局匹配;找到所有匹配，而不是在第一个匹配后停止
    // //i忽略大小写
    // var rp = /hello/ig;
    //
    // // // console.log(rp.test(str));
    // // console.log(rp.exec(str));
    // // console.log(rp.exec(str));
    //
    // var result;
    // while (result = rp.exec(str)) {
    //     console.log(result);
    // }

    //②
    // var str = "Hello world hello,hello me";
    // var rp = /\w+/ig;
    //
    //
    // var result;
    // while (result = rp.exec(str)) {
    //     console.log(result);
    // }

    //③
    // var str = "Hello world 1000 hello,hello me 100 200";
    // var rp = /\d+/ig;
    //
    //
    // var result;
    // while (result = rp.exec(str)) {
    //     console.log(result);
    // }

    //④
    // var str = "Hello world 1000 hello,hello me 100 200";
    // // var rp = /[ol]/ig;
    // // var rp = /[a-zA-Z]+/g;
    // var rp = /[^0-9]+/g;
    //
    //
    // var result;
    // while (result = rp.exec(str)) {
    //     console.log(result);
    // }

    //⑤ 截取变量
    var str = "Hello world 1000 hello,hello me 100 200 price:￥1000 price:￥200";
    // var rp = /price:￥(\d+)/g;
    var rp = /price:([￥\$])(\d+)/g;


    var result;
    while (result = rp.exec(str)) {
        console.log(result);
    }
})();