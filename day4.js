class Hero {
  constructor(name, universe) {
    this.name = name;
    this.universe = universe;
  }

  get description() {
    return `${this.name} is from ${this.universe} universe`;
  }
}

const hero1 = new Hero('IronMan 🤖', 'Marvel');

console.log(hero1.description);
// Outputs: IronMan 🤖 is from Marvel universe

// ('NOT THAT 💩');

class Flash {
  constructor(name, universe, power) {
    this.name = name;
    this.universe = universe;
    this.power = power;
  }

  get description() {
    return `${this.name} is from ${this.universe} universe and ${this.power}`;
  }
}

const hero2 = new Flash('Flash 👩‍🚒', 'DC', 'runs very Fasttttt');
console.log(hero2.description);
// Outputs: Flash 👩‍🚒 is from DC universe and runs very Fasttttt

// ('CODE THIS ✔️');
class Spidey extends Hero {
  constructor(name, universe, power) {
    super(name, universe);
    this.power = power;
  }

  get description() {
    return `${super.description} and ${this.power}`;
  }
}

const hero3 = new Spidey('SpiderMan 🕷', 'Marvel', 'shoots web');

console.log(hero3.description);
// Outputs: SpiderMan 🕷 is from Marvel universe and shoots web

// CODE THIS ✔️ Key Points
// -----------------------

// ✔️ Follows 'use strict'; mode

// ✔️ Use Inheritance

// ✔️ Private fields
//      ❗️ only available in chrome and latest node

// ✔️ Super keyword allows to call parent declarations

// ✔️ static declarations and functions

// ✔️ Initialization
