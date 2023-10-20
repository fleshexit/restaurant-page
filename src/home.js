
function build(){
    // render content
    const content = document.getElementById('content');

    const main = document.querySelector('main');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const h1 = document.createElement('h1');
    h1.textContent = 'Golden Dragon';

    const p = document.createElement('p');
    p.textContent = 'Where Culinary Artistry, Timeless Traditions, and Unforgettable Flavors Converge to Create an Extraordinary Dining Experience';

    const button = document.createElement('button');
    button.textContent = 'View Menu';
    button.classList.add('button');

    content.appendChild(main);
    main.appendChild(hero);
    hero.appendChild(h1);
    hero.appendChild(p);
    main.appendChild(button);
    

}

export { build as buildHome}