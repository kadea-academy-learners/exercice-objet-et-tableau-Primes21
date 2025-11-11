// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [
	{
  id: 1,
  nom: "Elie",
  email: "elie@example.com",
  password: "1234",
  estConnecte: true,
  estBloque: false
},
{
  id: 2,
  nom: "fofo",
  email: "fofo@example.com",
  password: "5678",
  estConnecte: false,
  estBloque: false
},
{
  id: 2,
  nom: "jean",
  email: "jean@example.com",
  password: "9012",
  estConnecte: false,
  estBloque: true
,}


];

function signUp(nom, email, password, confirmPassword) {
  // Vérifier si l'email existe déjà
  for (let i = 0; i < baseDeDonnees.length; i++) {
    if (baseDeDonnees[i].email === email) {
      return "Cet email est déjà utilisé.";
    }
  }

  // Vérifier si les mots de passe correspondent
  if (password !== confirmPassword) {
    return "Les mots de passe ne correspondent pas";
  }

  // Créer un nouvel utilisateur
  let nouvelUtilisateur = {
    id: baseDeDonnees.length + 1,
    nom: nom,
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false
  };

  // Ajouter dans la base
  baseDeDonnees.push(nouvelUtilisateur);

  return nouvelUtilisateur;
}

// --------------- CONNEXION ----------------
function login(email, password) {
  for (let i = 0; i < baseDeDonnees.length; i++) {
    let user = baseDeDonnees[i];

    if (user.email === email) {
      if (user.estBloque) {
        return "Utilisateur bloqué.";
      }

      if (user.password !== password) {
        return "Mot de passe incorrect.";
      }

      user.estConnecte = true;
      return user;
    }
  }

  return "Utilisateur non trouvé.";
}


module.exports = { baseDeDonnees, signUp, login };
