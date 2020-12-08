///Code montrant les crénaux horaires


for (let i=0; i <= trips.length-1; i++) {
    
    window.fetch("http://worldtimeapi.org/api/timezone/"+trips[i].continent+"/"+trips[i].fuseau)
    
        .then(res => res.json())
        .then(resJson => {var element = document.getElementById("zone_heure"+(i+1))
        output = resJson.datetime
        element.innerHTML = output.slice(11,16)
        
    
    })
    }
    