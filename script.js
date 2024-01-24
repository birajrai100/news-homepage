
var bar = document.getElementById("nav-bar").addEventListener("click", call);
var navCross = document.getElementById("nav-cross").addEventListener("click", home);
var overlay = document.body;


function call() {
    var navBarLogo = document.getElementById("nav-bar");
    var navCrossLogo = document.getElementById("dropdown");
    navCrossLogo.classList.remove("invisible");
    navBarLogo.classList.add("invisible");
    overlay.classList.add("ovarlay");
}

function home() {
    var navBarLogo = document.getElementById("nav-bar");
    var navCrossLogo = document.getElementById("dropdown");
    navCrossLogo.classList.add("invisible");
    navBarLogo.classList.remove("invisible");
    overlay.classList.remove("ovarlay");
}