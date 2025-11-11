// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

let utilisateurs = [
  { nom: "Elie", age: 24, estAdmin: false },
  { nom: "Celio", age: 21, estAdmin: true },
  { nom: "Alju", age: 30, estAdmin: true },
  { nom: "Beni", age: 19, estAdmin: true }
];


function whoIsAdmin(utilisateurs) {
  let admins = []; // ← le "let" en minuscule ici !

  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].estAdmin === true) {
      admins.push(utilisateurs[i].nom);
    }
  }
  return admins;
}

console.log(whoIsAdmin(utilisateurs));
module.exports = {
	whoIsAdmin,
};


