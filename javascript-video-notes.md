# Video 1
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

# Video 14: Demo of Using template literals to format strings
This is similar to what I have learned in previous programming courses. I think using template literals require a lot of practice before it comes naturally, the examples used in the video were not that great. I think a better example could have been to have maybe a presentation of a person:

```js
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

Some code snippets worth remembering:
```js
let num1 = 100;

console.log(++num1);        // 101
console.log(--num1);        // 100
console.log(Math.PI);       // 3.1415...
console.log(Math.sqrt(num1)); // 10