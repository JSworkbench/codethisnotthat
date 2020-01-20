const student1 = {
  name: 'John 👦',
  score: 'B+ 🤟',
  pass: true
};

console.log(resultsprint(student1));
// Outputs "John 👦 passed with a scoreB+ 🤟"

// ('NOT THAT 💩');
function resultsprint(student) {
  let result = 'failed';

  if (student.pass) {
    result = 'passed';
  }

  return student.name + ' ' + result + ' with a score ' + student.score;
}

// Can you spot All (CODE THIS) ❓
// Comment below 💭

// ('CODE THIS ✔️');
const displayResult = ({ name = 'Some guy', score = 'C-', pass = true }) =>
  `${name} ${pass ? 'passed' : 'failed'} with a score ${score}`;

console.log(displayResult(student1));
// Outputs "John 👦 passed with a scoreB+ 🤟"

// Did you spot them All ❓ Have more ❓
// Fishy Fact🦈 : Can you spot Something fishy? 🤔

// Comment below 💭

// CODE THIS ✔️ on Order of Priority❗️
// ----------------------------------

// ❗️❗️ Prefer Template Literals over string concatenation
// 		eg. `Task ${status}` over 'Task' + status

// ❗️❗️ Destructuring reduces repetion
// 		eg. const {name, age} = person instead of person.name, person.age

// ❗️  Terneray operator instead of if else block

// ❗️  Default / Optional Value in functions Params (or) Strict NULL Checks

// ❗️  Follow Javascript Conventions
//       - Camel case for variables and methods.
//       - Pascal case for types and classes in JavaScript.
//       - Upper case snake case for constants.

// ❗️  Arrow Function are more elegant

// Did you find the Fishy Fact🦈 yet?

// Not Clear ? Visit https://www.youtube.com/myworkbench
// Follow Us for more such interesting Code reviews.
