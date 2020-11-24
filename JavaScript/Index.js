const tripList = document.getElementById('tripList');
const searchBar = document.getElementById('searchBar');
let websiteTrips = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredTrips = websiteTrips.filter((Destination) => {
        return (
            Destination._pays.toLowerCase().includes(searchString) ||
            Destination._ville.toLowerCase().includes(searchString)
        );
    });
    displayTrips(filteredTrips);
});


const loadTrips = async () => {
    try {
        websiteTrips = Destinations;
        displayTrips(websiteTrips);
    } catch (err) {
        console.error(err);
    }
};
// LE LOADING NE MARCHE PAS 
const displayTrips = (trips) => {
    const htmlString = trips
        .map((Destination) => {
            return `
            <li class="Destination">
                <p>${Destination.afficher}</p>
                
                <img src="${Destination.getImage}"></img>
            </li>
        `;
        })
        .join('');
    tripList.innerHTML = htmlString;
};

loadTrips();