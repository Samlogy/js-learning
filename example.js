class Person {
  persons = [];
  constructor(id, name, position, experience) {
    // this.name = name;
    // this.position = position;
    // this.experience = experience;
  }
  addPerson(id, name, position, experience) {
    const newPerson = { id, name, position, experience };
    this.persons = [...this.persons, newPerson];
    return newPerson;
  }
  editPerson(id, editPerson) {
    return (this.persons = this.persons.map((person) => {
      if (person.id === id) {
        return { id, ...editPerson };
      }
      return person;
    }));
  }
  deletePerson(id) {
    return (this.persons = this.persons.filter((person) => person.id !== id));
  }
  getOnePerson(id) {
    const person = this.persons.filter((person) => person.id === id);
    if (person) return person;
    return "Do not exists !";
  }
}

let person = new Person("sam", "Dev", "3");
// person.addPerson(1, "sam", "Dev", "3");
// person.addPerson(2, "bob", "Ops", "2");
// console.log(person);

// person.deletePerson(1);
// console.log(person);

// person.editPerson(2, { position: "Engineer", experience: "3" });
// console.log(person);

// person.getOnePerson(2);
// console.log(person);

class Engineer extends Person {
  engineers = [];
  static promotion = "Lead";
  #salary = "100k";

  constructor(name, experience) {
    super(name, experience);
  }

  addEgineer(id, name, experience) {
    const person = this.addPerson(id, name, "", experience);
    delete person.position;
    this.engineers = [...this.engineers, person];
    return person;
  }

  static creatPromotion() {
    this.promotion = "Lead Tech";
  }
  // not accessible
  #fire(id) {
    return (this.engineers = this.engineers.filter(
      (engineer) => engineer.id !== id
    ));
  }
  _switchTeam(id) {
    this.engineers = this.engineers.map((engineer) => {
      if (engineer.id === id) {
        return { ...engineer, position: "lead" };
      }
      return engineer;
    });
    return this.engineers;
  }
  set salary(value) {
    if (value <= 0) value = "100k";
    this.#salary = value;
  }
  get salary() {
    console.log("salary: ", this.#salary);
    return this.#salary;
  }
}

let engineer = new Engineer("Samy", "3");
engineer.addEgineer(1, "Samy", "3");
engineer.addEgineer(2, "Samy", "3");
console.log("eng: ", engineer);

Engineer.creatPromotion();
console.log("eng: ", Engineer.promotion);

engineer._switchTeam(2);
engineer.salary;
engineer.salary = "200k";
engineer.salary;
console.log("eng: ", engineer);
