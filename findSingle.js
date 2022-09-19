// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// BONUS: You must implement a solution with a linear runtime complexity and use only constant extra space.

function findSingle(nums) {
  if (nums.length === 1) return nums[0];

  let map = {};
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    map[value] ? (map[value] += 1) : (map[value] = 1);
  }

  for (const value in map) {
    if (map[value] === 1) {
      res += Number(value);
    }
  }
  return res;
}

console.log(findSingle([4, 1, 2, 1, 2]));
console.log(findSingle([1, 3, 2, 1, 3, 2, 5]));

function findSingleXOR(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}

console.log(findSingleXOR([1, 2, 1, 2, 4]));
console.log(findSingleXOR([1, 3, 2, 1, 3, 2, 5]));
