(function () {

    //使用生成器特性做异步编程
    let g;

    function loadData(url) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            g.next(xhr.responseText);
        }

        xhr.open("get", url);
        xhr.send();
    }

    function* run() {
        //①
        // let result = yield loadData("data1.txt");
        // console.log(result);
        // console.log(yield loadData("data2.txt"));
        // console.log(yield loadData("data3.txt"));
        //②
        let urls = ["data1.txt", "data2.txt", "data3.txt"];
        for (let value of urls) {
            console.log(yield loadData(value));
        }
    }

    g = run();
    g.next();

})();