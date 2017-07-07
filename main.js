// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.


  function max(a, b) {
      if (a > b) {
        return a;
      } else  {
        return b;
      }
  }

  console.log(max(4,5));




    // Your answer here



// 2.
// ====
// Then, write and example of using the function.

function maxOfThree(num1,num2,num3){
if ((num1 >= num2) && (num1 >=num3 )){
  return num1;
   } else if (num2 >= num3) {
  return num2;

   }else {
  return num3;
   }


}
         console.log(maxOfThree (8,6,5));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
   if("english is a vowel"){
    return true;
   }else {
    return false;
   }
}
       console.log(isVowel());

    // Your answer here



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
    function sum( x, y){
     return x + y;
}
    console.log(sum( 7, 5));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
    function avg(table1,table2) {
     return table1/table2;
}
     console.log((12,4));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
   function getLength(str) {
    return str.length;
}
     console.log(getLength("amrat"));


// 7.

   function greaterThan(G,H) {
  if(G<H){
    return true;
    }else {
    return false;
    }
}

       console.log(greaterThan(5,8));

// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.



// 8.
function greet(Name,name2) {
  return " Hello, " + Name + "! ";

}
   console.log(greet('tamrat'));
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.



// 9.
   function madlib(str1, str2 ,str3, str4) {
  return "sometimes " + str1 + " " + str2 + " not " + str3  + " " + str4;


}
     console.log(madlib( 'JavaScript','is','very','handy'));
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
