//executing below 3 callback functions with async and geenrators
function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved task 1");
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved task 2");
    }, 1500);
  });
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved task 3");
    }, 2000);
  });
}

// Implementation using async
async function asyncAwait() {
  console.time();
  console.log("Resolving task 1");
  let result1 = await doTask1();
  console.log(result1);
  console.timeEnd();

  console.time();
  console.log("Resolving task 2");
  let result2 = await doTask2();
  console.log(result2);
  console.timeEnd();

  console.time();
  console.log("Resolving task 3");
  let result3 = await doTask3();
  console.log(result3);
  console.timeEnd();
}

asyncAwait();

// Implementation using generator function
function* generatorfunc() {
  console.time();
  console.log("Generator Resolving task 1");
  yield doTask1();
  console.timeEnd();

  console.time();
  console.log("Generator Resolving task 2");
  yield doTask2();
  console.timeEnd();

  console.time();
  console.log("Generator Resolving task 3");
  yield doTask3();
  console.timeEnd();
}

let genInitiate = generatorfunc();

async function xyz() {
  for (let genOutput of genInitiate) {
    let abc = await genOutput;
    console.log(abc);
  }
}

xyz();
