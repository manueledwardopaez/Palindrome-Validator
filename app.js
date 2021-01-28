const result = document.getElementById("result");

function isPalindrome(str) {

    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    var reversed = smallStr.split("").reverse().join("");
    if (reversed === smallStr) {
        return true
    } else {
        return false
    }

}

function palindromeValidator() {
    const text = document.getElementById("text").value;
    var frase = isPalindrome(text);

    if (frase == true) {
        result.innerHTML = "It's a Palindrome";
    } else {
        result.innerHTML = "It's not palindrome";
    }
}

