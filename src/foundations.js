
function buildFoundations(){

    // render content
    const content = document.getElementById('content');

    // create header
    const header = document.createElement('header');
    header.classList.add('header');

    // populate header
    const items = ["Home", "Menu", "About",];
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }); 
    header.appendChild(ul);
    content.appendChild(header);

    const main = document.createElement('main');
    main.classList.add('main');
    content.appendChild(main);

    // create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = "chrlie-w";
    content.appendChild(footer);
    
}

export { buildFoundations }