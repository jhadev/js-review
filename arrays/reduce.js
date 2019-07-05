// FOR REFERENCE - THE POWER OF .reduce()

// here is another powerful example using reduce

// declare a variable that holds a long string
var insanelyLongString =
  'sadiovjsdnfewrusiojfsd[[psddzmxnc,wieieprwp[ocnn#($)_)@#)$*$jfh2340-23=4=lpfksdifjsjdfjbcbhbsxsdhbdskfhhfowo4iopqer';

// reassign that variable to create an array of all the letters with .split()
insanelyLongString = insanelyLongString.split('');

console.log(insanelyLongString);

// here we are using .reduce on the array to create an object with each key being assigned to a letter in the array and each value being the number of times that letter is present in the array.
var characterCount = insanelyLongString.reduce(function(obj, letter) {
  // here we using bracket notation instead of dot notation because our key is a variable.
  // at every iteration a letter is being assigned a value. if a key in our object does not have a value yet it is set to 1, if it does then 1 is added to the value of the existing letter in the object.
  obj[letter] = (obj[letter] || 0) + 1;
  return obj;
}, {});

console.log(characterCount);

// now lets find the character that appears the most in the string using .reduce

// Object.keys turns our object we created above back into an array of only the keys of the object
var mostFreqCharacter = Object.keys(characterCount);

// here we use reduce on that array of letters to find the one letter that appears the most in the array. Remember, reduce does exactly what it says, it reduces our array into whatever we specify in the callback function.

mostFreqCharacter = mostFreqCharacter.reduce(function(a, b) {
  // a, b as parameters are shorthand in this case. you will see it alot.

  // we need to reference the character count we created above because its values hold the answer to this problem.
  // again we use bracket notation to access the value of a key in our object because we are passing variable data to reference it.
  if (characterCount[a] > characterCount[b]) {
    return a;
  } else {
    return b;
  }
});

// 's' appeared 10 times in our string and our reduce function returns 's'.
console.log(mostFreqCharacter);
