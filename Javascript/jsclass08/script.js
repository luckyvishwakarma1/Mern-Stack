/////////////////////////////////Number system question
// 1. Write a program to check whether a number is Even or Odd.////////////////////////////
// let i=20;
// if(i%2==0){
//     console.log('number is even');
// }
// else{
//     console.log('number is odd');
// }


//----------//2. Given an integer, check if it is divisible by 5 and 11.-------------



// let i=55
// if(i%5===0 && i%11===0){
//     console.log('divisible by 5 and 11');
// }
// else{
//     console.log('not divisible by 5 and 11');
// }



/////////3. Check whether a number is positive, negative, or zero.



// let i=0
// if(0<i){
//     console.log('number is positive');
// }else if(0>i){
//     console.log('number is negative');
// }
// else{
//     console.log('number is zero');
// }



/////////////////////////4. Check if a number is divisible by 2, 3, and 5 at the same time.


// let num = prompt('enter a number')
// num=Number(num);
// if(num%2===0 && num%3===0 && num%5===0){
//     console.log('number is divisible by 2 ,3,5');
// }
// else{
//     console.log('number is not divisible by 2,3 and 5');
// }


/////////////////////////////5.Reverse a number without using built-in functions.

// let num = 12345;
// let reversed = 0;

// while(num > 0){
//     let digit = num % 10;            
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);     
// }
// console.log(reversed);


///////////////////////6.Check whether a given number is a palindrome


// let num = 121;

// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;          
//   reverse = reverse * 10 + digit; 
//   num = Math.floor(num / 10);     
// }

// console.log(reverse);
// if(num==reverse){
//     console.log('number is palindrome');
// }else{
//     clg('number is not palondrome');
// }



//////7.Check whether the sum of the first and last digit of a number is equal.

// let num = 303;
// let originalNum = num;

// let lastDigit = num % 10;  

// while(num >= 10){
//     num = Math.floor(num / 10);
// }
// let firstDigit = num;

// let sum = firstDigit + lastDigit;

// if(sum === originalNum){
//     console.log("Sum is equal to the number");
// } else {
//     console.log("Sum is NOT equal to the number");
// }

// console.log("First Digit:", firstDigit);
// console.log("Last Digit:", lastDigit);
// console.log("Sum:", sum);

////8. Count how many digits in a number.

// let num = 123456; 
// let count = 0;

// while(num > 0){
//     num = Math.floor(num / 10); 
//     count++; 
// }

// console.log("Total digits:", count);



let n = 5; // table of 5

for (let i = 1; i <= 10; i++) {
    console.log(n * i);
}


//////////////////////9. Check whether the reverse of a number is divisible by 3.


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





////////////10. Find the sum of digits of a number.


// let num = 12345;
// let sum = 0;

// while(num > 0){
//     let digit = num % 10;       
//     sum = sum + digit;           
//     num = Math.floor(num / 10);  
// }

// console.log("Sum of digits:", sum);

/////////////


////11. Find the product of digits of a number.

// let num = 1234;
// let product = 1;

// while(num > 0){
//     let digit = num % 10;
//     product *= digit;
//     num = Math.floor(num / 10);
// }

// console.log("Product of digits:", product);


////////12. Find the largest digit in a number.


// let num = 3982457;
// let largest = 0;

// while(num > 0){
//     let digit = num % 10;      

//     if(digit > largest){
//         largest = digit;         
//     }

//     num = Math.floor(num / 10);  
// }

// console.log("Largest digit is:", largest);



/////13. Find the smallest digit in a number.


// let num = 3982457;
// let smallest = 9;

// while(num > 0){
//     let digit = num % 10;      

//     if(digit < smallest){
//         smallest = digit;         
//     }

//     num = Math.floor(num / 10);  
// }

// console.log("Smallest digit is:", smallest);




/// 15. Check if digits of the number are strictly increasing (e.g., 1234).

// let num = 12347;
// let isIncreasing = true;
// let prevDigit = 10; 

// while (num > 0) {
//   let digit = num % 10; 

//   if (digit >= prevDigit) {
//     isIncreasing = false;
//     break;
//   }

//   prevDigit = digit; 
//   num = Math.floor(num / 10); 
// }

// if (isIncreasing) {
//   console.log("Digits are strictly increasing.");
// } else {
//   console.log("Digits are NOT strictly increasing.");
// }

/////16. Find the factorial of a number.




// let num = 5;
// let fact = 1;

// for(let i = 1; i <= num; i++){
//     fact *= i;
// }
// console.log('Factorial of number is',fact);

////17. Check if a number is a Strong number
//(145 → 1! + 4! + 5! = 145).




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

// if (sum === originalNum) {
//   console.log(originalNum + " is a Strong number");
// } else {
//   console.log(originalNum + " is NOT a Strong number");
// }






///////////////////////////////////17. Check if a number is a Strong number
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



////////////18. Sum of factorial of digits of a number.



// let num = 534;
// let sum = 0;
// let temp = num;

// while (temp > 0) {
//   let digit = temp % 10;

//   let fact = 1;
//   for (let i = 1; i <= digit; i++) {
//     fact *= i;
//   }

//   sum += fact;

//   temp = Math.floor(temp / 10); 
// }

// console.log("Sum of factorial of digits:", sum);


////19. Count how many Strong numbers are present between two limits.


// let start = 1;
// let end = 500;
// let count = 0;

// for (let num = start; num <= end; num++) {
  
//   let temp = num;
//   let sum = 0;

//   while (temp > 0) {
//     let digit = temp % 10;


