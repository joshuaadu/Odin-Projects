const palindromes = function (str) {
    //Convert string to lowercase
    let newStr = str.toLowerCase();
    //Remove "," from string
    if (newStr.includes(",")) {
        newStr = newStr.split(",").join("");
    }
    //Remove "." from string
    if (newStr.includes(".")) {
        newStr = newStr.split(".").join("");
    }
    //Remove "!" from string
    if (newStr.includes("!")) {
        newStr = newStr.split("!").join("");
    }
    //Remove " " from string
    newStr = [...newStr].reduce((chars, char) => {
        if (char != " ")
            chars += char;
        return chars;
    }, "");
    //Reverse string and compare with unreversed string
    let reverseStr = [...newStr].reverse().join("");
    return newStr == reverseStr;
}

module.exports = palindromes