// Authentification avec disparition du formulaire
window.onload = function(){
    var form = document.getElementById("formConn");
    form.onsubmit = verifAuth;
    verifConn();
};
function verifConn(){ // s'occupe de vérifier si l'utilisateur est co et transforme l'affichage
    formConn.classList.remove("hide");
    if (localStorage.getItem("Username") !== undefined){
        divConn.classList.remove("hide");
        formConn.classList.add("hide");
    }
}
function verifAuth(){ //  s'occupe de vérifier le formulaire
    var username = document.getElementById("usrname1").value;
    var password = document.getElementById("pword1").value;
    if (Users[username] !== undefined && Users[username].password === password){
        localStorage.setItem('Username',username);
    }
}


