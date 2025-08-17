// ----------------- CASE 1: Promise.all -----------------

// p1 resolves after 3 sec
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 Success"), 3000);
});

// p2 rejects after 2 sec
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 Failed"), 2000);
});

// p3 resolves after 2 sec
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 Success"), 2000);
});

// Promise.all waits for all promises to complete
// ✅ If all succeed → returns array of values
// ❌ If any fails → immediately rejects (here p2 fails after 2s)
Promise.all([p1, p2, p3])
  .then(res => {
    console.log("Promise.all Result:", res);
  })
  .catch(err => {
    console.log("Promise.all Error:", err); // "p2 Failed" after 2s
  });


// ----------------- CASE 2: Promise.allSettled -----------------

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p4 Success"), 3000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p5 Failed"), 2000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p6 Success"), 2000);
});

// Promise.allSettled waits for ALL to settle (success or fail)
// Always returns array with {status, value/reason}
Promise.allSettled([p4, p5, p6]).then(res => {
  console.log("Promise.allSettled Result:", res);
  /*
    [
      { status: "fulfilled", value: "p4 Success" },
      { status: "rejected", reason: "p5 Failed" },
      { status: "fulfilled", value: "p6 Success" }
    ]
  */
});


// ----------------- CASE 3: Promise.race -----------------

const p7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p7 Success"), 3000);
});

const p8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p8 Success"), 1000);
});

const p9 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p9 Success"), 2000);
});

// Promise.race → first promise to settle wins
// Here p8 resolves first at 1s → result "p8 Success"
Promise.race([p7, p8, p9])
  .then(res => console.log("Promise.race Result:", res))
  .catch(err => console.log("Promise.race Error:", err));


// ----------------- CASE 4: Promise.any -----------------

const p10 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p10 Failed"), 1000);
});

const p11 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p11 Success"), 2000);
});

const p12 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p12 Failed"), 3000);
});

// Promise.any → waits for first SUCCESS
// Ignores rejections
// Here p11 is first success after 2s → result "p11 Success"
Promise.any([p10, p11, p12])
  .then(res => console.log("Promise.any Result:", res))
  .catch(err => console.log("Promise.any Error:", err.errors));
