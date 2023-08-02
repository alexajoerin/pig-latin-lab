// const vowels = ["a", "e", "i", "o", "u"];
// const consonants = [
//   "b",
//   "c",
//   "d",
//   "f",
//   "g",
//   "h",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const translate = (word) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) {
//     return `${word}way`;
//   } else {
//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i])) {
//         const firstPart = word.slice(0, i);
//         const secondPart = word.slice(i);
//         return `${secondPart}${firstPart}ay`;
//       }
//     }
//   }
// };

// WAY THAT MAKES MOST SENSE TO ME

const translate = (word) => {
  word = word.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0])) {
    return `${word}way`;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        return `${word.slice(i, word.length)}${word.slice(0, i)}ay`;
      }
    }
  }
};

// const translate = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//       return `${word}way`;
//     } else if (consonants.includes(word[i]) && vowels.includes(word[i + 1])) {
//       let wordArray = word.split("");
//       let firstCons = wordArray.shift();
//       wordArray.push(firstCons);
//       let finalWord = wordArray.join("");
//       return `${finalWord}ay`;
//     }
//   }
// };

// SMALLEST AMOUT OF CODE

// const translate = (word) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) {
//     return word + "way";
//   } else {
//     const wordArray = word.split("");
//     const index = wordArray.findIndex((char) => vowels.includes(char));
//     return word.slice(index) + word.slice(0, index) + "ay";
//   }
// };

module.exports = {
  translate,
};
