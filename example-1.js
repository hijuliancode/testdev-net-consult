import {createAll, cleanConsole} from './data';
const companies = createAll();
let SORTED_COMPANIES = [];

cleanConsole(1, companies);
getCompanies(companies)
    .then((companies) => {
      SORTED_COMPANIES = companies.map((company) => {
        return {
          ...company,
          users: sortUsersByName(company.users),
        };
      });
      console.log(`SORTED_COMPANIES`, SORTED_COMPANIES);
    });

function getCompanies(companies) {
  return new Promise((resolve, reject) => {
    companies = sortCompaniesByTotalUsers(companies);
    for (const companie of companies) {
      const {users} = companie;
      companie.name = toTitleCase(companie.name);
      companie.users = fixUsersName(users);
    }
    if (companies) {
      resolve(companies);
    } else {
      reject(err);
    }
  });
};

function fixUsersName(users) {
  return users.map((user) => {
    const data = {
      firstName: !user.firstName ? ' ' : user.firstName,
      lastName: !user.lastName ? ' ' : user.lastName,
    };
    return {
      ...user,
      firstName: toTitleCase(data.firstName),
      lastName: toTitleCase(data.lastName),
    };
  });
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function sortCompaniesByTotalUsers(companies) {
  return companies.sort((a, b) => parseFloat(b.usersLength) - parseFloat(a.usersLength));
}

function sortUsersByName(users) {
  return users.sort(function(a, b) {
    return a.firstName.localeCompare(b.firstName);
  });
}

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// ✔ Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// ✔ El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// ✔ el apellido y el nombre de cada "user".
// ✔ Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// ✔ y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
