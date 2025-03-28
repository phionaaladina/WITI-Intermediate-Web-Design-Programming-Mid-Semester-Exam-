// SECTION C: 

// 1. Write a function to reverse a given string.
function reverseString(string) {
return string.split("").reverse().join("")
};

console.log(reverseString('Aladina'))

// 2. Implement a function to find the sum of all even numbers in an array.
function sumEvenNums(arr){
    return arr.filter(num => num % 2===0).reduce((sum, num)  => sum + num, 0);
}

console.log (sumEvenNums([1,2,3,4,5,6,7,8,9])) //output: 20



// 3. Create a function that takes two numbers. If the numbers are the same, return their product. If they are different, return their sum.
function numbers(a,b){
    return a===b? a*b: a + b  
};

console.log(numbers(2,4)) //returns 6, sum since the numbers are different.
console.log(numbers(2,2)) // returns 4, the product since the two numbers are the same.

// 4. Write a function that checks if a given word is a palindrome.

//
function isPalindrome(word){
    const reversedWord = word.split("").reverse().join(""); //splits the word into characters, reverses it and joins the reversed characters back into a word
return word === reversedWord //compare original word with the reversed string
};

console.log(isPalindrome('apple')) //false
console.log(isPalindrome('pawpaw')) //false
console.log(isPalindrome('111')) //true

