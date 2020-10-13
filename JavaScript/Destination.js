class Destination {
    constructor(ppays,pville,pprix,panimaux,pdejeuner,pdateD,pdateR) {     // le pays de la destination,ville, prix, dejeuner,date départ, date retour
      this._pays = ppays;
      this._ville= pville;
      this._prix = pprix;
      this._dejeuner = pdejeuner;
      this._animaux = panimaux;
      this._dateD = pdateD;
      this._dateR = pdateR;
    }

    afficher() {
        console.log("Voyage" + this._ville + ", " + this.pays + "Déjeuner compris : " + this._dejeuner + "animaux : " + this._animaux + "date départ : " + this._dateD + "date retour : " + this._dateR + "prix : " + this._prix)
    }

    
  }