(function () {

    //①
    // function* run() {
    //     console.log("Step 1");
    //     yield;
    //     console.log("Step 2");
    // }
    //
    // let g = run();
    // g.next();
    // g.next();

    //②
    function* run() {
        console.log("Step 1");
        yield;
        console.log("Step 2");

        let count = 0;
        while (true) {
            count++;
            console.log(count);
            yield;
        }
    }

    let g = run();
    //给button设置监听
    document.getElementById("btn-next").onclick = function () {
        g.next();
    }

})();