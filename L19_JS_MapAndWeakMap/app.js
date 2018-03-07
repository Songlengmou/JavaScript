(function () {

    let map = new Map();
    map.set("name", "Song");
    map.set("age", 18);

    // map.delete("age");
    // console.log(map);
    // console.log(map.size);
    // console.log(map.has("age"));

    // for (let value of map) {
    //     console.log(value);
    // }

    //------------------------------------------------------

    // for (let key of map.keys()) {
    //     console.log(key);
    // }

    // for (let value of map.values()) {
    //     console.log(value);
    // }

    // for (let key of map.keys()) {
    //     console.log(key, map.get(key));
    // }

    //用数组解构来获取key和value
    for (let [key, value] of map) {
        console.log(key + "=" + value);
    }

})();