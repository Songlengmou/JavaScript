/*

建议看 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

    数组
声明及填充数组
添加及删除元素、连接数组
元素反转
迭代器
遍历
元素测试
元素过滤
元素检索
Array.prototype.map(对元素批量执行操作)
累加器
元素连接*/

(function () {
    // //1.声明及填充数组
    // // //① 显示的指明
    // // // var arr = [];
    // // // arr.length = 100;
    // // // arr.fill(10);
    // // //②
    // var arr = ["hello", 10];
    // // console.log(arr);
    //
    // //2.①添加及删除元素
    // arr.push("world");//添加
    // // // arr.pop();// 删除 数组中的最后一项  这里即world
    // // arr.shift();//删除 数组中的第一项  这里即hello
    //
    // //(第一个参数：整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
    // // 第二个参数：要删除的项目数量。如果设置为 0，则不会删除项目。
    // // 第三个参数：向数组添加的新项目。)
    // // arr.splice(1, 1, "song");
    // // arr.splice(0, arr.length);//清空数组
    // // console.log(arr);
    //
    // //②连接数组
    // // var arrs = [1, 2, 3];
    // // // var newArr = arr.concat("你好", 20);//①
    // // var newArr = arr.concat(arrs);//②
    // // console.log(newArr);
    //
    // //3.元素反转
    // // ①
    // // var arrs = [1, 2, 3];
    // // var newArr = arr.concat(arrs);
    // // newArr.reverse();
    // // console.log(newArr);
    // // // ②
    // // var words = "Hello World";
    // // // console.log(words.split("").reverse());//① 单独的分开
    // // words = words.split("").reverse().join("");  //②分开后并连接起来
    // // console.log(words);
    //
    // //4.迭代器(模式) 与 遍历      在ES6中才有
    // let en = arr.entries();
    // // let item = en.next();
    // // console.log(item);
    //
    // //①
    // // let item;
    // // while (!(item = en.next()).done) {
    // //     // console.log(item);
    // //     console.log(`index:${item.value[0]},value:${item.value[1]}`);
    // // }
    // //②
    // // for (let value of  en) {
    // //     console.log(value);
    // // }
    // // //只有索引   arr.keys()
    // // for (let key of  arr.keys()) {
    // //     // console.log(key);  //①
    // //     console.log(`key:${key},value:${arr[key]}`); //② 有key就能取到值
    // // }
    //
    // //------------------------------
    // // for (let i = 0; i < arr.length; i++) {
    // //     console.log(arr[i]);
    // // }
    // // //迭代器模式
    // // for (let value of arr) {
    // //     console.log(value);
    // // }
    //
    // arr.forEach(function (value,index,arr) {
    //     console.log(value,index,arr);
    // })

    //5.元素测试    在ES6中才有
    // let arr=[11,12,13,20,8];
    //  // console.log(arr.every(value => value>10));
    //  console.log(arr.some(value => value>10));

    //6.元素过滤
    // let arr = [11, 12, 13, 20, 8, 6, 2, 30];
    // console.log(arr.filter(value => value > 10));

    //7.元素检索
    // let arr = [11, 12, 13, 20, 8, 6, 20, 30];
    // // console.log(arr.indexOf(20));
    // // console.log(arr.lastIndexOf(20));
    //
    // // console.log(arr.findIndex(value => value>17));
    // console.log(arr.find(value => value>17));

    // //8.Array.prototype.map(对元素批量执行操作)
    // let arr = [11, 12, 13, 20, 8];
    // // console.log(arr.map(value => value * 2));
    //
    // //9.累加器
    // console.log(arr.reduce((a, b) => a + b));

    //10.排序   不是稳定的
    //①
    // let arr=[11,5,20,15,"hello","song",'apple'];
    // arr.sort();
    // console.log(arr);
    //②
    let arr = [11, 12, 13, 20, 8, 6, 20, 30];
    arr.sort((a, b) => a - b);//从小到大
    // arr.sort((a, b) => b - a);//从大到小
    console.log(arr);
})();