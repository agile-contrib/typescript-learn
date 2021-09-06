
// 【1】布尔值

let isDone: boolean = false;

// 【2】数字

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 【3】字符串

let yourName: string = "bob";
yourName = "smith";

// 【4】数组

let list: Array<number> = [1, 2, 3]; // 使用泛型，数组里面只能存放数字

// 【5】元组 Tuple

/**
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */

let x: [string, number] = ['hello', 10];

// 【6】枚举

enum MyType { type1, type2, type3, type4 };// 定义一个枚举类型
let appleType: MyType = MyType.type1;// 使用

// 【7】Any

let notSure: any = 7; // 定义的变量可以赋值任意类型
notSure = "一个字符串";
notSure = false;

// 【8】Void

let unusable1: void = undefined;
let unusable2: void = null;
// let unusable3: void = 10; // 只能赋值undefined和null

// 【9】Null 和 Undefined

let u: undefined = undefined;
let n: null = null;

// 默认情况下null和undefined是所有类型的子类型,
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
let un: number = null;

// 【10】Never

/**
 * 表示的是那些永不存在的值的类型
 */

// 比如这个
// 存在无法达到的终点
function error(message: string): never {

    throw new Error(message); // 可以

    // return 1; // 不可以

}

// 【11】Object

/**
 * object表示非原始类型
 * 也就是除number，string，boolean，symbol，null或undefined之外的类型
 */

// let obj1:object=10; // 不可以
// let obj2:object=Number(10); // 不可以
let obj3: object = {}; // 可以

// 【12】类型断言

/**
 * 使用类型断言有两种方式：
 *       <类型>值
 * // 或者
 *       值 as 类型
 * 需要注意的是，jsx中只支持第二种写法
 */

function func(val: string | number): number {

    // 因为我们定义的val可能是字符串或者数字
    // 如果是数字，val就没有length属性
    // 所以下面的写法的不被允许的
    // if (val.length) {
    //     return val.length;
    // 改造一下
    if ((<string>val).length) { // 类型断言不是类型转换，而是类型选择，可以理解为在编译阶段强行把 val 当作 string类型来访问
        return (<string>val).length;
    } else {
        return val.toString().length;
    }
}
