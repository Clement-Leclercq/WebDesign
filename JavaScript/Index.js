//Liste de destination :

let trips = [
    {
        index :1,
        name: 'Voyage à Djerba',
        tag: 'Djerba' ,
        fuseau : 'Djerba',
        pays : 'Tunisie',
        prix: 1406,
        image : '../images/Tunisie.jpg'
    },
  
    {
        index :2,
        name: 'Voyage à Tananarive',
        tag: 'Tananarive' ,
        fuseau :'Tananarive',
        pays : 'Madagascar',
        prix: 1899,
        
    },
  
    {
        index :3,
        name: 'Voyage à Ottawa',
        tag: 'Ottawa' ,
        fuseau : 'Ottawa',
        pays : 'Canada',
        prix: 1599,
        
    },
    {
        index :4,
        name: 'Voyage à Tokyo',
        tag: 'Tokyo' ,
        fuseau : 'Tokyo',
        pays : 'Japon',
        prix: 2548,
        
    },
  
    {
        index :5,
        name: 'Voyage à Cancun',
        tag: 'Cancun' ,
        fuseau : 'Cancun',
        pays : 'Mexique',
        prix: 945,
        
    },
  
    {
        index :6,
        name: 'Voyage à Basse-Terre',
        tag: 'Basse-Terre' ,
        fuseau : 'Basse-Terre',
        pays : 'Guadeloupe',
        prix: 1708,
        
    },
  
    {
        index :7,
        name: 'Voyage en Praia',
        tag: 'Praia' ,
        fuseau : 'Praia',
        pays : 'Cap Vert',
        prix: 1377,
        
    },
  
    {
        index :8,
        name: 'Voyage à Bangkok',
        tag: 'Bangkok' ,
        fuseau : 'Bangkok',
        pays : 'Thaïlande',
        prix: 1906,
        
    },
  
    {
        index :9,
        name: 'Voyage à Jakarta ',
        tag: 'Jakarta' ,
        fuseau : 'Jakarta',
        pays : 'Indonésie',
        prix: 1299,
        
    },
  
    {
        index :10,
        name: 'Voyage en Hanoï',
        tag: 'Hanoï' ,
        fuseau : 'Hanoï',
        pays : 'Vietnam',
        prix: 1449,
        
    },
  
    {
        index :11,
        name: 'Voyage en Nicosie',
        tag: 'Nicosie' ,
        fuseau : 'Nicosie',
        pays : 'Chypre',
        prix: 1506,
        
    },
  
    {
        index :12,
        name: 'Voyage à Pekin',
        tag: 'Pekin' ,
        fuseau : 'Pekin',
        pays : 'Chine',
        prix: 1863,
        
    },
  
  
];
// Code de la search bar et du loading d'image sur l'index


//Selectionne les balises
const tripList = document.getElementById('tripList');
const searchBar = document.getElementById('searchBar');

//Filtre par nom de ville
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredTrips =trips.filter((Emplacement) => {
        return (
            Emplacement.tag.toLowerCase().includes(searchString) 
        );
    });
    displayTrips(filteredTrips);
});

//Fonction qui montre les voyages de maniere effective
const loadTrips = async () => {
    displayTrips(trips);

};
//Fonction core qui va permettre l'affichage en mettant du string HTML
const displayTrips = (trips) => {
    const htmlString = trips.map((Emplacement) => {
        return `
            <li class="Emplacement">
                <div class="box">            
                <img class = imfit src='../images/${Emplacement.pays}.jpg' alt="${Emplacement.tag}" style="width:100%">
                <div class="Overlay">
                <div class="InfoDestination">${Emplacement.tag.replace("_"," ")} | <span id="zone_heure${Emplacement.index}"></span> | <span id="zone_meteo${Emplacement.index}"></span> </div>${Emplacement.prix}€
                </div>
                <a  id = "reserver" href="reservation.html" id=${Emplacement.index}">Réserver</a>
                </div>
            </li>
        `;
        })
        .join('');
        tripList.innerHTML = htmlString;
};

loadTrips();

//Le filtre par prix (S'AFFICHE MAIS NE MARCHE PAS)
function openCloseFilter(){
    var divContenu = document.getElementById('hideContentFiltre')
         
    if(divContenu.style.display == 'block')
        divContenu.style.display = 'none';
    else
        divContenu.style.display = 'block';
}

var curseurMin = document.getElementById('rangeMin')
var valueMin = document.getElementById('valuePrixMin')
curseurMin.value = 0
valueMin.innerHTML = curseurMin.value

var curseurMax = document.getElementById('rangeMax')
var valueMax = document.getElementById('valuePrixMax')
curseurMax.value = 2000
valueMax.innerHTML = curseurMax.value

curseurMin.oninput = function(){
    valueMin.innerHTML = this.value;
}

curseurMax.oninput = function(){
    valueMax.innerHTML = this.value;
}

curseurMin.addEventListener('mousemove', function() {
    
    const filteredTrips = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) { 
        if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
            return ( Emplacement.tag.toLowerCase()
            );}
        }
    });
    displayTrips(filteredTrips);
});
curseurMax.addEventListener('mousemove', function() {
    
    const filteredTrips = trips.filter((Emplacement) => {
        for (let i=0; i < trips.length; i++) {
            if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
                return ( Emplacement.tag.toLowerCase()
                );}
        }
    });
    displayTrips(filteredTrips);  
});

