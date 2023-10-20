function buildFoundations() {
    // render content
    const content = document.getElementById('content');

    // create header
    const header = document.createElement('header');
    header.classList.add('header');

    // populate header
    const items = ["Home", "Menu", "About"];
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }); 
    header.appendChild(ul);

    // create main
    const main = document.createElement('main');
    main.classList.add('main');

    // create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = "chrlie-w";

    // Append in the correct order: header, main, footer
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

export { buildFoundations };
