/* Bind 2 objects (borrow function from another object) */
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  introducingMyself: function () {
    return (
      "My full name is: " +
      this.firstName +
      " " +
      this.lastName +
      " i'm: " +
      this.age
    );
  },
};

const member = {
  firstName: "sam",
  lastName: "sam",
  age: 27,
};

let fullName = person.fullName.bind(member);
let introducingMyself = person.introducingMyself.bind(member);

// call not binded function
// it will have the data of member
console.log("binded fullName: ", fullName());
// call not binded function
// it will have the data of member
console.log("binded introducingMyself: ", introducingMyself());
// call not binded function
// it will have the data of person
console.log("not binded introducingMyself: ", person.introducingMyself());

// bind can only be used for functions
// bind: can used to bind two object together --> ex: borrow a function from another object

/* Bind (to prevent losing THIS current element) */

const another_person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    const fullName = this.firstName + " " + this.lastName;
    console.log("fullName: ", fullName);
    return fullName;
  },
};

// not binded
setTimeout(another_person.fullName, 1000);
// binded
setTimeout(another_person.fullName.bind(another_person), 1000);
