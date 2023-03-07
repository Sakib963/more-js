## What is Debugging?
* Debugging is the process of finding and fixing errors or bugs in the source code.
* Computer programmers study the code to determine why any errors occurred.
* Checks the code step by step, and analyze and fix the issue.

## How does the debugging process work?
### Error Identification
* Developers locate the exact line of codes or code module causing the bug.
### Error Analysis
* Coders analyze the error by recording all program state changes and data values.
### Fix and Validation
* Developers fix the bug and run tests to ensure the software continues to work as expected.

## Some debugging techniques:
* Using console.log() method
The console.log() method displays the result in the console of the browser. If there is any mistake in the code, it generates the error message.
* Setting the breakpoints
Marking some lines of code at different points of the program can create breakpoints. When the program reaches the marked point during execution, it pauses. This helps the developer to check for any available error and sort it out.
* Using the debugger keyword
You can also use the JavaScript debugger keyword. This places a halt in execution where you place the debugging keyword. Here is an example:
```
function doSomething(){
    console.log("Halt!");
    debugger;
    console.log('Continue');
}
doSomething();
```
* Backtracking
    * Backtracking uses different solutions until you find the right solution to the error.
    * It is effective for debugging.
    * You apply possible solutions to solve the problem in the JavaScript program.
    * If it doesn't work you retreat and select another move.

## Common types of errors

## Syntax Error
SyntaxError is triggered when you write code that is not syntactically correct.
* Missing inverted commas.
* Missing closing parentheses.
* Improper alignment of curly braces or another characters.
```
constt value = 'value';
```

## Type Error
TypeError is created when some value doesn't turn out to be of a particular expected type.
* Calling objects that are not methods.
* Attempting to access properties of null or undefined objects.
* Treating a string as number or vice versa.
```
const someBoolean = true;

someBoolean.slice(-1);
//Type Error
```

## Reference Error
* Forgotten to define a value for the variable before using it.
* We might be tying to use an inaccessible variable in our code.
* Making a type in a variable name.
* Trying to access block-scoped variables outside of their scopes.
```
const name = receivedName;
// ReferenceError: receivedName is not defined
```

## Internal Error
The internal error occurs when an exception occurs in the JavaScript runtime engine. It may or may not indicate an issue with your code.
Internal Error occurs in two scenarios only:
* When a patch or an update to the JavaScript runtime carries a bug that throws exceptions.
* When your code contains entities that are too large for the JavaScript engine.(e.g. too many switch cases, too large array initializers, too much recursion)

## Range Error
RangeError - thrown when a value is not in an allowed range.

## What is SyntaxError?
An exception caused by the incorrect use of a pre-defined syntax. Syntax errors are detected while compiling or parsing source code.

## When do we get reference error?
The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.