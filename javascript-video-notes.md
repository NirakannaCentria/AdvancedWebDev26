# Microsoft Beginner's series to JavaScript

I have made these notes trying to see my future needs, but also trying to make notes that will serve me in this course, with things and concepts that I know I struggle with.

---

# Video 1: Introduction
This video was just an introduction of JavaScript, the goals of the course, and the instructors that will be delivering the presentations and the learning materials.

# Video 2: What is JavaScript?
It was developed and designed to interact with elements of a web page in a browser. It is a C-based language.  
It is a dynamically tight language, it means that it can determine what type of variables you are using by itself.  
JavaScript is used client-side, server-side and native, and the most used programming language in the world.

# Video 3: Running JavaScript, browser or server
Client = web browser.  
JavaScript should not be put directly in the web page, instead you should put the JavaScript to separate files for better maintenance, and then in the web page you use the `<script src="javascriptfilename.js"></script>` to call it in your web page.  
Server side task require node.js, used for building web services.

# Video 4: Building your toolbox
Visual studio code, a code editor.

**VS Code extensions:**
- ESLint → to find and fix problems
- Prettier → a code formatter
- JavaScript (ES6) code snippets → faster and quicker work with shortcuts

**Node.js:** for executing js-code outside the web-browser  
**Nvm:** since the node.js version installed will be static, NVM is installed to manage updates and multiple environments

# Video 5: Demo of toolbox building
- Installing VSC, already have this installed
- Eslint, easy to find and install
- Node.js, already have this installed
- Nvm, already have this installed

# Video 6: Creating your first application
Making a node.js file.  
This was an interesting and educational video, especially on the quotation marks and the importance of correct order when passing substitution variables in the “console log” -functions.

# Video 7: Code Comments
Comments don’t run when you run your code, they serve as reminders or documentation of what you have done or of your thought process during working.  
Two slashes are used for single line comments: `//`  
Multi-line comments begin with `*/` and end with `/*` and these are printed out on several lines.  
The backside to using comments is that if you need to explain what you have done, your code is most likely to complicated and you would be better off trying to simplify your code instead of explaining it. The goal should be self-explanatory codes.

# Video 8: Demo of using comments
This is familiar to from other courses, but it was interesting to see the tips for how to use the comment function, like making “To Do”-lists that you can search for later or how you can save code snippets that you maybe want to save but not run right now.  
I liked the part where he pointed out that it should be the goal to make code snippets self-explanatory so you don’t need to use comments so much.

# Video 9: Declaring variables
There are three ways to declare variables: `var`, `let`, and `const`.

- `var` → function scope, and can be changed in scope  
- `let` → Block scoped, can be changed in scope, and only available after declaration  
- `const` → Block scoped, but cannot be changed  

`const` should be used by default, `let` should be used in loops.

# Video 10: Demo of declaring variables
I really liked the demonstration of the importance of order and how the var function operates and how it can be changed. The demonstration of what block scoped means and how to work with it was very valuable.  
By favoring the use of const you help yourself and other understand that this variable should only be used once, a let variable is best used in blocks that will be used several times, such as loops.

# Video 11: Working with strings
String concatenation → combining two or more strings  
String literals → joining of strings and variables  
Joined with `+`, such as `console.log(str1 + str2);`  
It is important to factor in the use of spaces, where they should be placed within the printed string.  
When mixing numbers and text, it important to remember to use the same format to avoid mistakes.

# Video 12: Demo of working with strings
Most of what she presented in this video was already familiar to me from other programming courses, but it was a great reminder of being careful when working with numbers: 1 and “1” are not the same! When you type “1” it is interpreted as string or text, and 1 will be interpreted as the number.

# Video 13: Using template literals to format strings
Template literals → Flexible formatting, syntax makes strings easier to format and read  
Uses backticks, template literals only require the backtick character, placed at the beginning and end of a string  
Template literals respect line breaks

