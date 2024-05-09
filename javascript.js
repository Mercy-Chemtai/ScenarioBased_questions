// //Write a JavaScript function that reverses a number.
// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));

// //Write a JavaScript function that checks whether a passed string is a palindrome or not

// //A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// // Write a JavaScript function that checks whether a passed string is palindrome or not? 

// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or notava
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nursesrun');
//     check_Palindrome('fox');


//    // Write a JavaScript function that generates all combinations of a string.
//    function substrings(str) {
//     const result = [];
    
//     function search_combination(start, curr) {
//       if (curr.length > 0) {
//         result.push(curr);
//       }
//       for (let i = start; i < str.length; i++) {
//         search_combination(i + 1, curr + str[i]);
//       }
//     }  
//     search_combination(0, '');
//     return result;
//   }
//   const str = 'dog';
//   const result = substrings(str);
//   console.log(result)

//   //Write a JavaScript function that returns a string that has letters in alphabetical order.
//   // Define a function named alphabet_order that takes a string parameter (str)
// function alphabet_order(str) {
//     // Split the string into an array of characters, sort the array, and join the characters back into a string
//     return str.split('').sort().join('');
//   }
//   // Log the result of calling alphabet_order with the input string "webmaster" to the console
//   console.log(alphabet_order("webmaster"));

 // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
 
 //create a program that takes two strings as input and checks if one is an anagram of the other(e.g "liste
 //" and "silent", are amagrams)
 
 function check_anagram(str1,str2){
    let sortedArray1 = str1.sort
    let sortedArray2 = str2.sort
    if(sortedArray1 == sortedArray2){
        console.log("It is anagram")
    }
    else{
        console.log("it is not anagram")
    }
   
 }
let str1 = "silent"
let str2 = "listen"
check_anagram(str1,str2)


//create a program that takes a string and a list if characters as input,and removes all occurences 
//of those characters of those characters from the string

//  function removeChar(list){
//     let result = list.split(''). 
//     for(i in removeChar ){
//         if(str1[i]!== str2)
//         result+=string[i]
//     }
//     return result
      
//  }
//  let list = "geeks"
//  console.log(list)


function checkCharacter(arr){
    let character = arr.split('').count().join('').length
    i=0
    for(i=0;character>=arr;i++)
        if(character>=arr){
      return arr
    }
}
let arr = ["Glory","Mercy","Amazing","Lovelace"]
console.log(arr)


function averageScore(arr1){
    let totalScore= students.scores.map(scores=>scores+scores)
    let average = totalScore/students.scores.length
    return average
}
const students = {"name":'Mercy',
                  "class":'Lovelace',
                   "test":'Javascript',
                     "scores":[20,30,40,50]}
                     let arr1 = [10,20,40,50]
                     console.log(averageScore(arr1))


                     function getReverse(string){
                        string+= ""
                        let reverse = string.split("").reverse().join("")
                        return reverse
                     }
                     console.log(getReverse("class"))


                     function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join("")
}

console.log(capital_letter("I love AkiraChix"));



function Revenue(sale){
    let totalrevenue= sale.reduce((sale1,sale2)=>sale1+sale2)
    return totalrevenue
}
console.log(Revenue([1000,2000,4000,50000]))

function capitalizeSentence(sentence){
    let capitalizedSentence=sentence.split('').map(word=>word(0).toUpperCase(). word.slice(i).toLowerCase())
    return  capitalizedSentence
}
console.log(capitalizeSentence("I love akiraChix"))


//How to remove duplicates
//using indexOf()
let arr4 = ["scale", "happy", "strength",
            "peace", "happy", "happy"];
 
    function removeDuplicates(arr4) {
        let unique = [];
        for(i=0; i < arr.length; i++){ 
            if(unique.indexOf(arr4[i]) === -1) { 
                unique.push(arr[i]); 
            } 
        }
        return unique;
    }
 
    console.log(removeDuplicates(arr4))


    //using redused method

    let arr3 = ["scale", "happy", "strength",
    "peace", "happy", "happy"];

function removeDuplicates(arr) {
let unique = arr3.reduce(function (acc, curr) {
    if (!acc.includes(curr))
        acc.push(curr);
    return acc;
}, []);
return unique;
}

console.log(removeDuplicates(arr3));

//Function with purchase amount and discount percentage as inputs and calculate the final price

function finalPrice(purchaseAmount,discountPercentage){
    let discountShilling = purchaseAmount*(discountPercentage/100)
    let finalPrice = purchaseAmount- discountShilling

    return finalPrice
}
console.log(finalPrice(100,5))


                        
                     