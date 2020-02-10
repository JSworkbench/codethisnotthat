const greetText = 'Hi User .. ! Good to have you here.';
let dataFromServer = 'Brad';


function getName() {
  setTimeout(() => {
    return dataFromServer;
  }, 100);
}


function greet() {
  console.log(greetText.replace('User', getName()));
}
// greet();
// Not Working Approach


// ('NOT THAT 💩');
// Let's make it work first
function getName(callback) {
  setTimeout(() => {
    callback(dataFromServer);
  }, 100);
}

function greet() {
  getName(name => {
    console.log(greetText.replace('User', name));
  });
}
greet();
// Callback Hell


// ('NOT THAT 💩');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(result => {
    result
      .json()
      .then(users => {
        dataFromServer = users[5].name;
        greet();
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

// Promise Hell



// ('CODE THIS ✔️');

const fetchData = async _ => {
  return await fetch('https://jsonplaceholder.typicode.com/users');
};

dataFromServer = fetchData();

greet();