# Video 14: Demo of Using Template Literals to Format Strings

This is similar to what I have learned in previous programming courses. I think using template literals requires a lot of practice before it comes naturally. The examples used in the video were not that great. I think a better example could have been a presentation of a person:

let str1 = "Anna-Karin";
let str2 = "sushi";
console.log(`I am ${str1}`);
console.log(`I am ${str1} and I love ${str2}`);

# Video 15: Data types in JavaScript
JavaScript is more weakly structured than for instance C#, but some data types are familiar, such as number, string, Boolean, date, function, array, and object.  

Special types are `NaN`, `null`, and `undefined`.  

`typeof` returns a string of the data type primitive, and `instanceof` returns a Boolean indicating whether a value matches a specific data type.  

What was interesting about the types was how JavaScript will try to find a common denominator if you combine two different types, such as a number and a string, and the result will be in string format.

# Video 16: Demo of Data types in JavaScript
It was interesting to see how different types behave when you use them, especially arrays.  
You need to be careful with the `typeof` operator, since it tests against the primitive type inside the JavaScript system.  
When doing an `instanceof` test, you should remember that it compares against the instance constructor used to create the variable.

# Video 17: Math in JavaScript
It is best to use the `Math` object for mathematical operations.  
This object provides a set of constants and functions, such as trigonometric and logarithmic functions.

# Video 18: Demo of Math in JavaScript
Basic math such as addition, subtraction, multiplication, and division are easily executed in JavaScript.

Some simple snippets of code that I want to remember from this video are these:

let num1 = 100  
console.log(++num1); → 101  
console.log(--num1); → 100  
console.log(Math.PI); → prints out the number pi (3.1415…)  
console.log(Math.sqrt(num1)); → square root of 100 = 10

# Video 19: Converting strings to numbers
`parseInt()` and `parseFloat()` convert numerical strings to numbers.  
`parseFloat()` is used for decimal numbers.  
`toString()` converts numbers to numerical strings.

# Video 20: Demo of converting strings to numbers

The things I want to remember from this video are the following snippets, as they represent what I usually forget when I write code: the difference between numbers and floating numbers, and to check whether I am working with strings or numbers.

let num1 = '150';  
let flo1 = '1.50';  
console.log(parseInt(num1)); → 150  
console.log(parseInt('ABC')); → NaN (not a number)  
console.log(parseFloat(flo1)); → 1.5  
console.log(parseInt('1.5')); → 1

# Video 21: Handling Errors with try / catch / finally

It is important to have the right terminology and use the right words.  
An **exception** is an interruption in the intended execution of code, an **error** is an unintended interruption in code execution, and **throwing an exception** means generating a message that something has gone wrong in the intended execution of code.

Try = a block of code that may throw an exception.  
Catch = a block of code that will run if an exception is thrown.  
Finally = an optional block of code that will run after the try block or after the catch block.


# Video 22: Demo of Handling Errors with try / catch / finally

throw exception 'myException';  
throw true;

When this is printed, it will show up in the console as `throw 'myException';` with the message from the code, in this case just **myException**.

**My takeaways from the video:**

- throw immediately stops execution inside `try`  
- catch receives whatever was thrown  
- finally always runs, even when an error occurs

# Video 23: Dates

In JavaScript, time is handled as an object. One central object is `Date`, which contains both date and time.

const date = new Date();  
const now = new Date(); → right now  
now.setFullYear(2014); // sets year  
now.setMonth(3); // April, January is 0  
now.setDate(4); // sets day of month  
now.setHours(4);  
now.setMinutes(24);  
now.setSeconds(46);


# Video 24: Dates

It is important to notice that when using `const now = new Date();` and then `console.log(now);`, the time shown is in UTC, not your local time.

January is noted as 0 instead of 1, and days also work this way (0 is Sunday).


# Video 25: Boolean Logic with if Statements

Comparing values is consistent with other programming languages, but JavaScript automatically converts data types in many instances, which can lead to bugs.

