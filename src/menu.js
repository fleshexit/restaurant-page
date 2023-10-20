
function build(){
    // render content
    const content = document.getElementById('content');

    const main = document.querySelector('main');

    content.appendChild(main);
    main.appendChild(hero);

}

export { build as buildMenu}