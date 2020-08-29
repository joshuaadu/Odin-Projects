const caesar = function (str, shift) {
  const nstr = str.toUpperCase();
  let results = [];
  let lowerCaseIndexes = [];
  //Loop through string
  for (let i = 0; i < str.length; i++) {
    let char;
    //Check and change each character to UpperCase for shifting
    if (isLowerCase(str[i])) {
      char = str[i].toUpperCase();
      //Track index of LowerCase character
      lowerCaseIndexes.push(i);
    } else {
      char = str[i];
    }
    //Get ASCII code
    strCode = nstr.charCodeAt(i);
    //Shift only alphabets
    if (strCode >= 65 && strCode <= 90) {
      //Handle large positve or negative shifts
      if (shift > 25 || shift < -25) {
        shift = shift % 26;
      }

      if (strCode + shift > 90) {
        let diff = strCode + shift - 90;
        console.log(diff);
        results.push(String.fromCharCode(diff + 64));
      } else if (strCode + shift < 65) {
        let diff = 65 - (strCode + shift);
        console.log(diff);
        results.push(String.fromCharCode(91 - diff));
      } else {
        results.push(String.fromCharCode(strCode + shift));
      }
    } else {
      results.push(String.fromCharCode(strCode));
    }
  }
  //Change characters to their original letter case
  lowerCaseIndexes.forEach((index) => {
    results[index] = results[index].toLowerCase();
  });

  return results.join("");
};

//Check if character is lowerCase
function isLowerCase(chr) {
  return chr == chr.toLowerCase();
}

module.exports = caesar;