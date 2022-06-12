// const vowels = ["a", "e", "i", "o", "u"];
function isVowel(char) {
  return "aeiou".includes(char);
}
var map = new Map();

function vowelCount(str) {
  for (var char of str.toLowerCase()) {
    if (isVowel(char) && map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}

const newMap = vowelCount("counttvowel");
console.log(newMap);
