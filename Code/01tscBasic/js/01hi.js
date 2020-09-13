"use strict";
var heroName = '安其拉 是英雄，还是梦幻女友~~';
heroName = '讨厌，死鬼~~~';
// heroName = 520;
console.log(heroName);
//1.数组
// let arrHero: string[] = ['讨厌', '大爷', '大娘', 123];
var arrHero = ['讨厌', '大爷', '大娘'];
var arrHero2 = ['P城我来了', 'Y城等着我~~！'];
//2.元组-本质上 就是一个 规定了 元素 类型 和 数量的 "数组"
var tup1 = ['大屁股老师', 32, false];
console.log(tup1[0]);
console.log(tup1[1]);
console.log(tup1[2]);
// 对象 - 超级容器(变量，数组，方法......)
var obj = {
    name: 'james',
    age: 18,
    sayHi: function () {
    }
};
//3.枚举 - 一组 枚举项 和 对应的 枚举值
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknow"] = 3] = "Unknow";
})(Gender || (Gender = {}));
//3.1 使用枚举 枚举名.枚举项  --> 枚举值(整数数值)
console.log(Gender.Boy); // 1
console.log(Gender.Girl); // 2
console.log(Gender.Unknow); // 3
//3.2 枚举 判断
var bigAssTeacher = Gender.Girl; // 2
console.log(bigAssTeacher == Gender.Girl); // 2 == 2
// console.log( bigAssTeacher == Gender.Boy );
// prompt();// 确认-string ，取消 - null
function test() {
    return '数据';
}
var res = test();
//4.类型推断-编译器 会根据变量的 值的类型 推断变量的类型！
var zouAge = 18;
//  zouAge = '讨厌';// 如果 设置 字符串 给 已经 推断为number类型的变量时，就会报错！
// 5.联合类型 - 可以让变量 从 多种种可能的类型中 选择一个
// let loverName: string | null = prompt('请输入你女朋友的名字：');
// console.log(loverName);
// 6.函数
function showLove(toName, age) {
    return toName + " \uFF0CI love u ~~~~";
}
var msg1 = showLove('死鬼', 21);
// 6.1 可选参数 - 默认值为 undefined
function showLove1(toName) {
    return toName + " \uFF0CI love u ~~~~";
}
var res2 = showLove1();
console.log(res2);
res2 = showLove1('讨厌，死鬼');
console.log(res2);
// 6.2 默认值
function shoot(targetName, num) {
    if (targetName === void 0) { targetName = '大屁股老师'; }
    if (num === void 0) { num = 10; }
    console.log("\u62A5\u544A\uFF0C\u5DF2\u7ECF\u7784\u51C6 " + targetName + ",\u51C6\u5907\u5F00 " + num + " \u67AA\uFF01\uFF01\uFF01");
}
shoot();
shoot('长得最黑的老师'); // shoot('长得最黑的老师' , 10);
shoot(undefined, 20); // shoot('大屁股老师' , 10);
// 6.3 剩余参数 - 本质就是一个数组，在函数内部需要通过 数组语法 访问！！！
function showLove7(toName, toName2) {
    var names = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        names[_i - 2] = arguments[_i];
    }
    console.log(toName + " i love u ~~");
    console.log(toName2 + " i love u ~~");
    // 遍历 剩余参数数组
    // for...of语法：遍历 数组，并 依次将 数组中的 元素取出 存入 变量 girlName 中
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var girlName = names_1[_a];
        console.log(girlName + " i love u ~~");
    }
}
showLove7('小白', '小黑');
showLove7('小白', '小黑', 'ruikey', 'taidi');
