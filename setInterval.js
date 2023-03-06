console.log(1);
console.log(2);
setInterval(() => {
    // console.log(3);
}, 1000)
console.log(4);
console.log(5);
console.log(6);

let timer = 0
const setIntervalId = setInterval(() => {
    console.log("i love you",timer++,"times");
}, 1)