Two comparison operators are available:  
`==` checks for equality regardless of type, while `===` checks for equal values **and** data types (best practice).  

`!=` checks for non-equality regardless of data type, while `!==` checks for non-equal values **and** data types (best practice).

# Video 26: Demo of Boolean Logic with if Statements

This video clearly highlights the difference between using `==` versus `===`, and how values can appear equal or not in JavaScript. For example, `'200'` is not the same as `200`.

It also provides a good visualization of when to use curly brackets (`{}`) and how `if` statements work.



# Video 27: Boolean Logic with switch and Other Syntax

Implicit false values, such as empty strings, will automatically test as false. Objects that are `null` or `undefined` will also test as false, as well as the number `0`.

The `!` operator can be used to reverse a boolean result.

Strings are case-sensitive, meaning `christopher` is not the same as `Christopher`.

When combining comparisons, `&` or `&&` are used for “and”, and `|` or `||` are used for “or”. Best practice is to use `&&` and `||`.

When using `switch` (case) statements, it is important to include a `break` statement.



# Video 28: Demo of Boolean Logic with switch and Other Syntax

This video gives a good demonstration of how a string containing only a space is tested as false, and it is interesting to see how the result changes when adding a `!` in front of the variable.

I also liked the side-by-side comparison showing how to use `switch` statements with proper `break` usage.


# Video 29: Creating an Array

An array is a list or collection of values where each value has an index.  
The length of an array can be checked using `arrayName.length`.


# Video 30: Demo of Creating Arrays

Important code snippets to remember:

let arrayLength = number; → assigns the value stored in `number` (for example, 5) to a variable representing the desired array length.  

let arr1 = []; → creates a new empty array with no elements.  

let arr2 = Array(arrayLength); → creates a new array with a specified length but without any values in it yet.


# Video 31: Populating Arrays

When adding data to an array, you can either add values during creation or after creation.  
If values are added after creation, they must be assigned to an index, and indexes that already contain values can be overwritten.

# Video 32: Demo of Populating Arrays

The first demo showed data being added at creation. It is important to remember that indexes start at 0.

The second demo showed data being added after creation and what happens if you try to print a value that has not yet been assigned an index — it will print `undefined`.

The third demo focused more on array length and indexes, and how to reserve a space in the index for a value.



# Video 33: Array Methods

When manipulating arrays, you can use `push`, `pop`, `shift`, `unshift`, and `concat`.

- `array.push()` adds values to the end of the array  
- `array.pop()` removes a value from the end of the array  
- `array.shift()` removes values from the front of the array  
- `array.unshift()` adds values to the front of the array  
- `concat` joins two arrays to create a new array



# Video 34: Demo of Array Methods

This demo covered `pop` and `push`, `shift` and `unshift`, and `concat`.

It is important to remember that when using `concat`, the resulting array is a **new array**. The original arrays still exist as individual arrays and can be concatenated again with other arrays.



# Video 35: Loops

Loops are used to execute code multiple times, such as iterating through a list. Common loops include `while`, `for`, and `for … of`.

- `while` loops are used for boolean conditions, such as repeatedly calling a function that returns `false` or `null` when completed  
- `for` loops are designed to execute a specific number of times  
- `for … of` loops are best used when working with arrays or collections


# Video 36: Demo of Loops

This video was mostly a repetition of the previous one, but it included a valuable tip about Visual Studio Code: using the **Tab** key to insert ready-made loop templates.

The demonstration of the `for … of` loop looked especially convenient.



# Video 37: Functions

Functions are blocks of code that execute a task using instructions. They are useful for saving time when you need to repeat a block of code and are easier to maintain than multiple individual code blocks.

The `function` keyword identifies a function. When naming functions, letters, numbers, `$`, and `_` are allowed.

Return statements are optional but recommended.


# Video 38: Demo of Functions

The purpose of functions is to create reusable blocks of code that speed up development.

