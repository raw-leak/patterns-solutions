// PROBLEM EXPLANATION

// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as study, formed from dusty.

// input (string,string)
// output boolean

/**
 * Anagram comparison/validation
 * 
 * @author Mykhaylo Gusak <www.linkedin.com/in/mykhaylo-gusak/>
 * 
 * @param {String} string1 - First string to compare
 * @param {String} string2 - Second string to be compared with
 * 
 * @returns {Boolean} If it meet the requirement.
 */

function validationAnagram(string1, string2) {

    // comparing the length of each string
    if (string1.length != string2.length) return false // +1

    // declaring result object
    let frequencyCounter = {}

    // iterating the first string and save each key with it quantity
    for (key of string1) {
        frequencyCounter[key.toLowerCase()] = (frequencyCounter[key] || 0) + 1
    }

    // iterating the second string and save each key with it quantity
    for (key of string2) {

      if()  frequencyCounter[key.toLowerCase()] 



    }

    for (let key in frequencyCounter1) {
        if (!frequencyCounter2[key] || frequencyCounter1[key] != frequencyCounter2[key]) return false
    }

    return true
}

// OUTPUT

validationAnagram('', '') // true
validationAnagram('CineMa', 'IcemaN') // true
validationAnagram("study ", "dusty") // true

validationAnagram('hello', 'hallo') // false
validationAnagram('323', '123') // false
