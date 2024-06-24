let numberSum= function twoSum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
       
        if (numIndices.hasOwnProperty(complement)) {
           
            return [numIndices[complement], i];
          
        }

        numIndices[currentNum] = i;
      
    }

    throw new Error("No solution found");
}
export default numberSum;