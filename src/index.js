import "./style.css";
import { buildFoundations } from "./foundations";
import { buildHome } from "./home";
import { buildMenu } from "./menu";
import { buildAbout } from "./about";

function clearContent(){
    const content = document.getElementById('content');
    while (content.firstChild) content.removeChild(content.firstChild);
}

function home(){
    clearContent();
    buildFoundations();
    buildHome();
}

function menu(){
    clearContent();
    buildFoundations();
    buildMenu();
}

function about(){
    clearContent();
    buildFoundations();
    buildAbout();
}

// initial load
buildFoundations();
buildHome();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "Home") home();
    if (target === "Menu" || target === "View Menu") menu();
    if (target === "About") about();
});