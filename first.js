console.log("ARJUN")

function isPalindrome(num) {
    let numStr = num.toString();
    
    let reversedStr = numStr.split('').reverse().join('');
    
    return numStr === reversedStr;
}

console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
