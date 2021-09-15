
// 【1】完整的函数类型

/**
 * let 变量：函数的具体类型 = function(变量1：变量1的类型,...):函数返回类型{
 *     // todo
 * }
 */

let myfun1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

console.log(myfun1(1, 2));

// 【2】可选参数和默认参数

function myfun2(firstname: string, lastname: string) {
    console.log("[2]" + firstname + " " + lastname);
}

myfun2('a', 'b');
// myfun2('a'); // 不可以（少了）
// myfun2('a','b','c'); // 不可以（多了）

function myfun3(firstname: string, lastname?: string) {
    console.log("[3]" + firstname + " " + lastname);
}

myfun3('a', 'b');
myfun3('a'); // 此时lastname是可选的
// myfun3('a','b','c');// 不可以（多了）

function myfun4(firstname: string, lastname: string = '默认值') {
    console.log("[4]" + firstname + " " + lastname);
}

myfun4('1'); // lastname有默认值

// 【3】剩余参数

function myfun5(p1: string, p2: string, ...p3: string[]) {
    console.log(p1, p2, ...p3);
}

myfun5('1', '2', '3', '4', '5', '6', '7');
