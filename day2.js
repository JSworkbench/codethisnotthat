// Eg.Instance 🍎 = { display : '🍎' , name : 'Apple' , color : 'green' , type : 'fruit' }

// let foodItems = [🍎,🍟,🥩,🍆,🍎,🍉,🍎,🍐,🍇,🍉,🍌,🥩,🍔,🍉,🥔,🍑,🍆,🍊,🍋,🍉,🍓,🍈,🍎,🥭,🍍,🍖,🍉,🥦,🍗,🍉,🍔,🍒,🥬];

// >> # Challenge : We need all the foodItems that can be,

//  - Red color fruits only 🍓✔️

//  - junk food is not Allowed 🍟❌

//  - No meat items 🥩 ❌

//  - First vegetable only 🍆✔️

//  - Should not have repetetive items 🍉,🍉 ❌ 🍉✔️

//  - Finally Outputs in sort order by name [ 'Apple 🍎' ,'Cherry 🍒'  . . .]

function challenge() {
  // return {...} ??
}

const challenge = _ =>
  [
    ...new Set(
      [
        ...foodItems.filter(
          ({ color, type }) => color === 'red' && type === 'fruit'
        ),
        foodItems.find(({ type }) => type === 'veg')
      ].map(({ name, display }) => `${name} ${display}`)
    )
  ].sort();

console.log(challenge());
// Outputs >> [ 'Apple 🍎' , 'Bottle Guard 🍆' , 'Cherry 🍒' , 'Strawberry 🍓' , 'Watermellon 🍉' ]

// Bonus
const bonus = _ =>
  challenge().reduce(
    (acc, { type }) =>
      type == 'fruit'
        ? { fruit: ++acc.fruit, veg: acc.veg }
        : { fruit: acc.fruit, veg: ++acc.veg },
    { fruit: 0, veg: 0 }
  );

console.log(bonus());
// Outputs >> { fruit: 4, veg: 1 }

// CODE THIS ✔️ Challenge Array Functions
// ---------------------------------------
// ✔️ Array.filter()
// Outputs data with only true return values
// ✔️ Array.find()
// Outputs first element that returns true
// ✔️ Array.map()
// Returns a new Array with every possible changes imaginable.
// ✔️ Array.reduce()
// Can return an any value based on the reducer function provided.
// ✔️ Array.sort()
// Returns the sorted array ( default order is ascending )
// ✔️ . . .array
// Spread Operator ( expands arrays, string ,any iterables)
// ✔️ [...new Set(array)]
// Removes duplicates
