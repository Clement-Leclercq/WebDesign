window.addEventListener("Réservation et recap",function(){
    var booking = document.getElementById("booking") ;
    booking.onsubmit = reserv ; 
});


function reserv(){ 
    var prenom = document.getElementById("prenom").value;
    var nom = document.getElementById("nom").value;
    var mail = document.getElementById("mail").value;
    var telephone = document.getElementById("telephone").value;
    var datedepart = document.getElementById("dated").value;
    var dateretour = document.getElementById("dater").value;
    var nbradulte = document.getElementById("nbradulte").value;
    var nbrenfant = document.getElementById("nbrenfant").value;
    var ptitdej = document.forms.booking.ptitdej.value;
    var renseignement = document.getElementById("renseignement");
    var prix = document.getElementById("prix")

    localStorage.setItem('Prénom',prenom);
    localStorage.setItem('Nom',nom);
    localStorage.setItem('Mail',mail);
    localStorage.setItem('Telephone',telephone);
    localStorage.setItem('Date depart',datedepart);
    localStorage.setItem('Date retour',dateretour);
    localStorage.setItem('Nombre adulte',nbradulte);
    localStorage.setItem('Nombre enfant',nbrenfant);
    localStorage.setItem('Petit dejeuner oui',ptitdej);
    localStorage.setItem('Renseignement',renseignement);
    localStorage.setItem('Prix',prix);
};

function recap(){
    var prenom = localStorage.getElement("Prénom");
    var nom = localStorage.getElement("Nom");
    var mail = localStorage.getElement("Mail");
    var telephone = localStorage.getElement("Telephone");
    var datedepart = localStorage.getElement("Date depart");
    var dateretour = localStorage.getElement("Date retour");
    var nbradulte = localStorage.getElement("Nombre adulte");
    var nbrenfant = localStorage.getElement("Nombre enfant");
    var ptitdej = localStorage.getElement("Petit dejeuner oui");
    var renseignement = localStorage.getElement("Renseignement");
    var prix = localStorage.getElement("Prix");
    

    return `
        <fieldset>
            <legend>Informations</legend>
                <label for="prenom">Prénom*: </label> <p id="prenom" name="prenom">`+prenom+`</p>
                <label for="nom">Nom*: </label> <p id="nom" name="nom">`+nom+`</p> 
                <label for="mail">Mail*: </label> <p id="mail" name="mail">`+mail+`</p>
                <label for="telephone">Téléphone: </label> <p id="telephone" name="telephone">`+telephone+`</p>
        </fieldset>
        <fieldset>
            <legend>Durée</legend>
            <label for="dated">Date départ*: </label> <p id="dated" name="dated">`+datedepart+`</p>
            <label for="dater">Date retour*: </label> <p id="dater" name="dater">`+dateretour+`</p>
        </fieldset>
        <fieldset>
            <legend>Nombre</legend>
            <label for="nbradulte">Nombre d'adulte*: </label><p id="nbradulte" name="nbradulte">`+nbradulte+`</p>
            <label for="nbrenfant">Nombre d'enfant*: </label><p id="nbrenfant" name="nbrenfant">`+nbrenfant+`</p>
            <label for="ptitdej">Petit-déjeuner ?: </label>
            <p id="ptitdej" name="ptitdej">`+ptitdej+`</p>
            
        </fieldset>
            
        <fieldset>
            <label for="prix">Prix : </label><p id="prix" name="prix">`+prix+`</p>

        </fieldset>
        <fieldset>
            <label for="renseignement">Renseignement :</label><p id="renseignement" name="renseignement">`+renseignement`+</p>
        <fieldset>


`

}

// A faire : mettre le script dans les pages html et appellé les fonctions dans le dit script





