Parameters can be thought of as placeholders; at execution time, the placeholder values are replaced with actual data.

# Video 39: Arrow and Anonymous Functions

Also called “fat arrow functions” (`=>`). They change the `this` context and must either be assigned to a variable or used immediately.

The `this` context is inherited from the parent scope and cannot be changed.


# Video 40: Demo of Arrow and Anonymous Functions

The fat arrow is written by combining `=` and `>`, creating an arrow symbol.

In the example shown in the video, the `return` keyword is not needed because single-line fat arrow functions have an implicit return.

For multi-line blocks of code, you must use the `return` keyword and `{}` to contain the block.


# Video 41: Object Notation

JSON stands for JavaScript Object Notation. It is language-independent and human-readable.

JSON is based on two data structures found in most programming languages:
- A collection of name–value pairs
- An ordered list of values

Curly brackets `{}` are used to enclose single objects.


# Video 42: Demo of JSON

`JSON.stringify()` is used to convert a JavaScript object into a JSON-formatted string.

`JSON.parse()` is used to convert JSON data into a JavaScript object or an array.



# Video 43: Objects in JavaScript

Objects represent real-life items such as books or songs. Attributes describe objects, for example title, author, songwriter, or composer.

Real-world objects also have actions (methods), such as checking in or checking out a book from a library.

Constructors can be seen as templates, and instances can be created using the `new` keyword.



# Video 44: Objects Demo

Objects are used to represent real-world items, both tangible and intangible, such as books or songs.

Objects can be created using object literals (creating and defining an object in a single statement) or by using constructors, where templates are used and properties are added as needed.

Overall, this was a good video that I will likely need to revisit as I start using JavaScript more in the future, so I have it bookmarked in my browser.



# Video 45: Promises for Long-Running Operations

With operations that take longer to complete, single-threaded applications can experience frozen actions. Since JavaScript is single-threaded, actions are queued and executed one at a time.

Historically, this was managed using callbacks. A callback is a function passed as an argument to another function and executed later.

Callbacks can cause their own issues, which is why promises are used. Promises are relatively new to JavaScript and represent a value that will be available later, allowing you to handle asynchronous operations more cleanly.



# Video 46: Demo of Promises for Long-Running Operations

Here is the code snippet demonstrated in the video:

function promiseTimeout(ms) {  
  return new Promise((resolve, reject) => {  
    setTimeout(resolve, ms);  
  });  
}

promiseTimeout(2000)  
  .then(() => {  
    console.log('Done!!');  
  })  
  .catch(() => {  
    console.log('Error!');  
  });



# Video 47: Async / Await for Managing Promises

Async/await is used to make asynchronous code look synchronous and is standard in many other programming languages.

Using `async` declares that a function will contain an `await` call. The `await` keyword pauses execution, allows other code to run, and then continues after the awaited operation completes.


# Video 48: Demo of Async / Await for Managing Promises

Async/await is built on top of promises.

To use async/await, you start by declaring a function using `async function run()`. Inside the function body, the `await` keyword is placed where the promise should be resolved.

Example code snippet provided by ChatGPT:

async function fetchData() {  
  try {  
    const result = await new Promise((resolve) => {  
      setTimeout(() => resolve("Data loaded"), 1000);  
    });  
    console.log(result);  
  } catch (error) {  
    console.error(error);  
  }  
}

fetchData();


# Video 49: Package Management

A package is a reusable bundle of code or other assets such as libraries, tools, shared components, or modules.

Packages are important in JavaScript because they allow developers to reuse tested and maintained code to add functionality quickly.


# Video 50: Demo of Package Management

In JavaScript (Node.js), you create a package file by running `npm init` or `npm init -y` in your project folder using your code editor.

This is another video that I have bookmarked in my browser because it contains many useful tips for working with packages.


# Video 51: Next Steps

This video emphasized that the best way to learn more is to start using what has been learned and also provided useful links for further learning.
