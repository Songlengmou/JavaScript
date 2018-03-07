(function () {

    // var d = new Date();
    // console.log(d);
    // console.log(d.getFullYear());

    //时间运算
    // var d = new Date();
    // console.log(d.getTime());

    //50天之前的值
    var d1 = new Date(Date.now() - 50 * 24 * 60 * 60 * 1000);
    // console.log(d1.getDay());
    console.log(`${d1.getMonth() + 1}月${d1.getDate()}日,星期${d1.getDay()}`);

})();