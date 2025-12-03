// console.log(loops);
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// even odd
// let i=20;
// if(i%2==0){
//     console.log('number is even');
// }
// else{
//     console.log('nuber is odd');
// }

// let i=55
// if(i%5===0 && i%11===0){
//     console.log('divisible by 5 and 11');
// }
// else{
//     console.log('not divisible by 5 and 11');
// }


// let i=10
// if(0<i){
//     console.log('number is positive');
// }else if(0>i){
//     console.log('number is negative');
// }
// else{
//     console.log('number is zero');
// }

// let num = prompt('enter a number')
// num=Number(num);
// if(num%2===0 && num%3===0 && num%5===0){
//     console.log('numbwr is divisible by 2 ,3,5');
// }
// else{
//     console.log('number is not divisible by 2,3 and 5');
// }


// let num = prompt('enter a number')
// num=Number(num);
// for(num; 0<num; num--){
//     console.log(num);
// }

// let num = prompt('enter a number')
// num= Number(num);
// let firstdig=Math.floor(Math)
///////////////////////////////////////////////////////////////////////////////

// let num = 12345;
// let count = 0;

// if(num === 0){
//   count = 1;
// } else {
//   num = Math.abs(num); 
//   while(num > 0){
//     num = Math.floor(num / 10);
//     count++;
//   }
// }
// console.log(count);

// let num = 12345;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;          
//   reverse = reverse * 10 + digit; 
//   num = Math.floor(num / 10);     
// }

// console.log(reverse);

/////////////////////////////////////////////////////////////////////////////









// let num = 121;

// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;          
//   reverse = reverse * 10 + digit; 
//   num = Math.floor(num / 10);     
// }

// console.log(reverse);
// if(num==reverse){
//     console.log('number is  palindrome');
// }else{
//     clg('number is not palondrome');
// }





//////////////////////////////////////////////////////////////////////////////////
// let num = 5236;
// let original = num;
// let last = num % 10;
// while (num >= 10) {
//   num = Math.floor(num / 10);
// }





/////////////////////////////////////////////////////////////////////////////////
// let first = num;
// let sum = first + last;
// console.log("First Digit:", first);
// console.log("Last Digit:", last);
// if (first + last === original) {
//   console.log("Sum of first and last digit is equal to the number.");
// } else {
//   console.log("Sum of first and last digit is NOT equal to the number.");
// }
// let num = 12345;
// let count = 0;

// while(num > 0){
//   num = Math.floor(num / 10);
//   console.log( Math.floor(num / 10));
//   count++;
// }
// console.log(count); 









/////////////////////////////////////////////////////////////////////////
// let num = 123;
// let rev = 0;
// let temp = num;
// while (temp > 0) {
//   let digit = temp % 10;
//   rev = rev * 10 + digit;
//   temp = Math.floor(temp / 10);
// }
// console.log("Original Number:", num);
// console.log("Reversed Number:", rev);
// if (rev % 3 === 0) {
//   console.log("YES, the reversed number is divisible by 3.");
// } else {
//   console.log("NO, the reversed number is NOT divisible by 3.");
// }






////////////////////////////////////////////////////////////////////////////////
// let num = 121;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;          
//   reverse = reverse * 10 + digit; 
//   num = Math.floor(num / 10);     
// }
// if(num%3==0){
//     console.log('Number is divisible');
// }else{
//     console.log('Number is not divisible');
// }
//////////////////////////////////////////////////////////////////////////////





// let num = 1234;
// let product = 1;

// while(num > 0){
//     let digit = num % 10;
//     product *= digit;
//     num = Math.floor(num / 10);
// }

// console.log("Product of digits:", product);


///////////////////////////////////////////////////////////////////////////////////////




// let num = 5;
// let fact = 1;

// for(let i = 1; i <= num; i++){
//     fact *= i;
// }
// console.log(`Factorial of ${num} is ${fact}`);

////////////////////////////////Sum of factorial of digits of a number//////////////




// let num = 145; 
// let originalNum = num; 
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10; 
//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact *= i;
//   }
//   sum += fact;
//   num = Math.floor(num / 10);
// }
// console.log(`Sum of factorial of digits of ${originalNum} is: ${sum}`);

///////////////////////////////////Check if a number is a Strong number
//(145 → 1! + 4! + 5! = 145).////////////////////////////////////////////////////


// let num = 145;
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;

//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact *= i;
//   }

//   sum += fact;
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log(num + " is a Strong number");
// } else {
//   console.log(num + " is not a Strong number");
// }



//////////////////////////////////////////////////////////////////////////////

// let num = 145; 
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;
//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact *= i;
//   }

//   sum += fact;
//   temp = Math.floor(temp / 10);
// }

// console.log("Sum of factorials:", sum);



///////////////////////////////////////////////////////////////////////////////


// let num = 17;
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(num + " is a prime number");
// } else {
//   console.log(num + " is NOT a prime number");
// }

///////////////////////////////////////////////////////////////////////////////////////////////
