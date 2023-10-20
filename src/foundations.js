

export function buildFoundations() {
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
        li.id = item.toLowerCase();
        ul.appendChild(li);
    }); 
    header.appendChild(ul);

    // create main
    const main = document.createElement('main');
    main.classList.add('main');

    // create footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = 'Image by <a href="https://www.freepik.com/free-photo/chinese-new-year-concept-with-copy-space_11238752.htm#query=Chinese%20Restaurant&position=2&from_view=search&track=ais"> Freepik</a>';
    

    // Append in the correct order: header, main, footer
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}
