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

// const translate = (word) => {
//   word = word.toLowerCase();
//   let vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) {
//     return `${word}way`;
//   } else {
//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i])) {
//         return `${word.slice(i, word.length)}${word.slice(0, i)}ay`;
//       }
//     }
//   }
// };

// DON'T WANT TO CONTINUE THIS WAY BECAUSE THERE ARE AN UNDISCLOSED AMOUNT OF CONSONANTS

// const translate = (word) => {
//   word = word.toLowerCase();
//   let vowels = ["a", "e", "i", "o", "u"];
//   if (vowels.includes(word[0])) {
//     return `${word}way`;
//   } else if (vowels.includes(word[1])) {
//     return word.substr(1) + word[0] + "ay";
//   } else if (vowels.includes(word[2])) {
//     return word.substr(2) + word.slice(0, 2) + "ay";
//   }
// };

// const translate = (word) => {
//   word = word.toLowerCase();
//   let vowels = ["a", "e", "i", "o", "u"];
//   //   we put this condition first because it is the smallest case. We want to do smallest to start and broadest as the else
//   if (/[0-9@]/.test(word)) {
//     return word;
//   } else if (vowels.includes(word[0])) {
//     return `${word}way`;
//   } else {
//     for (let i = 0; i < word.length; i++) {
//       if (vowels.includes(word[i])) {
//         return word.slice(i) + word.slice(0, i) + "ay";
//       }
//     }
//   }
// };

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

// SMALLEST AMOUT OF CODE - STUDY THIS:

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

// const translate = (word) => {
//   word = word.toLowerCase();
//   if (/[0-9@&$#!]/.test(word)) {
//     return word;
//   } else if (/[aeiou]/.test(word[0])) {
//     return word + "way";
//   } else {
//     const wordArr = word.split("");
//     const index = wordArr.findIndex((char) => /[aeiou]/.test(char));
//     return word.slice(index) + word.slice(0, index) + "ay";
//   }
// };

// HOW TO DO WHAT WE DID ABOVE WITHOUT THE ARRAY

const translate = (dialogue) => {
  //   dialogue = dialogue.toLowerCase();
  wordArr = dialogue.split(" ");
  //   the i added to the regex below makes the test ignore upper or lower case to keep it the same. had to change the tests to keep the  uppercase in them to make it work
  const vowelsRegex = /[aeiou]/i;
  const pigArray = [];
  wordArr.forEach((word) => {
    if (/[0-9@&$#!]/.test(word)) {
      pigArray.push(word);
    } else if (vowelsRegex.test(word[0])) {
      pigArray.push(word + "way");
    } else {
      const index = word.search(vowelsRegex);
      pigArray.push(word.slice(index) + word.slice(0, index) + "ay");
    }
  });
  return pigArray.join(" ");
};

module.exports = {
  translate,
};
