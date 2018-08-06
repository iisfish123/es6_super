class A{
    constructor (){
        this.x = 1;
        console.info('被super调用了');
    }
    print(){
        console.info(this.x);
    }
}

class B extends A{
    constructor (){
        super();//ES6 要求子类的构造函数必须执行一次super函数。   而super作为函数时候，就是调用父类的构造函数，但是super内部的this指的是B，在这里相当于A.prototype.constructor.call(this)
        this.x = 2;
        super.x = 3;          //    当对super进行属性赋值的时候，本来应该是A.prototype.x进行赋值的，但是es6修正了这个指向，把super.x = 3变成是this.x = 3（注意是赋值的时候）
        console.info(super.x);//    undefine;因为这里不是赋值操作，所以，打印的是父类A.prototype.x，所以这里是打印了undefine
        console.info(this.x)  //3   super作为对象时，代表是父类的构造函数，但是内部的this指向是子类B
    }
    m(){
        super.print();//    在这里super调用普通方法时候，指向父类的原型A.prototype即调用A.prototype.print。但是内部this指向为B，所以最终相当于变成了A.prototype.print.class(this)
    }

}
var b = new B();
b.m();                //3