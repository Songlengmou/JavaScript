(function () {

    // console.log("立即执行");
    //
    // //① setTimeout
    // var timerId = setTimeout(function (name) {
    //     console.log("1秒后执行," + name);
    // }, 1000, "SongSong");
    //
    // console.log(timerId);
    //
    // // clearTimeout(timerId);//清除计时器

    //② setInterval
    var count = 0;
    var timerId1 = setInterval(function () {
        count++;
        console.log("count:" + count);

        // if (count >= 10) {
        //     clearInterval(timerId1);
        // }
    }, 1000);
})();