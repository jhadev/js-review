// objects are ways to group relevant data using key : value pairs

// almost everything at it's core is an object in javascript. for example:

// here we are comparing the type of an empty array with the type of an empty object. and it logs 'true'
if (typeof [] === typeof {}) {
  console.log('true');
} else {
  console.log('false');
}

// The primitive values in JavaScript are String, Number, Boolean, Null, and Undefined.
// Even the primitive values have methods they inherit from their object prototypes.
// Don't worry about this we will explain it later in class.

/* remember we have been using alot of methods whether you realize it or not. 
For example: you have seen .toLowerCase() right?

We know this takes a string like 'I'M ANGRY THIS IS ALL CAPS!!!' and converts all the characters
to lowercase. This is because String is basically a built in object in JavaScript and has methods attached to it for us to use. Because JavaScript is a dynamically typed language we don't
have to explicitly say that a string is a string like other languages. 

In the example objects below we are creating our own objects and attaching methods to them as a key.

the name of the method is the key and the function to run when we call it is the value.
*/

// we have 2 actor objects listed below that contain the following properties:

var actorOne = {
  firstName: 'Bruce',
  lastName: 'Willis',
  age: 64,
  appearedIn: [
    {
      movie: 'Die Hard',
      characterName: 'John McClane',
      releaseYear: 1988,
      genre: 'Action'
    },
    {
      movie: 'The Fifth Element',
      characterName: 'Korben Dallas',
      releaseYear: 1997,
      genre: 'Sci-Fi'
    },
    {
      movie: 'The Whole Ten Yards',
      characterName: 'James "Jimmy The Tulip" Tudeski',
      releaseYear: 2000,
      genre: 'Comedy'
    }
  ],
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  onlyComedy: function() {
    return this.appearedIn.filter(function(movie) {
      return movie.genre === 'Comedy';
    });
  }
};

var actorTwo = {
  firstName: 'Natalie',
  lastName: 'Portman',
  age: 38,
  appearedIn: [
    {
      movie: 'Star Wars: Episode I – The Phantom Menace',
      characterName: 'Padmé Amidala',
      releaseYear: 1999,
      genre: 'Sci-Fi'
    },
    {
      movie: 'V for Vendetta',
      characterName: 'Evey Hammond',
      releaseYear: 2005,
      genre: 'Thriller'
    },
    {
      movie: 'Thor',
      characterName: 'Jane Foster',
      releaseYear: 2011,
      genre: 'Fantasy'
    }
  ],
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  onlyFantasy: function() {
    return this.appearedIn.filter(function(movie) {
      return movie.genre === 'Fantasy';
    });
  }
};

// to access the values in these objects we can use either dot notation or bracket notation.

console.log(actorOne.firstName);
console.log(actorOne.lastName);
// note () because we are calling this method
console.log(actorOne.fullName());

// we usually stick to dot notation unless our object keys have spaces or our keys are being accessed using variables. for example.

var bruce = 'firstName';

console.log(actorOne[bruce]);

// objects can contain strings, numbers, booleans, arrays, and even nested objects inside objects.

console.log(actorTwo.onlyFantasy());

// how can we access the object that contains info about Natalie Portman's first star wars movie?

// we know it is inside the actorTwo object and that appearedIn is an array. The Phantom Menace is the first movie in that array. so we say:

var phantomMenace = actorTwo.appearedIn[0];

// here we can see the entire object
console.log(phantomMenace);
