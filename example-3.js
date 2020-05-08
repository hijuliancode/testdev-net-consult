import {cleanConsole, createAll} from './data';
// import {getCompanies} from './example-1';
let companies = createAll();

companies = [
  {
    name: 'Dior',
    id: 5,
    isOpen: false,
    users: [
      {firstName: 'Alina', lastName: ' ', age: 68, car: true, id: 35},
      {firstName: 'Anna', lastName: ' ', age: 77, car: false, id: 14},
      {firstName: 'Anna', lastName: 'Dupont', age: 109, car: false, id: 25},
    ],
    usersLength: 41,
  },
  {
    id: 3,
    isOpen: true,
    name: 'nike',
    users: [
      {firstName: ' ', lastName: ' ', age: 109, car: true, id: 4},
      {firstName: ' ', lastName: ' ', age: 61, car: false, id: 8},
      {firstName: ' ', lastName: 'Angello', age: 27, car: false, id: 20},
      {firstName: ' ', lastName: 'Angello', age: 100, car: true, id: 27},
      {firstName: 'alina', lastName: ' ', age: 91, car: false, id: 11},
      {firstName: 'Alina', lastName: 'Kassir', age: 116, car: false, id: 13},
      {firstName: 'Alina', lastName: 'Kassir', age: 87, car: true, id: 19},
      {firstName: 'Alina', lastName: ' ', age: 68, car: true, id: 35},
      {firstName: 'Anna', lastName: ' ', age: 77, car: false, id: 14},
      {firstName: 'Anna', lastName: 'Dupont', age: 109, car: false, id: 25},
      {firstName: 'Anna', lastName: ' ', age: 95, car: false, id: 29},
      {firstName: 'Annah', lastName: ' ', age: 31, car: true, id: 7},
      {firstName: 'Annah', lastName: ' ', age: 70, car: false, id: 38},
      {firstName: 'Fabien', lastName: 'Angello', age: 25, car: true, id: 15},
      {firstName: 'Fabien', lastName: ' ', age: 12, car: false, id: 24},
      {firstName: 'Fathma', lastName: 'Dupont', age: 37, car: false, id: 0},
      {firstName: 'Fathma', lastName: 'Dupond', age: 50, car: false, id: 1},
      {firstName: 'Fathma', lastName: ' ', age: 64, car: true, id: 12},
      {firstName: 'Fathma', lastName: 'Dalachra', age: 116, car: true, id: 18},
      {firstName: 'Fathma', lastName: 'Hussein', age: 73, car: false, id: 33},
      {firstName: 'Jane', lastName: 'Wartani', age: 112, car: true, id: 6},
      {firstName: 'Jane', lastName: ' ', age: 87, car: true, id: 36},
      {firstName: 'Joe', lastName: ' ', age: 16, car: true, id: 9},
      {firstName: 'Joe', lastName: 'Wartani', age: 12, car: false, id: 30},
      {firstName: 'Joe', lastName: ' ', age: 18, car: false, id: 32},
      {firstName: 'Josiane', lastName: ' ', age: 25, car: false, id: 10},
      {firstName: 'Josiane', lastName: 'Dupont', age: 117, car: false, id: 22},
      {firstName: 'Josiane', lastName: ' ', age: 59, car: true, id: 28},
      {firstName: 'Merwan', lastName: 'Wartani', age: 55, car: true, id: 16},
      {firstName: 'Merwan', lastName: 'Dalachra', age: 40, car: true, id: 21},
      {firstName: 'Mohamed', lastName: 'Hussein', age: 62, car: true, id: 3},
      {firstName: 'Mohamed', lastName: ' ', age: 26, car: false, id: 5},
      {firstName: 'Mohamed', lastName: 'Kassir', age: 65, car: false, id: 26},
      {firstName: 'Mohamed', lastName: 'Dupont', age: 76, car: true, id: 31},
      {firstName: 'Seb', lastName: ' ', age: 83, car: true, id: 17},
      {firstName: 'Walid', lastName: 'Kassir', age: 74, car: true, id: 2},
      {firstName: 'Walid', lastName: ' ', age: 61, car: false, id: 23},
      {firstName: 'Walid', lastName: ' ', age: 27, car: false, id: 34},
      {firstName: 'Walid', lastName: 'Dupont', age: 51, car: true, id: 37},
    ],
    usersLength: 41,
  },
];
companies = companies.reverse();

cleanConsole(3, companies);
console.log(validation(companies));

function validation(companies) {
  for (const company of companies) {
    checkAllCompanies(companies);
    checkAllUsers(company);
  }
}

function checkAllCompanies(companies) {
  for (const company of companies) {
    console.log('Company', company);
    if (!checkFirstLetter(company.name)) {
      return false;
    } else {
      return true;
    }
  }
}

function checkAllUsers({users}) {
  console.log('..users', users);
  for (const user of users) {
    console.log('...user', user);
    if (!checkFirstLetter(user.firstName) || !checkFirstLetter(user.lastName)) {
      return false;
    } else {
      return true;
    }
  }
}

function checkFirstLetter(word) {
  console.log('WORD', word);
  if (word) {
    return (word[0] === word[0].toUpperCase());
  } else {
    return true;
  }
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
