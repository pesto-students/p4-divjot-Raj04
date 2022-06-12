//Write a function called hasDuplicate which accepts an array and returns true/false if that array
//contains a duplicate

//Learning: Instead of writing a custom function to test duplicates, pass input array to a set
// function hasDuplicate(arr) {}

const arr = [1, -1, 14, 5, 5];
const hasDuplicate = (arr) => {
  const newSet = new Set(arr);
  // if the newSet size is equals then it doesn't contain any duplicate elements
  // if length of arr and set is different then it means there is duplicate element
  return newSet.size !== arr.length;
};
console.log(hasDuplicate(arr));
