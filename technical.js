//finding the length of the largest word in a sentence
function findLongestWord(str) {
    const words = str.split(' ');
    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    }, '');
    return longestWord.length;
}

const sentence2 = "The quick brown fox jumped over the lazy dog";
const longestLength2 = findLongestWord(sentence2);
console.log({longestLength2});



// Finding the longest word in the sentence

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    }
    return longestWord;
  }
  const sentence = "The quick brown fox jumped over the lazy dog";
  const longestWord = findLongestWord(sentence);
  console.log(longestWord);

  //Create a data class that sorts the students scores in ascending order
  class Students{
    constructor(scores){
      this.scores=scores
    }
  }
   function sortScores(scores){
   let sortedScores = scores.sort()

   }
  const scores= [20,30,40,50,10]
  const sortedScores= sortScores(scores)
  console.log(scores)

  

  function sortArray(arr5){
  let sortedArray = arr5.sort()
    console.log(sortedArray)

      }
 sortArray([20,40,30,90,80])

 //it saves on space since sort sorts the original array 
//  const quickSortMethod = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }; 
 

// function quickSortMethod(arr){
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[0];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }; 
//  console.log(quickSortMethod([10,20,40,50,30]))


 function loopArray(arr){
  for(let i=0; i<arr.length;i++)
    if (arr[i] === arr[4]){
    break;
  }
  else{
    continue;
  }

 }
 let arr = [1,2,3,4,5,6,7,8,9]
 loopArray(arr)
 console.log(arr)
  