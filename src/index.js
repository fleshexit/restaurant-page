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

buildFoundations();
buildHome();

document.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') home();
    if (e.target.textContent === 'Menu' || 'View Menu') menu();
    if (e.target.textContent === 'About') about();
});