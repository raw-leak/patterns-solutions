// PROBLEM EXPLANATION

// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// input (arrau)
// output array

/**
 * Anagram comparison/validation
 * 
 * @author Mykhaylo Gusak <www.linkedin.com/in/mykhaylo-gusak/>
 * 
 * @param {Array} array - Array to check
 * 
 * @returns {Array} If it meet the requirement.
 */

function sumZero(array) {

    // declare left initial index, the first index element
    let left = 0

    // declare right initial index, the last index element
    let right = array.length - 1;

    while (left < right) {
        // add numbers
        let sum = array[left] + array[right]

        // check if met the main requirement
        if (sum === 0) {
            return [array[left], array[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// OUTPUT

sumZero([-2,-1,1-0,1,2]) // [-2,2]
sumZero([-43,-25,-8,-2,-1,0,2,7,25,55]) // [-25,25]
sumZero([-7,-3,-2,-1,0,1,4,5,6,8,9,10,11]) // [-1,1]
