
//change origin Array

// let arr = [10, 40 ,30 ,20,49]
// console.log(arr);

// arr.splice(2,1,23)
// console.log(arr);


// arr.splice(2,2,34)
// console.log(arr);

// arr.splice(1,1,23,20)
// console.log(arr);


// arr.push(40)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(30)
// console.log(arr);
// arr.shift()
// console.log(arr);


//slice method
//  let arr = [10,40,49,45,45]
// console.log(arr);
// s_arr =arr.slice(1,5)
// console.log(s_arr);
////////////////////////////////////////////////////////////////

//map method->har element per opertion perform karana hota to use karte hai

// let arr = [30,332,434,46,45]
// let newarr=arr.map((i)=>i+5)
// console.log(arr); //do not modify orignal array
// console.log(newarr);

// //fillter method
// //not change orignal array


// let s_arr=arr.filter((i) => i%3==0)
// console.log(s_arr);

// //find method    //find  first maching element   
// let fin= arr.find((i) => i%3==0)
// console.log(fin);

//some method // find first maching
// let arr = [30,332,434,46,45]

//  let fin_some= arr.some((i) => i%3==0)
//  console.log(fin_some)


// indexof method  find index of given values

// let arr = [30,332,434,46,45]
// let indFind=arr.indexOf(45)
// console.log(indFind);

//every method = check every element all condition true when return true 


// let arr = [30,332,434,46,45]
// let ev =arr.every((i) => i>330)
// console.log(ev);

// join method // all element ko single string mai convert karte hai
// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.join());


// let fruits = [3, "Banana", "Mango"];
// console.log(fruits.join('-'));


// Flat method 

// let arr = [1, 2, [3, 4]];

// console.log(arr.flat());

// let arr = [1, [2, [3, [4]]]];

// console.log(arr.flat(2));

// let arr = [1,2,3,[4,[5,[6,[7,8],9],10],11,12],13]

// console.log(arr.flat(2));

// reduce method
//Reduce() method array ke saare values ko combine karke ek single output deta hai, jaise sum, 
// product ya max value.


// let numbers = [1, 2, 3, 4];
// let result = numbers.reduce((total, value) => total * value);
// console.log(result);

// findindex => phela element jo condition ko true kare uska index deta hai

// let numbers = [5, 8, 12, 20];

// let index = numbers.findIndex(num => num > 10);

// console.log(index);

// console.log(this);
// const obj ={
//     id:101, 
//   name:'xyz',
//   data:function(){
//     console.log(this.id);
//     console.log(this);
//   }
// }
// obj.data()


// a=()=>{
//     console.log(this);
// }

// a();

// function getvalue(){
//     console.log(this);
// }
// getvalue()

//  let ob={
//     bid:101,
//     bName:'exide',
//     companyInfo:{
//         'name': 'exide pvt ltd',
//         revenue:1000000
//     }
//  }
// let ob1={...ob};


// ob.companyInfo.name=233;
// ob1.bid=200;
// console.log(ob);
// console.log(ob1);




//  let ob={
//     bid:101,
//     bName:'exide',
//     companyInfo:{
//         'name': 'exide pvt ltd',
//         revenue:1000000
//     }
//  }
//  let ob1= ob;
//  ob.companyInfo.name=4455;
// ob1.bid=3446;
//  console.log(ob);
// console.log(ob1);


