function SumOfDigits(num){
    let sum  = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);   
    }
return sum 
 }    

    
console.log(SumOfDigits(438794409095308509));

// function SumOfDigits(num) {
//     if (num <= 9) {
//         return num;
//     } else {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10; // Add the last digit to the sum
//             num = Math.floor(num / 10); // Remove the last digit
//         }
//         return sum;
//     }
// }

// console.log(SumOfDigits(2345)); // Output: 14
