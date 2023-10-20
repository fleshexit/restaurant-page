
function build(){
    // render content
    const content = document.getElementById('content');

    const main = document.querySelector('main');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const h1 = document.createElement('h1');
    h1.textContent = 'Locust Palace';

    const p = document.createElement('p');
    p.textContent = 'Where Culinary Artistry, Timeless Traditions, and Unforgettable Flavors Converge to Create an Extraordinary Dining Experience';

    //const button = createElement('button');
    //button.textContent = 'View Menu';

    content.appendChild(main);
    main.appendChild(hero);

}

export { build as buildHome}