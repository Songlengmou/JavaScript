// console.log("Hello World");

//1.
// window.onload = function (ev) {
//     $("#container").html("Hello World");
// }

//2.
// $(document).ready(function () {
//     $("#container").html("Hello World");
// })

//3. 这个方法要求要在HTML文件中的body标签里 添加一个onload="bodyLoaded()"监听  (eg:<body onload="bodyLoaded()">)
// function bodyLoaded() {
//     $("#container").html("Hello World");
// }

//4.要求 HTML文件的 app.js要放到body标签的最后一行
$("#container").html("Hello World");