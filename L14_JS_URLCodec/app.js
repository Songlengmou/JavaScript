(function () {

    // var arg = "参数";
    // //解码
    // var value = encodeURI(arg);
    // //解码
    // // value = decodeURI(value);
    // console.log(value);


    //eg:
    var arg1 = "https://URL%E7%BC%96%E8%A7%A3%E7%A0%81/m/course/v/1";
    var value1 = decodeURI(arg1);

    //encodeURIComponent与encodeURI的区别
    // value1=encodeURIComponent(value1);
    value1 = encodeURI(value1);

    console.log(value1);

})();