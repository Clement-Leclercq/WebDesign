
if ("content" in document.createElement("template")) {

        
    for (let i = 0; i < length(Destinations)+1; i++) {
        var template =document.querySelector("#tableIm")

        
        var box = document.querySelector("box");
        var clone = document.importNode(template.content, true);
        var p = clone.querySelectorAll("p");
        var img = clone.querySelectorAll("img)")
        img.src = Destinations[0+i].getImage() ;
        img.alt = Destinations[0+i]._ville ;
        p.textContent = Destinations[0+i].afficher() ;
        ;

        box.appendChild(clone);

        i=+1
    }
}

    else {
        alert("Votre navigateur n'est pas compatible avec ce site internet, merci d'essayer des navigateurs plus récents")
}


//En s'aidant du mdn template premiere ligne de l'exmple du tableau
//Faire une boucle for pour les 12 voyages qui créent des clones qui avec querySelector
//Selectionne par défaut des balise pour les remplir (voir comment remplir l'intérieur)
//Append les clones a chaque fois
