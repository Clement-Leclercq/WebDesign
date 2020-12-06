//Liste de destination :

let trips = [
    {
        index :1,
        name: 'Voyage :'+dTunisie._pays+' à :'+dTunisier._ville,
        tag: dTunisie._ville ,
        fuseau : dTunisie._ville,
        continent : 'Europe',
        prix: 150,
        
    },
  
    {
        index :2,
        name: 'Voyage à Istanbul',
        tag: 'Istanbul' ,
        fuseau :'Istanbul',
        continent : 'Asia',
        prix: 600,
        
    },
  
    {
        index :3,
        name: 'Voyage à Carcassonne',
        tag: 'Carcassonne' ,
        fuseau : 'Paris',
        continent : 'Europe',
        prix: 350,
        
    },
    {
        index :4,
        name: 'Voyage en Allemagne',
        tag: 'Allemagne' ,
        fuseau : 'Berlin',
        continent : 'Europe',
        prix: 400,
        
    },
  
    {
        index :5,
        name: 'Voyage en Australie',
        tag: 'Australie' ,
        fuseau : 'Sydney',
        continent : 'Australia',
        prix: 1300,
        
    },
  
    {
        index :6,
        name: 'Voyage à Barcelone',
        tag: 'Barcelone' ,
        fuseau : 'Madrid',
        continent : 'Europe',
        prix: 500,
        
    },
  
    {
        index :7,
        name: 'Voyage en Crète',
        tag: 'Crète' ,
        fuseau : 'Athens',
        continent : 'Europe',
        prix: 800,
        
    },
  
    {
        index :8,
        name: 'Voyage au Japon',
        tag: 'Japon' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        prix: 1300,
        
    },
  
    {
        index :9,
        name: 'Voyage à New York',
        tag: 'New_York' ,
        fuseau : 'New_York',
        continent : 'America',
        prix: 1200,
        
    },
  
    {
        index :10,
        name: 'Voyage au Japon',
        tag: 'Japon' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        prix: 1300,
        
    },
  
    {
        index :11,
        name: 'Voyage au Japon',
        tag: 'Japon' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        prix: 1300,
        
    },
  
    {
        index :12,
        name: 'Voyage au Japon',
        tag: 'Japon' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        prix: 1300,
        
    },
  
  
  ];

// Code de la search bar et du loading d'image sur l'index



const tripList = document.getElementById('tripList');
const searchBar = document.getElementById('searchBar');


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredTrips =trips.filter((Holder) => {
        return (
            Holder.tag.toLowerCase().includes(searchString) 
        );
    });
    displayTrips(filteredTrips);
});


const loadTrips = async () => {
    displayTrips(trips);

};
// LE LOADING NE MARCHE PAS 
const displayTrips = (trips) => {
    const htmlString = produits.map((Emplacement) => {
        return `
            <li class="Emplacement">
                <div class="ImagesDestinations">            
                <img src="../images/"${Destination.getImage}".jpg" alt="${Emplacement.tag}" class="image" style="width:100%">
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


