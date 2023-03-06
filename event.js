/* -------------------------------------------------------------------------- */
//!                                   event                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------- watch module 39-7 --------------------------- */
// # things
    // >> call stack
    // >> event queue
    // >> understand event loop
    // >> 

function a(){
    console.log("a");
    b()
    console.log("aa");
}
function b(){
    console.log("b");
    c()
    console.log("bb");
}
function c(){
    console.log("c");
    d()
    console.log("cc");
}
function d(){
    console.log("d");
    e()
    console.log("dd");
}
function e(){
    console.log("e");
    f()
    console.log("ee");
}
function f(){
    console.log("f");
    console.log("---");
    console.log("ff");
}

setTimeout(() => {
    console.log("100000 inside");
}, 1000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
a()