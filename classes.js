// class in js is a template for JavaScript objects.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return "Full name: " + this.firstName + " " + this.lastName.toString();
  }
  // getter: to get a property (age)
  get age() {
    return this._age;
  }
  // setter: to set a property (age)
  set age(value) {
    if (value < 18) {
      console.log("Age is too young !");
      return;
    }
    this._age = value;
  }
}

let person1 = new Person("sam", "sam", 27);
// access person obj (call contructor)
console.log("person 1: ", person1);
// // access person first name
console.log("person 1 --> firstName: ", person1.firstName);
// // access person method (get full name)
console.log("person 1 --> full name: ", person1.getFullName());

// classes: are function type so we can write them in function style too
console.log("class type: ", typeof Person);

/* CLOCK written in FUNCTON style */
function Clockfunction({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}

let clock = new Clockfunction({ template: "h:m:s" });
// clock.start();

/* CLOCK written in CLASS style */
class ClockClass {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock2 = new ClockClass({ template: "h:m:s" });
// clock2.start();

/* Inheritance */
class ExtendedClock extends ClockClass {
  constructor(options) {
    super(options);
    let { precision = 2000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const clock3 = new ExtendedClock({ template: "h:m:s", precision: 1000 });
// clock3.start();

/* Static */
