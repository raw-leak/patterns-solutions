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
    for (let i = 0; i < string1.length; i++) {
        frequencyCounter[string1[i].toLowerCase()] = (frequencyCounter[string1[i]] || 0) + 1
        //frequencyCounter[string1[i]] ? frequencyCounter[string1[i]]++ : frequencyCounter[string1[i].toLowerCase()] = 1
    }

    // iterating the second string and save each key with it quantity
    for (key of string2) {
        let letter = key.toLowerCase()

        if (!frequencyCounter[letter]) {
            return false
        } else {
            frequencyCounter[letter] -= 1
        }

    }

    return true
}

// OUTPUT

validationAnagram('', '') // true
validationAnagram('CineMa', 'IcemaN') // true
validationAnagram("study ", "dusty") // true

validationAnagram('hello', 'hallo') // false
validationAnagram('323', '123') // false
