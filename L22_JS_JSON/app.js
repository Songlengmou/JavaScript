(function () {

    // // var data="XiaoMing";
    // var student = {name: "XiaoMing", age: 18};
    //
    // var studentJSONString = JSON.stringify(student);  //stringify编码
    // console.log(studentJSONString);

    var json = "{\"name\": \"XiaoMing\", \"age\": 18}";
    var obj = JSON.parse(json);   //parse解码
    // console.log(obj);
    console.log(obj.name);
})();