/* -------------------------------------------------------------------------- */
//!                         Common Interview Questions                         */
/* -------------------------------------------------------------------------- */

/*
# 1. Tell me something about JS engin and internal mechanism.

    >> The JavaScript engine is the program that interprets and executes JavaScript code. Different web browsers have different JavaScript engines. The internal mechanism of a JavaScript engine can vary, but generally it involves the following steps:
       * Parsing: the engine parses the JavaScript code and creates an abstract syntax tree (AST) of the code.
       * Compilation: the engine compiles the AST into machine code or bytecode.
       * Execution: the engine executes the compiled code, interacting with the browser's rendering engine and the DOM as necessary.

# 2. The difference between "setTimeout()" and "setInterval()"?
    >> setTimeout() and setInterval() are both functions in JavaScript that allow you to schedule a function to run after a certain amount of time has passed. The difference between the two is that setTimeout() runs the function once after the specified time has passed, while setInterval() runs the function repeatedly at a specified interval.

# 3. What is event loop in JavaScript?
    >> The event loop is a key feature of JavaScript that allows the language to handle asynchronous code. It is a mechanism that continuously checks the call stack and the task queue, and moves tasks from the task queue to the call stack when the call stack is empty. This allows asynchronous code to be executed after other synchronous code has finished executing, without blocking the main thread.

# 4. If JavaScript is single threaded language, then how does it handle asynchronous call?
    >> Although JavaScript is a single-threaded language, it can handle asynchronous calls through the use of callbacks, promises, and async/await functions. Asynchronous calls are scheduled to run in the background, and when they complete, they are added to the task queue. When the call stack is empty, the event loop moves tasks from the task queue to the call stack, allowing asynchronous code to be executed.

# 5. Can you explain the difference between async function and regular function in JavaScript?
    >> A regular function in JavaScript executes synchronously, meaning that it blocks other code from running until it has finished executing. An async function, on the other hand, is designed to handle asynchronous code and runs asynchronously. When an async function is called, it returns a promise that is either resolved with the function's return value or rejected with an error.

# 6. Whats error handling strategy for promises that were rejected while awaiting in JavaScript?
    >> The error handling strategy for promises that were rejected while awaiting in JavaScript is to use a try/catch block. You can use the try block to wrap the code that contains the await expression, and the catch block to handle any errors that occur. If an error occurs during the execution of the await expression, the catch block will be executed, and you can handle the error appropriately.

# 7. What are the states of promise?
    >> A promise in JavaScript can be in one of three states: pending, fulfilled, or rejected. When a promise is first created, it is in the pending state. If the promise is resolved with a value, it transitions to the fulfilled state, and if it is rejected with an error, it transitions to the rejected state.

# 8. Can you explain what ".then()" method does?
    >> The .then() method is used to handle the resolution of a promise in JavaScript. It takes one or two functions as arguments: the first function is called if the promise is resolved, and the second function is called if the promise is rejected. The function(s) are passed the resolved value or error, respectively. The .then() method returns a new promise that is resolved with the value returned by the function, or rejected with any error thrown by the function.

# 9. Can you use await outside of an async function?
    >> No, you cannot use the await keyword outside of an async function. The await keyword is only valid inside async functions, which are functions that are declared with the async keyword.

    >> When you use the await keyword, it waits for a promise to resolve or reject, which means that it suspends the execution of the function until the promise is settled. If you use await outside of an async function, the JavaScript engine will throw a syntax error.

# 10. What is the main difference between synchronous and asynchronous programming?
    >> The main difference between synchronous and asynchronous programming is how the program handles tasks and waits for their completion.

    >> In synchronous programming, tasks are executed one after another, and each task must finish before the next one starts. The program will wait for a task to finish before moving on to the next task. This can sometimes lead to slow program execution, especially if a task takes a long time to complete.

    >> In contrast, asynchronous programming allows tasks to be executed independently of each other. Instead of waiting for a task to finish before moving on, the program can start executing another task while the first one is still running. This can greatly improve program performance, as it allows the program to take advantage of parallel processing and avoid unnecessary wait times.

    >> Asynchronous programming is often used in situations where tasks involve input/output (I/O) operations or network requests, which can be slow and unpredictable. By executing these tasks asynchronously, the program can continue to perform other tasks while waiting for the I/O or network request to complete, resulting in a more responsive and efficient program.

# 11. Give an example of a JavaScript runtime error
    >> An error caused by trying to divide by zero
    >> In this example, the variable y has not been defined or assigned a value, so when the code tries to add 5 to it and assign it to x, a runtime error occurs. The error message will typically indicate that y is undefined or not defined.
        var x = y + 5;
        console.log(x);
*/

switch (num){
    case 1:
        break
    case 2:
        break
    case 3:
        break
    case 4:
        break
    case 5:
        break
    case 6:
        break
    case 7:
        break
    case 8:
        break
}
console.log(num);