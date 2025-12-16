// import {x} from "./main.js"
//  console.log(x);

console.log('ram');
setTimeout ( ()=>{
    console.log('hey ram');
});
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed ✅");
  } else {
    reject("Task failed ❌");
  }
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

console.log('end');