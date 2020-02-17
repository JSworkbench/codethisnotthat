console.log(
  `CODE THIS ✔️ about console.log()❓❓  Yu've got to be kiddin me...🤣`
);

console.log(
  'This is %cMy stylish message',
  `font-style: italic;padding: 2px;  text-shadow: 2px 2px 2px green;font-weight:bold`
);

console.log('I am Log');
console.warn('I am Warn');
console.info('I am Info');
console.error('I am Error');
console.assert(1 + 1 === 3, `Wow,ur math is off the charts`);

console.table(['red❤️', 'yellow💛', 'green💚']);
console.table(
  [
    { name: 'john', age: 26 },
    { name: 'sara', age: 20 }
  ],
  ['name']
);

const greet = name => {
  //   console.count('greeted');
  console.count(name);
  return `hi ${name}`;
};

greet('hari');
greet('Raj');
greet('hari');

let i = 1;
console.time('Performance 🚀');
// Some Complex program logic or DB query
while (i < 1000) {
  i++;
}
console.timeEnd('Performance 🚀');

fetch('IAmNotActualAPI');
