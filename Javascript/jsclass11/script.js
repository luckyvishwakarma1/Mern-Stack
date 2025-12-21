
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
 /// spread operator


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


// sallow copy

//  let ob={
//     bid:101,
//     bName:'exide',
//     companyInfo:{
//         'name': 'exide pvt ltd',
//         revenue:1000000
//     }
//  }
//  let ob1= ob; //first way
//  let ob1= Object.assign(ob)// second way 
//  ob.companyInfo.name=4455;
// ob1.bid=3446;
//  console.log(ob);
// console.log(ob1);

//deep copy
// let ob={
//     bid:101,
//     bName:'exide',
//     companyInfo:{
//         'name': 'exide pvt ltd',
//         revenue:1000000
//     }
// }
// let ob1 = JSON.parse(JSON.stringify(ob));//first way

//let ob1 = structuredClone(ob);// dusra tarika

// let ob1 = cloneDeep(ob); third way

        
// ob.companyInfo.name=55;
//  ob1.bid=3446;
//   console.log(ob);
// console.log(ob1);

