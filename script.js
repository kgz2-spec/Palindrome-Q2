function checkPalindrome() {
    const input = document.getElementById("userInput").value;
    
    if (input === "") {
        document.getElementById("result").textContent = "Please enter a valid string";
        return;
    }
    
    const str = String(input);
    let check = str.length - 1;
    let isPalindrome = true;
    
    for (let i = 0; i <str.length;i++) {
        if (i >= check) {
            isPalindrome = true;
            break;
        }
        else if (str[i] !== str[check]) {
            isPalindrome = false;
            break;
        }
        check--;
    }
    
    if (isPalindrome) {
        document.getElementById("result").textContent = `"${input}" is a palindrome!`;
    } else {
        document.getElementById("result").textContent = `"${input}" is NOT a palindrome`;
    }
}