
function createElementWithClass(elementType, className) {
    const element = document.createElement(elementType);
    if (className) {
        element.classList.add(className);
    }
    return element;
}
  
function buildAbout() {
    const main = document.querySelector('main');
    const aboutContainer = createElementWithClass('div', 'about-container');
    const aboutHeading = createElementWithClass('h2', 'about-heading');
    const aboutText = createElementWithClass('p', 'about-text');

    aboutHeading.textContent = 'About Us';
    aboutText.textContent = 'Welcome to Golden Dragon, your destination for authentic Chinese cuisine. We take pride in serving the finest dishes prepared with the freshest ingredients and traditional recipes. With a rich history spanning decades, our restaurant has become a favorite among Chinese food enthusiasts. Join us for an unforgettable culinary journey through the flavors of China.';

    aboutContainer.appendChild(aboutHeading);
    aboutContainer.appendChild(aboutText);

    main.appendChild(aboutContainer);
}

export { buildAbout };
  