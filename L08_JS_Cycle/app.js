(function () {

    //----------------------1.①-----------------------------------------
    // // for (var i = 0; i < 100; i++) {
    // //     console.log(i);
    // // }
    //
    // var arr = [1, "hello", 10, "world"];
    // for (var index in arr) {
    //     console.log(arr[index]);
    // }
    //
    // //必须在es6中才能用下方这个
    // for (var value of arr) {
    //     console.log(value);
    // }

    //----------------------1.②-----------------------------------------
    // //会报错 i is not defined(i未定义)     原因是：var和let声明变量的作用域是不一样的
    // for (let i = 0; i < 100; i++) {
    //
    // }
    //
    // console.log(i);

    //----------------------2.-----------------------------------------
    //     let index=0;
    //      while (index<100){
    //          console.log(index);
    //          index++;
    //      }

    //----------------------3.-----------------------------------------
    // let index = 0;
    // do {
    //     console.log(index);
    //     index++;
    // } while (index < 100);

    // do {
    //     console.log("Hello World");
    // } while (false);

    //----------------------4.-----------------------------------------
    // for (let i = 0; i < 100; i++) {
    //     if (i === 50) {
    //         // break;
    //         continue;
    //     }
    //     console.log(i);
    // }

    //----------------------5.-----------------------------------------
    // var a = '10';
    // var b = 10;
    // console.log(a === b);      //  ===表示除了值的比对还要比对类型是否相同

    //----------------------6.-----------------------------------------
    // function print0To100() {
    //     for (let i = 0; i < 100; i++) {
    //         if (i === 50) {
    //             return;
    //         }
    //         console.log(i);
    //     }
    // }
    //
    // print0To100();
    //----------------------7.循环标签   OUTER_LOOP-----------------------------------------
    OUTER_LOOP:
        for (let i = 0; i < 100; i++) {
            let line = "第" + i + "行";
            for (let j = 0; j < 10; j++) {
                line += j + ",";

                if (i + j === 50) {
                    break OUTER_LOOP;
                }
            }
            console.log(line);
        }
})();