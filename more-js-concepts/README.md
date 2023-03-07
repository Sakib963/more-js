## JavaScript is a highly abstracted programming language.

An abstraction is a way of 
* hiding the implementation details
* showing only the functionality to the users

## High abstraction in JavaScript
* We don't have to handle resource management and memory allocation
* We don't have to handle garbage collection
* Reduces details so that developers can focus on logic better
* Improves understandability as well as maintainability of the code.

## JavaScript collects garbage automatically.

## Garbage Collection:
* JavaScript automatically collects unused data
* Free the memory with the help of an algorithm called 'Mark-and-sweep'
* The garbage collector goes through the roots, marking (remembering) them on its way.
* It then moves on to the references and marks them as well.
* The cycle continues until the garbage collector visits all the roots and references.
* The garbage collector removes all the objects, except the marked ones.

## JavaScript is a JIT Compiled Language.

## JIT (Just-In-Time)
* JavaScript is not a purely interpreted language.
* Modern JavaScript is JIT compiled.
* JUST-IN-TIME compiler converts the entire code into machine code and execute them immediately.

## JavaScript is a multi-paradigm programming language.

## Multi-Paradigm
#### Paradigm: code structure that will determine the style or way of programming.
1. Procedural Programming: Involves writing down instructions, tells the computer what it should do step by step.
2. Object-Oriented Programming: Modeling a system as a collection of objects and Objects contain both functions and data.
3. Functional Programming: An approach to software development that uses pure functions. Also to create maintainable software.

## JavaScript is a proto-typed based programming language.

## Proto-Typed Based:
* In JavaScript, everything (function, array, objects) is objects except the primitive data.
* A prototypical object is an object used as a template from which to het the initial properties for a new object.
* Proto-type is a blue print.

## JavaScript is dynamically typed programming language.

## Dynamically-Typed
* When you declare a variable, you do not need to specify what type of variable this is.
* JavaScript engine infers what type this variable is based on the value assigned to at run time.
```
let temp = 'name';
temp = true;
```
* As JavaScript determines the type at runtime we can re-declare the type.

## What is JavaScript?
JavaScript is JIT compiled, Multi-Paradigm, Prototyped-Based, Dynamically-typed, High Abstracted programming language and it collects garbage automatically.

## What is v8 Engine?
V8 is Google's open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.

