let heroName: string = '安其拉 是英雄，还是梦幻女友~~';
heroName = '讨厌，死鬼~~~';
// heroName = 520;
console.log(heroName);


//1.数组
// let arrHero: string[] = ['讨厌', '大爷', '大娘', 123];
let arrHero: string[] = ['讨厌', '大爷', '大娘'];

let arrHero2: Array<string> = ['P城我来了', 'Y城等着我~~！'];


//2.元组-本质上 就是一个 规定了 元素 类型 和 数量的 "数组"
let tup1: [string, number, boolean] = ['大屁股老师', 32, false];

console.log(tup1[0]);
console.log(tup1[1]);
console.log(tup1[2]);

// 对象 - 超级容器(变量，数组，方法......)
let obj: Object = {
    name: 'james',
    age: 18,
    sayHi: function () {

    }
};

//3.枚举 - 一组 枚举项 和 对应的 枚举值
enum Gender {
    Boy = 1,
    Girl = 2,
    Unknow = 3
}


//3.1 使用枚举 枚举名.枚举项  --> 枚举值(整数数值)
console.log(Gender.Boy); // 1
console.log(Gender.Girl); // 2
console.log(Gender.Unknow); // 3

//3.2 枚举 判断
let bigAssTeacher = Gender.Girl; // 2

console.log(bigAssTeacher == Gender.Girl); // 2 == 2
// console.log( bigAssTeacher == Gender.Boy );


// prompt();// 确认-string ，取消 - null

function test() {
    return '数据';
}

let res: any = test();


//4.类型推断-编译器 会根据变量的 值的类型 推断变量的类型！
let zouAge = 18;
//  zouAge = '讨厌';// 如果 设置 字符串 给 已经 推断为number类型的变量时，就会报错！

// 5.联合类型 - 可以让变量 从 多种种可能的类型中 选择一个
// let loverName: string | null = prompt('请输入你女朋友的名字：');
// console.log(loverName);


// 6.函数
function showLove(toName: string, age: number): string {
    return `${toName} ，I love u ~~~~`;
}

let msg1: string = showLove('死鬼', 21);

// 6.1 可选参数 - 默认值为 undefined
function showLove1(toName?: string): string {
    return `${toName} ，I love u ~~~~`;
}

let res2 = showLove1();
console.log(res2);

res2 = showLove1('讨厌，死鬼');
console.log(res2);

// 6.2 默认值
function shoot(targetName: string = '大屁股老师', num: number = 10): void {
    console.log(`报告，已经瞄准 ${targetName},准备开 ${num} 枪！！！`);
}

shoot();
shoot('长得最黑的老师'); // shoot('长得最黑的老师' , 10);
shoot(undefined, 20);  // shoot('大屁股老师' , 10);


// 6.3 剩余参数 - 本质就是一个数组，在函数内部需要通过 数组语法 访问！！！
function showLove7(toName: string, toName2: string, ...names: string[]): void {
    console.log(`${toName} i love u ~~`);
    console.log(`${toName2} i love u ~~`);

    // 遍历 剩余参数数组
    // for...of语法：遍历 数组，并 依次将 数组中的 元素取出 存入 变量 girlName 中
    for (let girlName of names) {
        console.log(`${girlName} i love u ~~`);
    }
}

showLove7('小白', '小黑');
showLove7('小白', '小黑', 'ruikey', 'taidi');