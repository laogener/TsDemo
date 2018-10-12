// 多行字符串
let content = `asd
asda
ada`;
// 字符串模板
let myName = 'xiaoming';
let getName = function () {
    return 'xiaoming';
}
console.log(`Hello ${myName}`);
console.log(`Hello ${getName()}`);
// 自动拆分字符串
function test(template,name,age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
let mine = 'aaaaa';
let getAge = function () {
    return 18
}
test `hello my name is ${mine},I'm ${getAge()}`
// 参数新特性-参数类型(编辑器爆红时检测到语法不对)
var myname:string = 'zhang';
myname = 13;
var aaa:any = 'haha';
aaa = 13;
var age:number = 13;
var man:boolean = true;
function test2():void {
    return '';
}
function test3(name:string):string {
    return '';
}
test3(12);
class Preson {
    name:string;
    age:number
}
var zhangsan:Preson = new Preson();
zhangsan.name = 'asda';
zhangsan.age = 12;
// 参数新特性-默认参数
var myname:string = 'asd';
function test4(a: string, b: string, c: string='jjj') {
    console.log(a);
    console.log(b);
    console.log(c);
}
test4('aaa','bbb','ccc');
test4('aaa','bbb');
// 参数新特性-可选参数
function test5(a: string, b?: string, c: string='jjj') {
    console.log(a);
    console.log(b);
    console.log(c);
}
test5('aaa');
// 函数新特性 - Rest and Spread操作符(用来声明任意数量的方法的参数)
function func1(...args) {
    args.forEach(function (arg) {
        console.log(arg);
    })
}
func1(1,2,3);
func1(5,6,7,8,9);

function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args2 = [1,2];
func2(...args2);
var args3 = [1,2,3,4,5];
func2(...args3);
// 函数新特性 - generator函数(控制函数的执行过程，手工暂停和恢复代码执行)
function* doSomething() {
    console.log('start');
    yield ;
    console.log('finish')
}
var func3 =  doSomething();
func3.next();
func3.next();
// 函数新特性 - destructuring析构表达式(通过表达式将对象或数组拆解成任意数量的变量)
function getStock() {
    return {
        code:'IBM',
        price:{
            price1:200,
            price2:400
        },
        aaa:'xixi',
        bbb:'haha'
    }
}
var {code:codex,price:{price2}} = getStock();
console.log(codex);
console.log(price2);

var array1 = [1,2,3,4,5,6,7];
// var [number1,,number2] = array1;
var [number1,number2,...others] = array1;
console.log(number1);
console.log(number2);
console.log(others);
function doSmothing([number1, number2, ...others]) {
    console.log(number1);
    console.log(number2);
    console.log(others);
}
doSmothing(array1);
// 箭头表达式
var sum = (arg1,arg2) => {
    return arg1 + arg2;
}
var sum2 = arg1 => {
    console.log(arg1);
}
// forEach(),for in 和 for of
var arr = [1,2,3,4];
arr.desc = 'four number';
arr.forEach(value => console.log(value));
for(var k in arr){
    console.log(k);
}
for(var v of arr){
    console.log(v);
}
// 类
class Person {
    constructor(public name:string){
        console.log('haha')
    }
    // public ,private ,protected
    // public name;
    public eat(){
        // console.log(this.name);
        console.log("I'm eating");
    }
}
class Employe extends Person{
    constructor(name:string,code:string){
        super(name);
        console.log('xixi');
        this.code = code;
    }
    code:string;
    work(){
        super.eat();
        this.doWork();
    }
    doWork(){
        console.log("I'm working");
    }
}
var e1 = new Employe('name','1');

var p1 = new Person();
p1.name = 'banana';
p1.eat();
var p2 = new Person();
p2.name = 'tomato';
p2.eat();
