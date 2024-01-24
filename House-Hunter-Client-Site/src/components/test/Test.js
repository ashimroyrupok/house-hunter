function isPalindrome(string) {
    const checkString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reverseString = checkString.split('').reverse().join('');
    // console.log(reverseString);
    const result = checkString === reverseString
    // console.log(result);
    return result;
}

