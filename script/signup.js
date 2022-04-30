//importing the navbar
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let home = document.getElementById("home_page");
let redirect = () => {
    window.location.href = 'index.html';
}
home.addEventListener("click", redirect);