// !!!!!!!!!!!!!!!!!!!!!!!!Synchronous Js!!!!!!!!!!!!!!!!
// agar mera code line by line excute hota hai to use synchronous bolte hai
// console.log("This is java script class 4");



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// keywords-> predife reserved word is known as keyword
//ex-> let const var function for while do if so on!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// identfiers-> name of the variable/function/class is known as identifiers
// let x=10 here x is identifiers

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// token-> smallest unit of the program is known as token.
// ex-> console.log("hey")
//token syntexd
// console.
//     log
//     (`
//     hello`
// );


// variables-> variables is a container which is used to store values.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// way of creating variable->

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*let-> it is  used for creating block scope variable.
let variable ko banate time value de bhi sakte or nhi bhi de sakte hai
agar value nhi deta hu to us case me variable ke andar undefined
store ho jata hai. let se banaye variable ko dubara same name se
nhi banaya ja sakta hai same block ke andar ya same
function ke andar.*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const->
/*it is  used for creating block scope variable.
const variable ko banate time value ko dena most imp hai
agar value nhi deta hai to us case me error aa jati hai
const se banye gaye variable ko update nhi keaya ja sakta hai

const se banaye variable ko dubara same scope me
nhi banaya ja sakta hai" same block ke andar ya same
function ke andar".*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var
/*it is  used for creating function scope variable.
var variable ko banate time value de bhi sakte or nhi bhi de sakte hai
agar value nhi deta hu to us case me variable ke andar undefined
store ho jata hai. var se banaye variable ko dubara same scope ke andar
create keaya ja sakta hai but hame nhi karna chaheaye.
*/


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Rules of creating variables/functions/classes

/*
1. varaible ka name hamesa alphabet, underscore and doller se hee start hoga.
2. varible ke name ke beech me space nhi hona chaheaye.
3. variable ka name kabhi bhi js ke keyword ke name par nhi hona chaheaye.
4. variable ka name meaning ful hona chaheaye.
5. functio ka name hamesa camel case me hona chaheaya and class ka name pascal case me
*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// syntex of creating variable
// let x;// ye bhi kar sakte hai
// let x1 = 10;// ye bhi kar sakte hai
// x1 = 5875;// ye bhi kar sakte hai
// var y = 20;// ye bhi kar sakte hai
// var y;// ye bhi kar sakte hai
// y = 8907;// ye bhi kar sakte hai

// const z = 10;//app ye hee kar sakte hai
// z = 100;
// //  const z1;// error dega
// let x2=10;
// let x2=20;same name variable cant exist in the same scope
// const y1=3748;
// const y1=24734; same name variable cant exist in the same scope
// var x=1089;
// var x=4767


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//scoping -> life time of a vriable is known as scoping.
/*block scope-> jo bhi variable let const ka use karke block ke andar bante hai
unko bahar access nhi keaya ja sakta hai bcs let and const varible ka scope
 block hota hai
 */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!Block Scope!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ex->
// {
//     let a = 10;
//     const b = 100;
//     console.log(a, b)
// }
// console.log(a,b)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// local scope/function scope -> var se banaye gaye varible ka scope function scope hota hai
//function -> function is a set of lines which is used to perform a
// specific task.addEventListener('type', listener, options)

// function kee syntex
// function sayHey() {
// console.log("hey")
// }
// function ka o/p dekhne ke leaye function ko call karna padta hai
//sayHey();// parenthesis lagana most imp hai.

//  example of function scope
// function sayHey() {
//    var x=10;
// x ko aap only function ke andar hee use kar payenge
// }
// console.log(x);// yha par error aa jayegi


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// global scope-> es scope me banaye gaye variable ko aap khi par bhi use kar sakte hai
// jahe function ke andar ya block ke andar but yad rhe jis block ke andfar
// agar global variable ke jaise name hoga to us block ke andar us varible kee priority jyada hogi
// let x = 10;
// const y = 20;
// var z = 674;

// {
//     console.log(x, y, z)
// }

// function sayHey() {
//     console.log(x, y, z)

// }

// sayHey()
// console.log(x, y, z)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->1
/*agar kisi variable ko var kee help se kisi block ke andar banaya jata hai
to us varible ko block ke bahar bhi access kar sakte hai.*/

