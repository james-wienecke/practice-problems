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
        for (let i = 0; i < nums.length; i++) { // go through array, checking each value against all further values in order
            let maxInPass = -1; // each comparison through the end of the array will record its maximum difference
            if (i + 1 < nums.length) {  // ensure j does not try to continue past end of array
                for (let j = i + 1; j < nums.length; j++) { // check further values in order
                    if (nums[i] < nums[j] && nums[j] - nums[i] > maxInPass) {
                        maxInPass = nums[j] - nums[i];  // only update maxInPass if difference critera are met
                    }
                }
            }
            if (maxInPass > maxDiff) maxDiff = maxInPass;   // if necessary, update maxDiff to hold highest found difference
        }
        return maxDiff;
    }

    console.log(maxDiffBetweenIncElem([7,1,5,4]));
    console.log(maxDiffBetweenIncElem([9,4,3,2]));
    console.log(maxDiffBetweenIncElem([1,5,2,10]));
})();