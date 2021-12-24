// items 
const menu = [
    {
        id: 1,
        title: "Korean Wings",
        category: "lunch",
        price: 12.99,
        img: "img/wings.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        title: "Fried Chicken",
        category: "dinner",
        price: 14.99,
        img: "img/fried-chicken.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        title: "Sea Bass",
        category: "dinner",
        price: 17.99,
        img: "img/sea-bass.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        title: "Seared Ahi Salad",
        category: "lunch",
        price: 16.99,
        img: "img/ahi-salad.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 5,
        title: "BLT",
        category: "lunch",
        price: 11.99,
        img: "img/blt.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 6,
        title: "Chocolate Pudding",
        category: "dessert",
        price: 7.99,
        img: "img/chocolate-pudding.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 7,
        title: "Key Lime Pie",
        category: "dessert",
        price: 7.99,
        img: "img/key-lime-pie.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 8,
        title: "Chocolate Lava Cake",
        category: "dessert",
        price: 9.99,
        img: "img/lava-cake.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 9,
        title: "Tiger Shrimp",
        category: "dinner",
        price: 21.99,
        img: "img/shrimp.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    },
    {
        id: 10,
        title: "Ribeye Steak",
        category: "dinner",
        price: 23.99,
        img: "img/steak.jpg",
        description: "Lorem ipsum dolor sit amet, consec tetur adipi scing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna aliqua."
    }
];



let menuList = document.querySelector('.menu');

function updateMenu(mealType) {
    menuList.innerHTML = '';
    for (const value of mealType) {

        const {img, title, price, description} = value; // desctructuring assignment can be implemented below
        // const menuItem = document.createElement('div');
        // const wrapper = document.createElement('div');
        // const image = document.createElement('img');
        // const title_price = document.createElement('div');
        // const title = document.createElement('h2');
        // const price = document.createElement('p');
        // const desc = document.createElement('p');
        // const textbox = document.createElement('div');
        
        // menuItem.classList.add('item');
        // wrapper.classList.add('item__wrapper');
        // image.classList.add('item__image');
        // image.src = value.img;
        // title_price.classList.add('item__titlePrice');
        // title.classList.add('item__title');
        // title.innerText = value.title;
        // price.classList.add('item__price');
        // price.innerText = value.price;
        // desc.classList.add('item__description');
        // desc.innerText = value. description;
        // textbox.classList.add('item__text');

        menuHtml = `
        <div class="item">
            <div class="item__wrapper">
                <img class="item__image" src="${value.img}">
                <div class="item__text">
                    <div class="item__titlePrice">
                        <h2 class="item__title">${value.title}</h2>
                        <p class="item__price">${value.price}</p>
                    </div>
                    <p class="item__description">${value.description}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        menuList.insertAdjacentHTML('beforeend', menuHtml);
        // menuItem.appendChild(wrapper);
        // wrapper.append(image, textbox);
        // textbox.append(title_price, desc);
        // title_price.append(title, price);
    }
}

updateMenu(menu);

const btns = document.getElementsByClassName('type');
for (const btn of btns) {
    btn.addEventListener('click', function(){
        if(this.classList.contains('all')) {
            updateMenu(menu);
        } else if (this.classList.contains('lunch')) {
            const lunchmeals = menu.filter(meal => (meal.category.includes('lunch')));
            updateMenu(lunchmeals);
        } else if (this.classList.contains('dinner')) {
            const dinnermeals = menu.filter(meal => (meal.category.includes('dinner')));
            updateMenu(dinnermeals);
        } else if (this.classList.contains('dessert')) {
            const dessert = menu.filter(meal => (meal.category.includes('dessert')));
            updateMenu(dessert);
        }
    })
}