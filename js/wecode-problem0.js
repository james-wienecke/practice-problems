"use strict";
(function (){
    /* 2016. Max Difference Between Increasing Elements
     * 
     * Given a 0-indexed integer array of nums of size n, find the maximum
     * difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such
     * that 0 <= i < j < n and nums[i] < nums[j].
     *
     * Return the maximum difference. If no such i and j exist, return -1.
     */

    let maxDiffBetweenIncElem = (nums) => {
        let maxDiff = -1;
        nums.forEach((val, index, array) =>{
            if (val < array[index + 1] && array[index + 1] - val > maxDiff) {
                maxDiff = array[index + 1] - val;
            }
        });
        return max;
    }

    console.log(maxDiffBetweenIncElem([7,1,5,4]));
    console.log(maxDiffBetweenIncElem([9,4,3,2]));
    console.log(maxDiffBetweenIncElem([1,5,2,10]));
})();