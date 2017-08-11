//================================//
//创建一个名为“car”的对象，表示汽车，根据生活经验为这个对象添加 尽可能完善的 属性和方法。

var car = new Object();

car.name = "C.Button";
car.drive = function(){
    alert("driving");
};

car.drive();

//================================//
var my_var1="shiyanlou";

var aa = my_var1.length;

var my_var1UP = my_var1.toUpperCase;

//alert(my_var1);
//alert(aa);
//alert(my_var1.toUpperCase);


//var student = new Object();  // 创建对象“student”
//
//student.name = "Tom";   // 对象属性 名字
//student.age  = "19";    // 对象属性 年龄
//
//student.study =function() {   // 对象方法 学习
//    alert("studying");
//};
//
//student.eat =function() {     // 对象方法 吃
//    alert("eating");
//};

//student.study();
//student.eat();

//不能用很奇怪啊
//var student3 = {
//    name:"Tom";
//     age:"19";
//};
//
//var student4 = {};
//student4.name = "Tom";
//
//alert(student3.name);
//alert(student4.name);

//function student(name,age) {
//
//    this.name = name;
//    this.age = age;
//
//    this.study = function() {
//        alert("studying");
//    };
//
//    this.eat = function() {
//        alert("eating");
//    }
//};
//
//student("dddd","1919");
//
//alert(student.name);
//alert(student.age);

//var x=student.name;
//document.write(x);


//with(student){
//    var x = name;
//    var y = age;
//    study();
//    eat();
//    alert(x);
//    alert(y);
//}

//var m_math1 = new Math;
//m_math1 = 1;
//alert(m_math1);