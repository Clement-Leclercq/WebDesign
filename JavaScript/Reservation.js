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
    var dejoui = document.getElementById("ptitdejoui").value;
    var dejnon = document.getElementById("ptitdejnon").value;
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
    localStorage.setItem('Petit dejeuner oui',dejoui);
    localStorage.setItem('Petit dejeuner non',dejnon);
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
    var dejoui = localStorage.getElement("Petit dejeuner oui");
    var dejnon = localStorage.getElement("Petit dejeuner non");
    var renseignement = localStorage.getElement("Renseignement");
    var prix = localStorage.getElement("Prix");
    

return 




}





























