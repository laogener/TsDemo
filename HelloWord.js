var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 多行字符串
var content = "asd\nasda\nada";
// 字符串模板
var myName = 'xiaoming';
var getName = function () {
    return 'xiaoming';
};
console.log("Hello " + myName);
console.log("Hello " + getName());
// 自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var mine = 'aaaaa';
var getAge = function () {
    return 18;
};
test(__makeTemplateObject(["hello my name is ", ",I'm ", ""], ["hello my name is ", ",I'm ", ""
    // 参数新特性-参数类型(编辑器爆红时检测到语法不对)
]), mine, getAge());
// 参数新特性-参数类型(编辑器爆红时检测到语法不对)
var myname = 'zhang';
myname = 13;
var aaa = 'haha';
aaa = 13;
var age = 13;
var man = true;
function test2() {
    return '';
}
function test3(name) {
    return '';
}
test3(12);
var Preson = /** @class */ (function () {
    function Preson() {
    }
    return Preson;
}());
var zhangsan = new Preson();
zhangsan.name = 'asda';
zhangsan.age = 12;
// 参数新特性-默认参数
var myname = 'asd';
function test4(a, b, c) {
    if (c === void 0) { c = 'jjj'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test4('aaa', 'bbb', 'ccc');
test4('aaa', 'bbb');
// 参数新特性-可选参数
function test5(a, b, c) {
    if (c === void 0) { c = 'jjj'; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test5('aaa');
// 函数新特性 - Rest and Spread操作符(用来声明任意数量的方法的参数)
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
func1(1, 2, 3);
func1(5, 6, 7, 8, 9);
function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args2 = [1, 2];
func2.apply(void 0, args2);
var args3 = [1, 2, 3, 4, 5];
func2.apply(void 0, args3);
// 函数新特性 - generator函数(控制函数的执行过程，手工暂停和恢复代码执行)
function doSomething() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('start');
                return [4 /*yield*/];
            case 1:
                _a.sent();
                console.log('finish');
                return [2 /*return*/];
        }
    });
}
var func3 = doSomething();
func3.next();
func3.next();
// 函数新特性 - destructuring析构表达式(通过表达式将对象或数组拆解成任意数量的变量)
function getStock() {
    return {
        code: 'IBM',
        price: {
            price1: 200,
            price2: 400
        },
        aaa: 'xixi',
        bbb: 'haha'
    };
}
var _a = getStock(), codex = _a.code, price2 = _a.price.price2;
console.log(codex);
console.log(price2);
var array1 = [1, 2, 3, 4, 5, 6, 7];
// var [number1,,number2] = array1;
var number1 = array1[0], number2 = array1[1], others = array1.slice(2);
console.log(number1);
console.log(number2);
console.log(others);
function doSmothing(_a) {
    var number1 = _a[0], number2 = _a[1], others = _a.slice(2);
    console.log(number1);
    console.log(number2);
    console.log(others);
}
doSmothing(array1);
// 箭头表达式
var sum = function (arg1, arg2) {
    return arg1 + arg2;
};
var sum2 = function (arg1) {
    console.log(arg1);
};
// forEach(),for in 和 for of
var arr = [1, 2, 3, 4];
arr.desc = 'four number';
arr.forEach(function (value) { return console.log(value); });
for (var k in arr) {
    console.log(k);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var v = arr_1[_i];
    console.log(v);
}
// 类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log('haha');
    }
    // public ,private ,protected
    // public name;
    Person.prototype.eat = function () {
        // console.log(this.name);
        console.log("I'm eating");
    };
    return Person;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(name, code) {
        var _this = _super.call(this, name) || this;
        console.log('xixi');
        _this.code = code;
        return _this;
    }
    Employe.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Employe.prototype.doWork = function () {
        console.log("I'm working");
    };
    return Employe;
}(Person));
var e1 = new Employe('name', '1');
var p1 = new Person();
p1.name = 'banana';
p1.eat();
var p2 = new Person();
p2.name = 'tomato';
p2.eat();
