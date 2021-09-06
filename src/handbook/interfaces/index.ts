
// 【1】基础

interface Point {
    x: number;
    y: number;
}

let myPoint: Point = { x: 10, y: 20 }; // 比如 {} 或者 {x:10}都不可以

// 【2】可选属性

interface ThreePoint {
    x: number;
    y: number;
    z?: number;
}

let myThreePoint: ThreePoint = { x: 10, y: 20 }; // 此时，z可选

// 【3】只读属性

interface ReadonlyPoint {
    readonly x: number;
    readonly y: number;
}

let myReadonlyPoint: ReadonlyPoint = { x: 10, y: 20 };
// myReadonlyPoint.x = 5; // 错误，不可以修改

// 【4】额外的属性检查

interface MorePoint {
    x: number;
    y: number;
    [morekey: string]: number; // 如果没有这行，下面的z就不能添加
}

let myMorePoint: MorePoint = { x: 10, y: 10, z: 10 };

// 【5】函数类型

interface MyFun {
    (param1: number, param2: string): boolean;
}

let myFunInstance: MyFun = function (p1: number, p2: string) {
    return true;
}

// 【6】可索引的类型

interface MyArray {
    [index: number]: boolean
}

let myArrayInstance: MyArray = [true, false, false];
let myArrayInstance2: MyArray = {
    1: true,
    // "key": false, // 不是数字，非法
    "-30": true // 如果可以转成数字，也可以
}

// 【7】类类型

interface ClockInterface {
    currentTime: Date; // 属性
    setTime(d: Date); // 方法
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 【8】继承接口

/**
 * 一个接口可以继承多个接口，创建出多个接口的合成接口:
 * interface Square extends Shape, PenStroke {}
 */

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let mySquare: Square = {
    color: "red",
    sideLength: 10
};
