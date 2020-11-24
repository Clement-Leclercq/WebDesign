window.addEventListener("load",function(){
    map();
    // canada();
    // capvert();
    // chine();
    // chypre();
    // guadeloupe();
    // indonesie();
    // japon();
    // madagascar();
    // mexique();
    // thailande();
    // tunisie();
    // vietnam();
});
function map(){
    var id = document.getElementById("map");
    var context = id.getContext("2d");
    var img = new Image();
    img.src = "../images/World_map_blank_without_borders.svg";
    img.onload = function(){
        context.drawImage(img,0,0,id.width,id.height);
    }
}
function canada(){

}
function capvert(){

}
function chine(){

}
function chypre(){

}
function guadeloupe(){

}
function indonesie(){

}
function japon(){

}
function madagascar(){

}
function mexique(){

}
function thailande(){

}
function tunisie(){

}
function vietnam(){

}