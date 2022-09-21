var canPartition = function(nums) {
  const len = nums.length
  const sum = nums.reduce((pre, cur) => pre+cur, 0)
  const target = Math.floor(sum/2)
  if(target*2 !== sum) return false

  const dp = Array.from({length: len}).fill(Array.from({length: target+1}))
  for(let i=0; i<target+1; i++) {
      dp[0][i] = i>=nums[0] ? nums[0] : 0
  }

  for(let i=1; i<len; i++) {
      const t = nums[i]
      for(let j=0; j<target+1; j++) {
          const no = dp[i-1][j]
          const yes = j>=t ? dp[i-1][j-t] + t : 0
          dp[i][j] = Math.max(no, yes)
      }
  }

  return dp[len-1][target] === target
};

canPartition([1,2,5])