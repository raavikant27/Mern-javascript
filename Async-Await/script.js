/**
 * asyn is key words which is use dto create asyn function
 * it walys return a promise
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

//1-way of creaating asyn function 

// async function getData() {
//     return "ravikant singh";
// }

// const dataPromise = getData();
// dataPromise.then(
//     data => console.log(data));


//2n example 
//creating a promise 
const p =new Promise((resolve,reject)=>{
    resolve("Promise Resolved Value");
});
async function getData(){
    //i need promise here return
    return p;
}

const dataPromise=getData();
dataPromise.then(
    (res)=>console.log(res)
);