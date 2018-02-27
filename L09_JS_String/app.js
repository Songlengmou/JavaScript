/*
*   字符串
*      声明字符串  删除空白  大小写转换   字符串拼接  检索字符串  替换字符串  字符串截取  字符串分割  判断前缀与后缀
* */
(function () {
    let str = " Hello World "

    // console.log(str); //声明字符串
    // console.log(str.trim());// 删除空白
    // console.log(str.toLocaleLowerCase());  // 小写
    // console.log(str.toLocaleUpperCase());   // 大写

    // 字符串拼接
    // let num = 100;
    // str += num;
    // console.log(str);//①
    // console.log(`Hello World ${num},${1000},${"Item"}`);//②    这个仅在ES6中可以使用这个方法  同时``不是单引号，是键盘中Tab上方数字1左方的键

    // 检索字符串
    // console.log(str.indexOf("llo"));//从前往后
    // console.log(str.lastIndexOf("W"));//从后往前
    // console.log(str.includes("ll"));//返回的是boolean类型 可判断字符串中是否包括这个字母

    //替换字符串
    // str = str.replace("o", "a"); //①  只替換一個
    // str = str.replace(/o/g, "a"); //②  替换整体字符串中所有的o     / /g 指全局检索
    // console.log(str);

    // 字符串截取
    // // str=str.substr(3,4); //①substr支持从右往左  str=str.substr(-2);
    // // str=str.substring(3,7); //②substring不支持从右往左
    // str = str.slice(-7, -1);  //③  slice支持从右往左  str=str.slice(-5);
    // console.log(str);

    //字符串分割
    // // let strs = str.split(" ");//分割空格
    // let strs = str.split("");//分割一個一個字母   空字符即可
    // console.log(strs);

    //判断前缀与后缀   主要用来 判断文件扩展名       startsWith与endsWith只在ES6中
    let fileName = "song.mp3";
    console.log(fileName.endsWith(".mp3"));
    let fileNames = "song.MP4";
    console.log(fileNames.toLocaleLowerCase().endsWith(".mp4"));  //如果后缀名是大写，只要区分大小写即可

    let url = "http://baidu.com";    //判断http协议
    console.log(url.toLocaleLowerCase().startsWith("http://"));

})();