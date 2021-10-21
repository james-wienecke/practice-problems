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
        let maxDiff = -1; // record maximum difference btween nums[i] and nums[j]
        let minNow = Number.MAX_SAFE_INTEGER; // current minimum initially set to max value
        for (let i = 0; i < nums.length; i++) {
            // if current minimum is greater than current element's value, we've found a new minimum to use
            if(minNow > nums[i]) minNow = nums[i];
            // if current element's value is greater than the current minimum,
            if(minNow < nums[i]) {
                // then check if it's the greatest difference so far and if so, update maxDiff
                if (maxDiff < nums[i] - minNow) maxDiff = nums[i] - minNow;
            }
        }

        return maxDiff;
    }

    console.log(maxDiffBetweenIncElem([7,1,5,4]));
    console.log(maxDiffBetweenIncElem([9,4,3,2]));
    console.log(maxDiffBetweenIncElem([1,5,2,10]));
})();