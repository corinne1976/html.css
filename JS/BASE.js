// syntaxe de Base

// commentaire sur une lignes

/*ici je fais un commentaire
sur plusieur lignes

// --1-- : Déclarer une variable en js (c'est une mémoire tampon ou lon peut stocker)
// je crais une boite et je lui donne un nom
// var Prenom;

//-- 2 : j'affecte une valeur a une variable(je mets une valeur dans ma variable)
// Prenom = "corinne";
// var Prenom = "corinne";

// --3 : une instrctuion ce termine toujours par ; aussi il est possbible d'ecrire plusieurs instructions sur une seule ligne( variable ,argument dans les fonctions)
// inst_1;
// inst_2; inst_3;

//--4 : afficher une boite de dialogue (2 facons)
// alert("super, tu es arrivé sur mon site !");
// window.alert("super, tu es arrivé sur mon site");

// --5 : afficher dans la console (ici , la valeur de ma variable prenom)
// console.log(Prenom);

// --6 : afficher dans la page web
// document.write("A la pause vous aurez des haribos pik");

// --7 : demander à l'utilisateur une valeur (2 facons)
// windows.prompt("question: on est quel jour ?", "jour de la semaine");
// prompt("Question: on est quel jour?", "jour de la semaine");

// --et pour manipuler cette valeur, je n'oublie pas de la stocker
// var jour = prompt("Question: on est quel jour?", "jour de la semaine");
// console.log(jour)


// --8 : attention /!\ le js est sensible à la case('case sensitive')
// mavariable =/= maVariable =/= maVariable
//                 camel case      snake case

//- : une variable ne peut pas commencer par un chiffre , ne doit pas contenir que des caractères alphanumériques, et ne peut pas çetre un mots
// réservé(var, for .. des éléments natifs du language js)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

// --10  une variable peut être déclarée de facon explicite :
// var fruit = "fraise";
// ou implicite
// haribo = "fraise";
// haribo = "Tagada";
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

/*-------------------------------------------------------------------------
/~~~~~~~~~~~~~LES TYPES DE VARIABLES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
-------------------------------------------------------------------------------*/

// * 1 CHAINE DE CARACTERES 1 caractere par caractere avec les guillemets pour la valeur (string)
  var vacances = "2017";
  var destination = "Australie";

// --2  un nombre entier  interpreter les nombre en entier(integer ou int exemple additionner des chiffres)
  var annee = 2017;

//3 un nombre décimal  (float)
  var nombre_a_virgule = -5.32;

// -- 4 un booléen =en fonction de la condition (boolean = VRAI/FAUX + TRUE/FALSE)
 var unBooleen = false; //--true

// 5 les constantes

/*La declarations const permet de créer une constante accdessible uniquement en lecture. contrairement à une variable sa valeur ne peut plus être modofiée par réaffectation plus bas dans le code.
une constante ne peut pas être déclarée a nouveau dans le même script.

/* -- par convention les constantes sont en majuscules*/
 const PAYS = "France";

// -- 6 typeof permet de connaitre le type de ma variable
console.log(vacances);
 console.log(typeof vacances);
 console.log(annee);
 console.log(typeof annee);

// en js les variables sont auto-typées
// on peut convertir une variable de type number en string et aussi en number avec les fonctions natives de js
// la fonction parseInt( renvoie un entier à partir d'une chaines de caractères)
var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// string => number
unchiffre = parseInt(typeof unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// je ré-affecte une valeur
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// string => float
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// number => string
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);
