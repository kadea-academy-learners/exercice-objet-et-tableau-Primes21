// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
const eleves = [
	{
		nom: "MABIALA",
		notes: [20, 15, 18, 17],
	},
	{
		nom: "FOFO",
		notes: [15, 18, 13, 10],
	},
	{
		nom: "TASISU",
		notes: [20, 15, 18, 17],
	},
	{
		nom: "BOLA",
		notes: [20, 15, 18, 17],
	},
	{
		nom: "BIMPULA",
		notes: [20, 15, 18, 17],
	}
]

function showStudentBulletin(eleves) {
  let bulletins = [];

  for (let i = 0; i < eleves.length; i++) {
    let eleve = eleves[i];

    // 1. Calcul de la moyenne
    let moyenne = 0;
    if (eleve.notes.length > 0) {
      let somme = 0;
      for (let j = 0; j < eleve.notes.length; j++) {
        somme += eleve.notes[j];
      }
      moyenne = somme / eleve.notes.length;
    }

    // 2. Arrondir à 2 décimales
    moyenne = Number(moyenne.toFixed(2));

    // 3. Déterminer le commentaire
    let commentaire = "";
    if (moyenne >= 16) commentaire = "Excellent";
    else if (moyenne >= 14) commentaire = "Très Bien";
    else if (moyenne >= 12) commentaire = "Bien";
    else if (moyenne >= 10) commentaire = "Passable";
    else commentaire = "À revoir";

    // 4. Ajouter le résultat dans le tableau
    bulletins.push({
      nom: eleve.nom,
      moyenne: moyenne,
      commentaire: commentaire,
    });
  }

  return bulletins;
}
console.log(showStudentBulletin(eleves));



module.exports = {
	showStudentBulletin,
};