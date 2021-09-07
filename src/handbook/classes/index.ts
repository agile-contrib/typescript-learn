
// 【1】类

class MyClass1 {

    // 对象上的属性
    info: string;

    // 构造器
    constructor(info) {
        this.info = info;
    }

    // 对象上的方法
    sayInfo() {
        console.log("信息：" + this.info);
    }
}

let myClass1 = new MyClass1('第一个类');
myClass1.sayInfo(); // 信息：第一个类

// 【2】继承

class MyClass2 extends MyClass1 {
}

let myClass2 = new MyClass2("第二个类");
myClass2.sayInfo(); // 信息：第二个类

// super(); // 如果子类有自己的构造器，记得执行一下父亲的构造器

// 【3】公共，私有与受保护的修饰符

class MyClass3 {
    param1: string; // 默认public
    public param2: string;
    private param3: string;
    protected param4: string;

    constructor(p1, p2, p3, p4) {
        this.param1 = p1;
        this.param2 = p2;
        this.param3 = p3;
        this.param4 = p4;
    }
}

let myClass3 = new MyClass3('1', '2', '3', '4');
console.log(myClass3.param1);
console.log(myClass3.param2);
// console.log(myClass3.param3); // private 不可以
// console.log(myClass3.param4); // protected 不可以

class MyClass4 extends MyClass3 {

    say() {
        console.log(this.param1);
        console.log(this.param2);
        // console.log(this.param3); // private 不可以
        console.log(this.param4);
    }

}

new MyClass4("one", "two", "three", "four").say();

// 【4】readonly修饰符

class MyClass5 {
    readonly info1: string;
    info2: string;
    constructor(info1, info2) {
        this.info1 = info1;
        this.info2 = info2;
    }
}

let myClass5 = new MyClass5('只读属性', '普通属性');
console.log(myClass5.info1, myClass5.info2);
// myClass5.info1='-'; // 不可以
myClass5.info2 = '-';
console.log(myClass5.info1, myClass5.info2);

// 【5】存取器 getters/setters

class MyClass6 {

    private _inner_info_: string;

    get info(): string {
        console.log('获取了');
        return this._inner_info_;
    }
    set info(newInfo: string) {
        console.log('设置了');
        this._inner_info_ = newInfo;
    }

    constructor(info: string) {
        this._inner_info_ = info;
    }
}

let myClass6 = new MyClass6('构造器设置的');
console.log(myClass6.info);
myClass6.info = '外部设置的';
console.log(myClass6.info);

// 【6】静态属性

class MyClass7 {
    static info1: string = '静态属性';
}

console.log(MyClass7.info1);

// 【7】抽象类

abstract class MyClass8 {
    abstract doit1(): void;
    doit2(): void {
        console.log('doit2');
    }
}

// new MyClass8(); // 不可以

class MyClass9 extends MyClass8 {
    doit1(): void {
        console.log('doit1');
    }
}

let myClass9 = new MyClass9();
myClass9.doit1();
myClass9.doit2();
