
// 【1】基本使用

/**
 * function identity(arg: any): any {
 *   return arg;
 * }
 */

//  给doit添加了类型变量T
// 和上面使用any类型相比，这里可以保存传入和传出的数据类型一直，没有丢失信息
function doit1<T>(arg: T): T {

    /**
     * 上面你可以理解是，
     * 通过在函数名后面添加<T>来定义了一个新的类型T，
     * 余下的，就可以看成一个普通的类型使用即可。
     */

    return arg;
}

// 1.明确的指定了T是string类型
doit1<string>('1'); // doit<string>(1); 不可以

// 2.类型推论
doit1('1');

// 【2】泛型类型

// 接口上定义泛型
interface doit2<T> {
    (arg: T): T;
}

// 类上定义泛型
class doit3<T> {
    add: (x: T, y: T) => T;
}
