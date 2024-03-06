console.log("ARJUN")

function isPalindrome(num) {
    // Convert number to string
    let numStr = num.toString();
    
    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return numStr === reversedStr;
}

// Test the function
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false
