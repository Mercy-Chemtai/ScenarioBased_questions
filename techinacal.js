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