## Internal Mechanism of JavaScript V8 Engine
![v8](https://user-images.githubusercontent.com/66853064/222925403-55275382-7221-41ac-bae2-a0255ba63481.PNG)

## When we pass any JS code to Chrome, it executes through v8 engine.

## Execution Context
* An execution context in an environment.
* Inside the execution context a piece of JavaScript code gets executed.
* Variables, parameters and other information related to the piece of code get stored in the execution context.

## There are two types of Execution context in JavaScript
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

## Global Execution Context
Whenever the JavaScript engine receives a script file, it first creates a default Execution context known as the Global Execution Context.
* GEX is the base/Default Execution Context.
* all JavaScript code that is not inside of a function gets executed.
* For every JavaScript file, There can only be one GEC.

## Function Execution Context
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context(FEC).
* Every time a function is called, a new execution context is created for that function.
* Each function has its own execution context.
* Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

## Phases: The execution context is created in two phases:
* Creation Phase
* Execution Phase

## Creation Phase
Creation phase is the phase in which the JS engine has called a function but its execution has not started.
* JS engine is in the compilation phase.
* It just scans over the function code to compile the code.
* It doesn't execute any code.

## Execution Phase
During the execution phase, the JavaScript engine executes the code line by line.
* assigns the values to variables, and
* executes the function call.

## Call Stack
* The call stack is used by JavaScript to keep track of multiple function calls
* In order to manage the execution contexts, the JavaScript engine uses a call stack.

## JavaScript is Single Threaded By Nature.

## Single Threaded
* Single-threaded means only one statement is executed at a time.
* JavaScript only has one call stack.
* JavaScript runs code line by line.
* Must finish executing a piece of code before moving onto the next.

## Synchronous vs Asynchronous
```
// Synchronous
console.log('I')
console.log('eat')
console.log('Ice Cream')
/* Output:
I
eat
Ice Cream */


// Asynchronous
console.log('I')
setTimeout(() => {
    console.log('eat')
}, 3000);
console.log('Ice Cream');

/* Output:
I
Ice Cream
eat */
```

## Promise
The Promise Object represents the eventual completion (or Failure) of an asynchronous operation and its resulting value. A promise is in one of these States:
![promise](https://user-images.githubusercontent.com/66853064/222928406-33a0ea06-94e4-413e-9f37-3c2ac019af71.PNG)

## Promise Structure
![structure](https://user-images.githubusercontent.com/66853064/222928741-6a24d1a6-f4c9-4d0e-a3c5-d0ebd2c9485b.PNG)


## Fetch API
1. The fetch() method starts the process of fetching a resource from a server.
2. The fetch() method returns a Promise that resolves to a Response object.
3. A fetch() method only rejects when a network error is encountered.


## Async Await
* "async await" is a special syntax to work with promises in a more comfortable way
* It's surprisingly easy to understand and use.
* The await keyword can only be used inside an async function.
* The await keyword makes the function pause the execution and wait for a resolved promise before it continues.


## setTimeout() vs setInterval()
![difference](https://user-images.githubusercontent.com/66853064/222929574-ddf324e9-a88f-4a04-bd97-f6d518a54c28.PNG)


## What is Garbage Collection in JavaScript?
The process of freeing up memory that is no longer being used by a program.

## What is the difference between synchronous and asynchronous code execution in JavaScript?
Synchronous code execution means that the code is executed is a sequential order, while asynchronous code execution means that the code is executed without waiting for the previous line to complete.

## What is event loop in JavaScript?
A mechanism that allows asynchronous code to be executed in JavaScript.

## What is the difference between setTimeout() and setInterval() in JavaScript?
setTimeout() executes a function once after a specified delay, while setInterval() executes a function repeatedly at a specified interval.

## How do you cancel a setTimeout or setInterval in JavaScript?
Use the clearTimeout or clearInterval method to cancel the timer.

## What is a Promise in JavaScript?
An object that represents a value that may not be available yet, but will be resolved or rejected in the future.

## Can you use await outside of an async function?
No, await can only be used inside an async function.

## What is the event loop in JavaScript?
A loop that runs events sequentially on a single thread.

## What is the main difference between synchronous and asynchronous programming?
Synchronous programming executes code sequentially, while asynchronous programming does not.

## Which of the following is an example of a JavaScript runtime error?
An error caused by trying to divide by zero.

# Interview Questions

## Tell me something about JS Engine V8 internal mechanism.
V8 is an open-source JavaScript engine developed by Google that powers many modern web browsers and Node.js. It's designed to execute JavaScript code at lightning-fast speeds by using an innovative compilation technique called Just-In-Time (JIT) compilation.

Here are some key internal mechanisms of the V8 engine:

1. Memory Management: V8 uses a garbage collector to manage memory automatically. It allocates memory dynamically when needed and frees up unused memory automatically.

2. Interpreter: V8 uses an interpreter to execute JavaScript code. The interpreter converts the JavaScript code into machine code and executes it line by line. This process is slow but allows V8 to start executing code immediately.

3. Compilation: V8 uses a Just-In-Time (JIT) compiler to optimize the performance of JavaScript code. The JIT compiler compiles frequently executed code into highly optimized machine code, which can execute much faster than interpreted code.

4. Call Stack: V8 maintains a call stack that keeps track of function calls and return values. This allows V8 to execute code in a stack-based manner, where each function call is added to the top of the stack and executed in order.

5. Hidden Classes: V8 uses hidden classes to optimize object creation and property access. When a new object is created, V8 creates a hidden class for it, which defines the object's structure. This allows V8 to quickly access object properties without the need for expensive lookups.

6. Profiler: V8 includes a profiler that can be used to identify performance bottlenecks in JavaScript code. The profiler can be used to measure the execution time of different functions and identify slow or frequently executed code.

## What is event loop in JavaScript?
The event loop is a core concept in JavaScript that allows it to handle asynchronous operations and events in a non-blocking way. It continuously checks the event queue for pending events and executes their associated callbacks. This mechanism allows JavaScript to remain responsive while executing long-running operations in the background.

## If JavaScript is single threaded, how does it handle asynchronous call?
When an asynchronous operation is initiated, such as a network request or a timer, JavaScript doesn't wait for it to complete before moving on to the next line of code. Instead, it registers a callback function to be executed once the operation completes and then continues with the next line of code.

When the asynchronous operation completes, its callback is added to the event queue. The event loop continuously checks the event queue for pending events and executes their associated callbacks. This way, JavaScript can handle asynchronous operations without blocking the main thread, allowing the application to remain responsive even while executing long-running operations.

## Can you explain the difference between an async function and a regular function in JavaScript?
The main difference between an async function and a regular function in JavaScript is that an async function is designed to handle asynchronous operations and returns a Promise, while a regular function executes synchronously and returns a value or undefined.

## What's the error handling strategy for promises that were rejected while awaiting?
When awaiting a promise, if the promise is rejected, an exception is thrown. This exception can be caught using a try-catch block.

## What are the states of a promise?
A Promise in JavaScript can have one of three states:

1. Pending: This is the initial state of a Promise. It means that the Promise is neither fulfilled nor rejected.

2. Fulfilled: This state is reached when the Promise is resolved successfully, i.e., the asynchronous operation completes successfully. The Promise returns a value, and any attached callbacks are executed with this value.

3. Rejected: This state is reached when the Promise is rejected, i.e., the asynchronous operation fails. The Promise returns an error, and any attached rejection callbacks are executed with this error.

## Can you explain what the .then() method does?
It's used to attach callback functions that will be executed when the Promise is fulfilled successfully.

The .then() method takes two optional callback functions as arguments: the onFulfilled function and the onRejected function. The onFulfilled function is executed when the Promise is fulfilled successfully, and it receives the value returned by the Promise as its argument. The onRejected function is executed when the Promise is rejected, and it receives the error returned by the Promise as its argument.

The .then() method returns a new Promise that can be used to chain additional callbacks. If a callback returns a value, it will be passed to the next callback in the chain as an argument, and if a callback throws an error, the next onRejected function in the chain will be executed. This allows for powerful error handling and chaining of multiple asynchronous operations.