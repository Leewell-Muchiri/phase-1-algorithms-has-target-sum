function hasTargetSum(array, target) {
const numObj = {}//numbers in the array
  for (const num of array) {
    const anyOtherNum = target - num;
    if (numObj[anyOtherNum]) return true;
    numObj[num] = true
  }
  return false;
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  if (target - any number in array = any other number in the array) return true
*/

/*
checks if any two integers in the array add up to the target.
if any two inregers in the array add up the target, return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
