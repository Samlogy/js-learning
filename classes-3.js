/* Private / Protected (methods / properties) */

class CoffeeMachine {
  _waterAmount = 0; // _ for protected property

  set waterAmount(value) {
    if (value < 0) return (this._waterAmount = 0);
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
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

// NB:
// protected (methods / properties) are precededed with _ (underscore)
// protected properties can be only acceded / modified through getter / setter functions
// protected propertis are inherited
