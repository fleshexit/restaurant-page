function createElementWithClass(elementType, className) {
    const element = document.createElement(elementType);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }
  
function createMenuItem(title, description, price) {
    const menuCard = createElementWithClass('div', 'menu-card');
    const cardTextContainer = createElementWithClass('div', 'card-text');
    const dishTitle = createElementWithClass('h2', 'card-text');
    const dishDesc = createElementWithClass('p', 'card-text');
    const dishPrice = createElementWithClass('p', 'dish-price');

    dishTitle.textContent = title;
    dishDesc.textContent = description;
    dishPrice.textContent = price;

    cardTextContainer.appendChild(dishTitle);
    cardTextContainer.appendChild(dishDesc);
    menuCard.appendChild(cardTextContainer);
    menuCard.appendChild(dishPrice);

    return menuCard;
}

function build() {
    const main = document.querySelector('main');
    const container = createElementWithClass('div', 'container');
    const titleContainer = createElementWithClass('div', 'title-container');
    const title = createElementWithClass('h1');
    const subtitle = createElementWithClass('p', 'subtitle');

    title.textContent = 'Golden Dragon';
    subtitle.textContent = 'Menu';

    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);

    const menuContainer = createElementWithClass('div', 'menu-container');
    const menuData = [
        { title: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts', price: '$12' },
        { title: 'Peking Duck', description: 'Crispy duck served with hoisin sauce and pancakes', price: '$18' },
        { title: 'Mapo Tofu', description: 'Spicy tofu and minced meat in a flavorful sauce', price: '$10' },
        { title: 'Dim Sum', description: 'Assortment of steamed and fried bite-sized dishes', price: '$15' },
        { title: 'Szechuan Beef', description: 'Tender beef stir-fried with Szechuan peppercorns', price: '$14' },
        { title: 'Hot and Sour Soup', description: 'Tangy and spicy soup with tofu and mushrooms', price: '$8' },
    ];

    menuData.forEach((item) => {
        const menuCard = createMenuItem(item.title, item.description, item.price);
        menuContainer.appendChild(menuCard);
    });

    main.appendChild(container);
    container.appendChild(titleContainer);
    container.appendChild(menuContainer);
}

export { build as buildMenu };
