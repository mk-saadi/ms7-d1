/* -------------------------------------------------------------------------- */
//!                                  Promise                                  */
/* -------------------------------------------------------------------------- */
//                          -----function---------
const getData = new Promise((resolve, reject) => {
    // resolve (654456)

    const num = Math.random()*100
    console.log(num);
    if(num < 50){
        resolve ("RIGHT DATA")
        // resolve({num: 56234})
    }
    else{
        reject ("NOT FOUND")
    }
})
//            -----function------------
getData
    .then((data) => console.log(data.num + 22))
    .catch((err) => console.log("ERROR:",err))


// whatever is below
// const ride  = new Promise((resolve, reject) => {

//     const data = "ARRIVED DATA"
//     if(data){
//         resolve("RIDER ARRIVED")
//     }
//     else{
//         reject("ERROR: NO RIDER FOUND")
//     }
// })

// ride
//     .then(value => {
//         console.log(value)
//     })
//     .catch((err) => {
//         console.log(err)
//     })