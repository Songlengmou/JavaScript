(function () {

    //①
    var obj = {};
    obj.name = 'Song';
    obj.age = 18;
    console.log(obj);

    //②
    var obj1 = {name: "Song", age: 18};
    console.log(obj1);

    //③
    var obj2 = {name: "Song", age: 18};
    delete  obj2.name;
    console.log(obj2);

    //④是否拥有某个成员
    var obj3 = {name: "Song", age: 18};
    // console.log(obj3.hasOwnProperty("name"));
    // console.log(obj3.hasOwnProperty("age"));
    console.log(obj3.hasOwnProperty("adress"));

    //⑤
    var obj4 = {name: "Song", age: 18};

    // obj4.name = undefined;

    // if (obj4.hasOwnProperty("name")) {
    //     console.log("该对象拥有name对象");
    // } else {
    //     console.log("该对象没有name对象");
    // }

    // if (obj4.name) {
    //     console.log("该对象拥有name对象");
    // } else {
    //     console.log("该对象没有name对象");
    // }

    obj4["name"] = "SongSong";
    console.log(obj4["name"]);

})();