/* Protected */
class CoffeeMachine {
  _waterAmount = 0; // _ for protected property
  _isGood = false;

  set waterAmount(value) {
    if (value < 0) return (this._waterAmount = 0);
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }
  get coffeeTaste() {
    // coffe taste can be read / not modified
    return this.isGood;
  }
  _coffeeInsight() {
    // protected method
    return (
      "amount of water " + this._waterAmount + " it tastes " + this._isGood
    );
  }

  constructor(power) {
    this._power = power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

console.log("amount of water: ", coffeeMachine.waterAmount);
coffeeMachine.waterAmount = 500; // add amount of water
console.log("amount of water: ", coffeeMachine.waterAmount);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
console.log("coffee full info: ", coffeeMachine._coffeeInsight());

// NB:
// protected (methods / properties) are precededed with _ (underscore)
// protected properties can be only acceded / modified through getter / setter functions
// protected propertis are inherited

/* PRIVATE */
class CoffeeMachine2 {
  #waterAmount = 0;
  #taste = "good"; // accessible only inside the class or with a getter function

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
  #coffeeTaste() {
    return this.#taste;
  }
}

let machine = new CoffeeMachine2();

machine.waterAmount = 100;
console.log(machine.waterAmount); // Error
machine.waterAmount = 200;
console.log(machine.waterAmount); // Error
// console.log("coffee taste: ", machine.#coffeeTaste()); // can't access it value

// NB:
// private: add # before properties / methods --> private
// private: roperties / methods can't be accessed from outisde class / inherenting classes
// private: can't access fields --> this['filed_name']
// private: methods can be only accessible / modified through --> getter / setter
