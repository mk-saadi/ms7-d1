/* -------------------------------------------------------------------------- */
//!                        typical interview question                         */
/* -------------------------------------------------------------------------- */

/*
    # 0. JavaScript (JS) is a lightweight, interpreted, or "just-in-time" compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as "Node.js", "Apache CouchDB" and "Adobe Acrobat". JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

    # 1. What is V8 engin?
    # 2. Execution context:
        >> 2.1: Global Execution Context (GEC)
            * Whenever the JavaScript receives a script file, it first creates a default execution context known as the Global Execution Context(GEC)
                GEC is the base/default execution context
                all JS code that is not inside a "function" will be executed
                for every JS file there can be only one execution context
        >> 2.2: Function Execution Context (FEC)
            * search google or watch module 39-3
    # 4. Phases
        >> the execution context is created in two stages
            * creation phase
            * execution phase
    # 5. Call Stack
    # 6. difference between ("i++" vs "++i")
    # 7. difference between "setTimeout()" vs "setInterval()"?
    >> setTimeout: a time event function used to call another function after certain time period but executes the function only once
    >> setInterval: same as setTimeout with a slight difference. the execution of the function occurs continuously according the specified time interval. here the time interval works like a gap between the executions
    # 8. tell me something about JS engin and internal mechanism.
    # 9. what is event loop in JavaScript?
    # 10. if JavaScript is single threaded language, then how does it handle asynchronous call?
    # 11. can you explain the difference between async function and regular function in JavaScript?
    # 12. whats error handling strategy for promises that were rejected while awaiting in JavaScript?

    # 13. what are the states of promise?
    # 14. can you explain what ".then()" method does?
*/

/* -------------------------------------------------------------------------- */
//!                                Context JS                                 */
/* -------------------------------------------------------------------------- */

let a = 5; // global variable

function add(num1, num2) {              // function context
    const result = num1 + num2 + a;     //
    return result                       //
}                                       //

const sum = add(4, 5)
console.log(sum);