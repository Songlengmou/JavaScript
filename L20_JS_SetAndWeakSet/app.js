(function () {

    let s = new Set();
    s.add("Hello");
    s.add(1);
    // console.log(s);

    // s.forEach(item => console.log(item));

    // for (let v of s) {
    //     console.log(v);
    // }

    // for (let v of s.entries()) {
    //     console.log(v);
    // }

    for (let [key, value] of s.entries()) {
        console.log(key, value);
    }
})();