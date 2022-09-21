var findSubsequences = function (nums) {
  const ans = [];
  const len = nums.length;

  function dfs(arr, index) {
    if (arr.length >= 2) {
      ans.push([...arr]);
      return;
    }
    for (let i = index; i < len; i++) {
      if (!arr.at(-1) || arr.at(-1) <= nums[i]) arr.push(nums[i]);
      dfs(arr, index + 1);
      arr.pop();
    }
  }

  dfs([], 0);
  return ans;
};

console.log(findSubsequences([4, 6, 7, 7]));
