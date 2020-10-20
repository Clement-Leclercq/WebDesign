


for (let i = 0; i < length(Destinations)+1; i++) {
    var template =document.querySelector("#tableIm")

    var box = document.querySelector("box");
    var clone = document.importNode(template.content, true);
    var p = clone.querySelectorAll("p");
    p.textContent = Destinations.afficher() ;
    Destinations[1].textContent = "Stuff";

    box.appendChild(clone);

    i=+1
}
//En s'aidant du mdn template premiere ligne de l'exmple du tableau
//Faire une boucle for pour les 12 voyages qui créent des clones qui avec querySelector
//Selectionne par défaut des balise pour les remplir (voir comment remplir l'intérieur)
//Append les clones a chaque fois