// {
//     let h=87;
//     var k=871223;
// }
// console.log(k)
/* you can access variable outside scope but that varible must be
 created via var*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->2
/*
agar aapne same name ke variable multiple scope me banaye hai
to hamesa us scope ke andar un variable kee priority alag scope 
me banaye gaye variable jyada hoti hai
*/

// let x=10
// console.log(x)//10
// {
//     let x=20;
//     var z=90;
//     console.log(x)//20
// }
// console.log(z)// 90
// function Demo(){
//     console.log(x);//10
//     var z=197;
//     console.log(z)//197
// }
// Demo();
// console.log(z)//90


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3

//(3.1) global variable ko khi se bhi change keya ja sakta hai 
// var x = 90;
// console.log(x)
// {
//     x = 8724;
//     console.log(x)
// }

// function changeValue() {
//     x = 485466546;
// }
//  changeValue()
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3.2

//(3.2) global variable  agar me bina kisi let const ya var ke banata hu tab
// x = 19;
// {
//     x = 8724;
// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3.3

//(3.3) Harkate 
// x = 19;
// {
//    var x = 8724;
   
// }
// console.log(x);

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// // 
// //(3.4) Harkate 
// var x = 19;
// {
//     x = 8724;
   
// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// lets see on the dev tools about view the scope

// var x=90;
// console.log(x)
// {
//     debugger;
//     let yt=908;
//     console.log(yt)
//     const x1=3785;
//     console.log(x1)
// }

// function sayHehfdf()
// {
//     debugger;
//     var x=90;
// }
// sayHehfdf()

// debugger
// let x=10;
// console.log(x)
// console.log(3+4);
// console.log(5-3);
// console.log(8/4);
// console.log(64%5);

// console.log(5<3);
// console.log(7>5);
// console.log(5<=3);
// console.log(6>=4);
// console.log(4=="4");
// console.log("7"===7);
// console.log(5!=2);
// let x =20 ;
// let x= 30;
// console.log(10!=="10");

// function addNumber(a,b){
//     c=a+b;
//  return(c);    
// }
// let ans= addNumber(10,20);
// console.log(addNumber(10,20));
// console.log("arrow function");
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function!!!!!!!!!!!!!!!!!!!!!!! 

//  arrow function->
// its a concise or shorter syntex to perform a task.
// arrow function do not support hoisting.

// Ex->/
// normal function
// function addTowNo(x,y){
//     console.log(x+y);
// }
// addTowNo(3,6)
let n = 5; // number of rows

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function without return !!!!!!!!!
// a)arrow function 
// let add=(x,y)=>{
//     console.log(x+y);
// }
// add(40,90)
// b)arrow function 2nd syntex
// let arr=(x,y)=>console.log(x+y);
// arr(4,6);



// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with return !!!!!!!!!
// simple function with return 
// function sumOfTwoNo(x,y){
//     return x+y;
// }
// let ans=sumOfTwoNo(8,9)// 1st way jab aap function ke op ko function ke bahar use karte hai
// console.log(sumOfTwoNo(8,8));// 2nd way jab aap function ke op ko function ke bahar print karte hai


// arrow function 
// let sumOfThree=(x,y,z)=>x+y+z;

// let ans1=sumOfThree(1,2,3);
// console.log(ans1);
// console.log(sumOfThree(1,2,3));



// let sumOfFour=(a,b,c,d)=>{
//     return (a+b+c+d);
// }


// let ans2=sumOfFour(1,2,3,4);
// console.log(ans2);
// console.log(sumOfFour(1,2,3,4));



// / !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with no return but store in
//  variable and call inside console.log() !!!!!!!!!/

//  let multiply=(s,t)=>console.log(s*t);

//  let ans=multiply(5,6);
//  console.log(ans);
//  console.log(multiply(5,6));



/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with multiple liens/
// let complexCalculation=(x,y)=>{
//     console.log(x+y);
//     console.log(x-y);
//     console.log(x*y);
//     return x**y;
// }



// // let output=complexCalculation(10,2);
// // console.log(output);

// console.log(complexCalculation(10,2));

*/
// let complexCalculation=(x,y)=>{
//     console.log(x+y);
//     console.log(x-y);
//     console.log(x*y);
//     return x**y;
// }



// let output=complexCalculation(10,2);
// console.log(output);
// console.log(complexCalculation(10,2))
// console.log(arrFun);
// var arrFun = (x,y)=>x+y;
// console.log(arrFun);
