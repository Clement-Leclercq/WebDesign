window.addEventListener("load",function(){
    map();
});
function map(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    
    var img = new Image();
    img.src = "../images/World_map_blank_without_borders.svg";
    img.onload = function(){
        context.drawImage(img,0,0,id.width,id.height);
        canada();
        mexique();
        capvert();
        chine();
        chypre();
        guadeloupe();
        indonesie();
        japon();
        madagascar();
        thailande();
        vietnam();
        tunisie();
    }
}
function canada(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(2000,950,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Canada",2050,950)
}
function capvert(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(4050,2050,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Cap-Vert",4100,2050)
}
function chine(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7900,1700,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Chine",7950,1700)
}
function chypre(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(5615,1460,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Chypre",5665,1460)
}
function guadeloupe(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(3050,1980,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Guadeloupe",3100,1980)
}
function indonesie(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7650,2650,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Indonésie",7700,2650)
}
function japon(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(8500,1400,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Japon",8550,1400)
}
function madagascar(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(5975,3050,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Madagascar",6025,3050)
}
function mexique(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(2300,1850,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Mexique",2350,1850)
}
function thailande(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7500,2050,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Thaïlande",7300,1960)
}
function tunisie(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(4975,1400,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Tunisie",5025,1400)
}
function vietnam(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var cercle = new Path2D();
    cercle.arc(7700,2075,50,0,2*Math.PI);
    context.fillStyle = "#00b33c";
    context.fill(cercle);
    context.font = "100px Arial"
    context.fillText("Vietnam",7750,2075)
}