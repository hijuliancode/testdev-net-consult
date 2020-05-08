import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(6, companies);
console.log(createUsersList(companies));

function createUsersList(companies) {
  const usersList = {};

  for (const company of companies) {
    company.users.forEach((user) => {
      const username = createUsername(`${user.firstName} ${user.lastName} ${user.age}`);
      usersList[username] = user.car;
    });
  }

  return usersList;
}

function createUsername(username) {
  let str = '';
  str = removeSpecialCharacters(username);
  str = camelize(`car By ${str}`);
  return str;
}

// Helpers
function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}
function camelize(str) {
  return str.split(' ').map((word, index) => {
    if (index == 0) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
      .join('');
}


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un nouve objet dont les attributs sont la concaténation du nom, du prénom et
// de l'âge de chaque "user". Chaque attribut devra avoir la valeur du booléen
// "car". Voir exemple ci-dessous.

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);
