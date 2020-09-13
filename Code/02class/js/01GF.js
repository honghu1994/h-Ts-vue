"use strict";
// 女朋友类
//   成员：姓名，年龄，性别
//   方法: 撒娇，剁手
// 一.定义类  ----------------------------------------------
var GF = /** @class */ (function () {
    //2.构造函数(做初始化) ---------------------------------
    function GF(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    //3.成员方法 -------------------------------------------
    //3.1 撒娇 -- 此方法 只允许 在 类中 访问，不允许 在 类外面访问
    //    *访问修饰符*： public/private/protected
    //    用来修饰 类的成员变量 和 成员方法 -- 默认是 public
    GF.prototype.saJiao = function () {
        console.log('讨厌，死鬼~~~~人家想吃方便面了~~');
    };
    //3.2 多少
    GF.prototype.buy = function () {
        this.saJiao(); // 女朋友买东西前，一般都会先 撒撒娇嘛~~~
        console.log('讨厌，又到了双11，该剁手了~~~'); // 然后再买东西
    };
    return GF;
}());
// 二.测试 调用  ----------------------------------------------
// 通过 new 关键字 创建 GF类的 对象，并通过 构造函数实参 传递数据
var gf1 = new GF('小白白', 18, false);
// gf1.saJiao(); // 报错：因为 private 的 成员，只能在 类的 内部访问
console.log(gf1.name);
gf1.buy();
var gf2 = new GF('小黑黑', 21, false);
