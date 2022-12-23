/* Filter no HOF */
function filterEven(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("filter no HOF: ", filterEven(arr));

/* Filter no HOF */
const filterEven2 = (x) => x % 2 === 0;
console.log("filter no HOF 2: ", arr.filter(filterEven2));

/* Filter with HOF (function as an argument) */
function filterNumbers(arr, callback) {
  const l1 = [];
  const l2 = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? l1.push(arr[i]) : l2.push(arr[i]);
  }
  return { l1, l2 };
}

const even = (x) => x % 2 === 0;
const odd = (x) => x % 2 !== 0;

console.log("filter with HOF: ", filterNumbers(arr, even));

function isGreaterThan5(x) {
  return x > 5;
}
function filterGreaterThan5(arr, callback) {
  //   return arr.filter(callback);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) && res.push(arr[i]);
  }
  return res;
}
console.log("greater than 5: ", filterGreaterThan5(arr, isGreaterThan5));

/* CHAINING functions */
Array.prototype.filterFunction = (callback) => {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filteredArr.push(this[i]) : null;
  }
  return filteredArr;
};
console.log("typeof filter: ", typeof Array.prototype.filterFunction);
console.log(
  "even number greater than 5: ",
  arr.filterFunction((x) => x > 5).filterFunction((x) => x % 2 === 0)
);

/* return a function as a result */
function calculate(operation) {
  switch (operation) {
    case "ADD":
      return function (a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
      };
    case "SUBTRACT":
      return function (a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
      };
  }
}

calculate("ADD")(1, 2);
const computeAdd = calculate("ADD");
computeAdd(1, 2);

// HOF: can be pass as an argument to a function (to process something), or even returned
