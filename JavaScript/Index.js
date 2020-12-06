//Liste de destination :

let trips = [
    {
        index :1,
        name: 'Voyage à Djerba',
        tag: 'Djerba' ,
        fuseau : 'Djerba',
        pays : 'Tunisie',
        prix: 1406,
        
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



const tripList = document.getElementById('tripList');
const searchBar = document.getElementById('searchBar');


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredTrips =trips.filter((Emplacement) => {
        return (
            Emplacement.tag.toLowerCase().includes(searchString) 
        );
    });
    displayTrips(filteredTrips);
});


const loadTrips = async () => {
    displayTrips(trips);

};
// LE LOADING NE MARCHE PAS 
const displayTrips = (trips) => {
    const htmlString = trips
        .map((Emplacement) => {
            return `
            <li class="Emplacement">
                <div class="ImagesDestinations">            
                <img class = imfit src="../images/${Emplacement.tag}.jpg" alt="${Emplacement.tag}" class="image" style="width:100%">
                <div class="Overlay">
                <div class="InfoDestination">${Emplacement.tag.replace("_"," ")} | <span id="zone_heure${Emplacement.index}"></span> | <span id="zone_meteo${Emplacement.index}"></span> </div>${Emplacement.prix}€
                </div>
                <a class="add-panier" id="panier" href="#">Ajouter au panier</a>
                <a  id = "reserver" href="reservation.html?id=${Emplacement.index}">Réserver</a>
                </div>
            </li>
        `;
        })
        .join('');
    tripList.innerHTML = htmlString;
};

loadTrips();


