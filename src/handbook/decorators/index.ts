
// 【1】类装饰器

function doit1(target: any) {
    target.prototype.name = '装饰器修改了名称';
}

@doit1
class Class1 {
    name: string;
}

var class1 = new Class1();
console.log(class1.name);

// 【2】装饰器类型

// 装饰器的类型有：类装饰器、访问器装饰器、属性装饰器、方法装饰器、参数装饰器，但是没有函数装饰器(function)

