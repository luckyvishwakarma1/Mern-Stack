// Closure //memmory leak ki problem ati hai 

//   function get(){
//     let count=0;
//     return function (){
//     return count++;
// }
// }
// let ab = get();
// console.log(ab());
// console.log(ab());
// console.log(ab());
// console.log(ab());
// console.log('----------------------------------');
// let ob1=get()//
// console.log(ob1());
// console.log(ob1());
// console.log(ob1());
// console.log(ab());

// console.log(ob1());

// const xhrobj = new XMLHttpRequest();
// xhrobj.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhrobj.send();
// xhrobj.onload = function() {
//     if (this.status === 200) {
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//     } else {
//         console.log('Some error occurred');
//     }
// }



// function apiCalling(method,url){
//   const ob =new XMLHttpRequest();
//   ob.responseType='json';
//   ob.open(method,url);
//   ob.send();
//   // ob.onload
//   console.log(ob.response);
// }
// apiCalling('GET', 'https://jsonplaceholder.typicode.com/posts');

///// callback hell
// function NarakKaDwar(method, url, printApiData) {
//   const obj = new XMLHttpRequest();
//   obj.responseType = "json";
//   obj.open(method, url);
//   obj.send();
//   obj.addEventListener("load", () => {
//     printApiData(obj.response)
//   })
// }

// NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//   console.log("Ye meri all posts hai", data);


//   NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//     (data) => {
//       console.log("Ye meri Single Post hai", data)
//       NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//         (data) => {
//           console.log("Ye meri Single Post ke andar je sare comments hai", data)
//           NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//             (data) => {
//               console.log("Ye meri Single Post ke andar ek comments hai", data)
//               NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                 console.log("Ye meri all posts hai", data);


//                 NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                   (data) => {
//                     console.log("Ye meri Single Post hai", data)
//                     NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                       (data) => {
//                         console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                         NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                           (data) => {
//                             console.log("Ye meri Single Post ke andar ek comments hai", data)
//                             NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//                               console.log("Ye meri all posts hai", data);


//                               NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
//                                 (data) => {
//                                   console.log("Ye meri Single Post hai", data)
//                                   NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
//                                     (data) => {
//                                       console.log("Ye meri Single Post ke andar je sare comments hai", data)
//                                       NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
//                                         (data) => {
//                                           console.log("Ye meri Single Post ke andar ek comments hai", data)

//                                           NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[11].userId}`,
//                                             (data) => {
//                                               console.log("Ye meri Single Post ke andar ek comments hai", data)

//                                             });

//                                         });
//                                     });
//                                 });

//                             });
//                           });
//                       });
//                   });

//               });
//             });
//         });
//     });

// });


//promise 

