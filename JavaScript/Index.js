



letclone = document.importNode(template.content, true);




newContent= clone.firstElementChild.innerHTML
    .replace(/{{pays}}/g, v.marque
    .replace(/{{couleur}}/g, v.couleur);

clone.firstElementChild.innerHTML= newContent


//En s'aidant du mdn template premiere ligne de l'exmple du tableau
//Faire une boucle for pour les 12 voyages qui créent des clones qui avec querySelector
//Selectionne par défaut des balise pour les remplir (voir comment remplir l'intérieur)
//Append les clones a chaque fois


