console.log("ARJUN")

function isPalindrome(num) {
    let numStr = num.toString();
    
    let reversedStr = numStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return numStr === reversedStr;
}

// Test the function
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
