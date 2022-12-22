/* increment it own local counter */

// Initiate counter
let counter = 0;

// Function to increment counter
function increment() {
  let counter = 0; // this counter could not be affected by external code
  counter += 1;
  console.log("local counter (increment): ", counter);
}

/* decrement -->  the global counter */

function decrement() {
  counter -= 1;
  console.log("global counter (decrement): ", counter);
}

console.log("global counter: ", counter); // display global counter

increment(); // increment local counter (add)
decrement(); // decrement local counter (decrement)
increment();
decrement();
increment();
decrement();

/* in this example plus() access to counter of add() */
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

console.log("add: ", add());

// js variables can be local / global
// function can access all variables inside / outside the function
// Global and local variables with the same name are different variables. Modifying one, does not modify the other.

/* CLOSURE */
// closure are self-invoking function, can have it own private variables, can be only called through add()

const addClosure = (function () {
  let counter = 0;
  return () => {
    counter += 1;
    console.log("add CLOSURE: ", counter);
    return counter;
  };
})();

addClosure();
addClosure();
addClosure();
