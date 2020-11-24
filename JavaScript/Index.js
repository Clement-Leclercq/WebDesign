const tripList = document.getElementById('tripList');
let websiteTrips = [];

const loadTrips = async () => {
    try {
        websiteTrips = Destinations;
        displayTrips(websiteTrips);
    } catch (err) {
        console.error(err);
    }
};

const displayTrips = (trips) => {
    const htmlString = trips
        .map((voyage) => {
            return `
            <li class="voyage">
                <p>${Destination.afficher}</p>
                
                <img src="${Destination.getImage}"></img>
            </li>
        `;
        })
        .join('');
    tripList.innerHTML = htmlString;
};

loadTrips();