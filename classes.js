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
// console.log("person 1 --> firstName: ", person1.firstName);
// // access person method (get full name)
// console.log("person 1 --> full name: ", person1.getFullName());
