// console.log(1);
// console.log(2);
// setTimeout(doSomething, 4000)
// setTimeout(() => {
//   console.log("Lazy Log");
// }, 4000);
// console.log(4);
// console.log(5);
// console.log(6);

// function doSomething() {
    // console.log(3);
// }

/* ------------ fetch----------------- vs --------------- async/await ------------- */
/*
function getUrl(getUrl1){               |      async function getUrl(getUrl2) {
    fetch(getUrl1)                      |          try {
        .then((res) => res.json())      |              const res = await fetch(getUrl)
        .then((data) => {               |              const data = await res.json()
            console.log(data);          |              console.log(data);
        });                             |          };
        .catch((err) => {               |          catch(err) {
            console.log(err);           |              console.log(err);
        });                             |          };
};                                      |      };
*/

/* ------------------------------ fetch method ------------------------------ */
/*            fetch(`https://jsonplaceholder.typicode.com/todos/1`)           */
/*                  .then(response => response.json())                        */
/*                  .then(json => console.log(json))                          */
/* -------------------------------------------------------------------------- */

let timer = 0
const intervalId = setInterval(() => {
    // timer++ or
    console.log(++timer)
    if(timer === 100){
        clearInterval(intervalId)
    }
}, 1)

// clearInterval(intervalId) to stop the timer

const timeoutId = setTimeout(() => {
    console.log("Lazy Dog");
}, 2000);

// clearTimeout(timeoutId) to stop the time