//     let fact = 1;
//     for (let i = 1; i <= digit; i++) {
//       fact *= i;
//     }

//     sum += fact;
//     temp = Math.floor(temp / 10);
//   }

//   if (sum === num) {
//     console.log(num + " is a Strong number");
//     count++;
//   }
// }

// console.log("Total Strong numbers:", count);






//////////20. Check whether a number is prime.


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

///////////21. Print all prime numbers in a given range.

// let start = 1;
// let end = 50;

// for (let num = start; num <= end; num++) {
//   let isPrime = true;

//   if (num <= 1) {
//     continue; 
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

///22. Count digits in a number that are prime digits (2,3,5,7).



// let num = 352872;
// let count = 0;
// let temp = num;

// while (temp > 0) {
//   let digit = temp % 10;

//   if (digit === 2 || digit === 3 || digit === 5 || digit === 7) {
//     count++;
//   }

//   temp = Math.floor(temp / 10);
// }

// console.log("Number of prime digits:", count);

//////23. Check if a two-digit number is a circular prime
// (Prime in normal + reversed form).

// let num = 13;
// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// let reversed = Math.floor((num % 10) * 10 + Math.floor(num / 10));

// if (isPrime(num) && isPrime(reversed)) {
//   console.log(num + " is a Circular Prime");
// } else {
//   console.log(num + " is NOT a Circular Prime");
// }

// //24. Check whether a number is a Perfect number
//(6, 28, 496…).

// let num = 28;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//   if (num % i === 0) {
//     sum += i;
//   }
// }

// if (sum === num) {
//   console.log(num + " is a Perfect number");
// } else {
//   console.log(num + " is NOT a Perfect number");
// }

// ///25. Check whether a number is an Armstrong number
//(153, 370, 9474…).


// let num = 153;
// let temp = num;
// let sum = 0;
// let digits = num.toString().length;

// while (temp > 0) {
//   let digit = temp % 10;
//   sum += Math.pow(digit, digits);
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log(num + " is an Armstrong number");
// } else {
//   console.log(num + " is NOT an Armstrong number");
// }



//   ///26. Find all Armstrong numbers between 1 and 500.


//   for (let num = 1; num <= 500; num++) {
//   let temp = num;
//   let sum = 0;
//   let digits = num.toString().length;

//   while (temp > 0) {
//     let digit = temp % 10;
//     sum += Math.pow(digit, digits);
//     temp = Math.floor(temp / 10);
//   }

//   if (sum === num) {
//     console.log(num);
//   }
// }
// //28.Check whether a number is a Neon number
//(9 → 81 → 8+1 = 9).


// let num = 9;
// let square = num * num;
// let sum = 0;
// let temp = square;

// while (temp > 0) {
//   sum += temp % 10;
//   temp = Math.floor(temp / 10);
// }

// if (sum === num) {
//   console.log(num + " is a Neon number");
// } else {
//   console.log(num + " is NOT a Neon number");
// }


///29. Find HCF of two numbers.


// let a = 36;
// let b = 60;
// let x = a;
// let y = b;

// while (y !== 0) {
//   let temp = y;
//   y = x % y;
//   x = temp;
// }

// console.log("HCF of", a, "and", b, "is", x);


///30. Find LCF of two numbers.

// let a = 36;
// let b = 60;

// function hcf(x, y) {
//   while (y !== 0) {
//     let temp = y;
//     y = x % y;
//     x = temp;
//   }
//   return x;
// }

// let lcm = (a * b) / hcf(a, b);
// console.log("LCM of", a, "and", b, "is", lcm);

// ////33. Generate Fibonacci series up to n terms.



// let n = 10; // number of terms
// let a = 0, b = 1;

// console.log("Fibonacci series:");
// console.log(a);
// console.log(b);

// for (let i = 3; i <= n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// ///34. Check whether a number belongs to Fibonacci series.


// let num = 21;
// let a = 0, b = 1;
// let found = false;

// if (num === 0 || num === 1) found = true;

// while (b < num) {
//   let c = a + b;
//   a = b;
//   b = c;
//   if (b === num) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log(num + " belongs to Fibonacci series");
// } else {
//   console.log(num + " does NOT belong to Fibonacci series");
// }


// ///35. Print sum of first n natural numbers without loop.


// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("Sum of first", n, "natural numbers is", sum);


// ////36. Print sum of first n odd numbers.


// let n = 10;
// let sum = 0;
// let odd = 1;

// for (let i = 1; i <= n; i++) {
//   sum += odd;
//   odd += 2; 
// }

// console.log("Sum of first", n, "odd numbers is", sum);


// ///37. Print sum of first n even numbers.

// let n = 10;
// let sum = 0;
// let even = 2;

// for (let i = 1; i <= n; i++) {
//   sum += even;
//   even += 2;
// }

// console.log("Sum of first", n, "even numbers is", sum);



// ///39. Count number of even digits in a number.



// let num = 3528746;
// let temp = num;
// let evenCount = 0;

// while (temp > 0) {
//   let digit = temp % 10; // get last digit
//   if (digit % 2 === 0) {
//     evenCount++;
//   }
//   temp = Math.floor(temp / 10);
// }

// console.log("Number of even digits:", evenCount);


// // 40. Count number of odd digits in a number.

// let num = 3528746;
// let temp = num;
// let oddCount = 0;

// while (temp > 0) {
//   let digit = temp % 10; // get last digit
//   if (digit % 2 !== 0) {
//     oddCount++;
//   }
//   temp = Math.floor(temp / 10); // remove last digit
// }

// console.log("Number of odd digits:", oddCount);



