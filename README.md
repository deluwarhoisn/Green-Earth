
#### Create a README file

### 1 What is the difference between var, let, and const?
var, let, and const — all three are used to declare variables in JavaScript. However, there are some important differences between them.
1. var
Descended from ES5 (old JavaScript).

Function scoped ➝ limited only within the function.

Hoisted ➝ returns undefined if used before declaring.

Can be declared again (redeclaration possible).
2. let

Derived from ES6 (new JavaScript).

Block scoped ➝ { } is confined within the block.

No hoisting (stays in temporal dead zone).

Cannot be declared again, but value can be changed.
3. const

This also comes from ES6.

Block scoped ➝ limited to the block.

Once the value is set, it cannot be changed.

It cannot be declared again.

#### 2 What is the difference between map(), forEach(), and filter()? 
In JavaScript, map(), forEach(), and filter() — all three are Array methods, but they work differently.
🔹 1. forEach()
Just loops over each element of the array.

Returns nothing (i.e. undefined).

Usually used for printing, logging or small tasks.

🔹 2. map()

Operates on each element of the array and returns a new array.

The original array is not changed.

Used for transformation.
🔹 3. filter()

Returns a new array by selecting elements based on a condition.

The original array is not changed.

Used for filtering / selection.

#### 3 What are arrow functions in ES6?
Arrow Function is a shortcut syntax for writing a new type of function introduced in ES6 (ECMAScript 2015).
It is also called Fat Arrow Function (=>).
🔹 Arrow Function Features

Small and concise syntax

Requires much less code than a normal function.

The behavior of this is different

In a normal function, this changes, but in an arrow function, it takes the this of the parent scope (lexical this).

No function keyword is required

You just need to use =>.

#### 4 How does destructuring assignment work in ES6?
Destructuring Assignment is a powerful feature of ES6, which allows us to easily store values ​​from arrays or objects in separate variables.

#### 5 Explain template literals in ES6. How are they different from string concatenation?
Template Literals in ES6 are a new way of writing strings, written with a backtick (`).


