
function build(){
    // render content
    const content = document.getElementById('content');
    const main = document.querySelector('main');

    // create container
    const container = document.createElement('div');


    content.appendChild(main);
    main.appendChild(hero);
}

export { build as buildMenu}