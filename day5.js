// >> # Challenge : Can you Inherit Classes?,

//  - Inherit a base class ( Eg. AquaticAnimals extends Animals , .. )

//  - Use Static declarations and properties

//  - I'll lay the first step for you,

class Herbivorus {
  static description = 'Feed them 🌾,🍄 and 🌿';
  //..more methods based on habitat
}

class Carnivorus {
  static description = 'Feed them 🐓 and 🐑';
  //..more methods based on habitat
}

const Food = Object.freeze({ veg: Herbivorus, meat: Carnivorus });

class Animal {
  static _animals = [];
  animal;
  constructor(name, food) {
    this.name = name;
    this.food = food;
    this.animal = { name: this.name, food: this.food };
  }

  set animals(value) {
    Animal._animals.push({
      ...this.animal,
      ...value,
      description: Food[this.food].description
    });
  }

  static get fetchAllAnimals() {
    return this._animals;
  }
}

// ('CODE THIS ✔️');

class Terestrial extends Animal {
  constructor(name, food, speed) {
    super(name, food);
    this.speed = speed;
    super.animals = { speed };
  }

  // Land Animals based Functions
  get displayAbility() {
    return `${this.name} can ${
      this.speed > 10 ? 'run' : 'walk'
    } at a speed of ${this.speed} km/hr`;
  }

  get detail() {
    return Animal.fetchAllAnimals.find(({ name }) => name === this.name);
  }
}

class Aquatic extends Animal {
  // Marine Animals based Functions
}

// const simba = new Terestrial('Lion 🦁', 'meat', 80);
// console.log(simba.detail);
// // Outputs: {"name":"Lion 🦁","food":"meat","speed":80,"description":"Feed them 🐓 and 🐑"}

// 🧩 Practical use Case

const dataFromDB = [
  { Name: 'Lion 🦁', food: 'meat', speed: 80 },
  { Name: 'Cow 🐮', food: 'veg', speed: 10 },
  { Name: 'Deer 🦌', food: 'veg', speed: 60 },
  { Name: 'Fox 🦊', food: 'meat', speed: 30 }
];

let mappedData = dataFromDB.map(
  animal => new Terestrial(...Object.values(animal))
);

// console.log(mappedData);
// Outputs: [Terestrial, Terestrial, Terestrial, Terestrial] 🔥 Class itself

// console.log(mappedData.map(animal => animal.name));
// Outputs: ["Lion 🦁", "Cow 🐮", "Deer 🦌", "Fox 🦊"]

console.log(mappedData.map(animal => animal.detail));
// Outputs: [{name: "Lion 🦁", food: "meat", speed: 80, description: "Feed them 🐓 and 🐑"}, {…}, {…}, {…}]

console.log(mappedData.map(animal => animal.displayAbility));
// Outputs: ["Lion 🦁 can run at a speed of 80 km/hr", "Cow 🐮 can walk at a speed of 10 km/hr", "Deer 🦌 can run at a speed of 60 km/hr", "Fox 🦊 can run at a speed of 30 km/hr"]

// CODE THIS ✔️ on Order of Priority❗️
// ----------------------------------

//      ✔️ Use ❗️❗️ Inheritance ❗️❗️

//      ✔️ Have Getter Setter methods

//      ✔️ Use public and private values based on requirement

//      ✔️ Have Static values specific to Class

//      ✔️ Write better and scalable Class

//      ✔️ Perform tasks when a class is instantiated

// Did I miss something ❓
// Do leave it in Comments below 💭
