const searchBTn = document.getElementById('searchBtn');
const searchSection = Array.from(document.getElementsByClassName('search-section'))[0];
const browseSection = document.querySelector('.browse-section');
const filterSection = document.querySelector('.filter-section');
const moreFilter = document.querySelector('.morefilter')
const services = document.querySelector('.services');
const footer = document.getElementsByTagName('footer')[0];
const sectionWrapper = document.querySelector('.section-wrapper');
const filterBtn =Array.from(document.getElementsByClassName('filterBtn'))[0];
const filterBtn2 =Array.from(document.getElementsByClassName('filterBtn'))[1];
const backArrow = document.getElementById('backArrow');
const main = document.querySelector('main')
const filterContainer = document.querySelector('.filter-container')

searchBTn.addEventListener('click', openSearch);

function openSearch(){
    if (window.innerWidth < 1920){
        searchSection.classList.add('displayNone');
        browseSection.classList.add('displayNone');
        sectionWrapper.classList.remove('displayNone');
        filterSection.classList.remove('displayNone');
    }else{
        sectionWrapper.classList.remove('displayNone');
        moreFilter.classList.remove('displayNone');
        filterContainer.classList.add('displayNone')
        browseSection.classList.add('displayNone');
        filterSection.classList.remove('displayNone');
        main.style.paddingBottom = '60px';
    }

}

filterBtn.addEventListener('click', openFilter);


function openFilter(){
    if (window.innerWidth < 1920){
        filterSection.classList.add('displayNone');
        services.classList.add('displayNone');
        footer.classList.add('displayNone')
        moreFilter.classList.remove('displayNone')
    }else{
        filterSection.classList.add('displayNone');
        services.classList.add('displayNone');
        moreFilter.classList.remove('displayNone')
    }

}

backArrow.addEventListener('click', goBack);
filterBtn2.addEventListener('click', goBack)

function goBack(){

    if (window.innerWidth < 1920){
        moreFilter.classList.add('displayNone');
            services.classList.remove('displayNone');
            filterSection.classList.remove('displayNone')
            footer.classList.remove('displayNone')
    }else{
        moreFilter.classList.add('displayNone');
        services.classList.remove('displayNone');
        filterSection.classList.remove('displayNone')
    }

}




//scroll


const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const cardsWrapper = document.querySelector('.cards-wrapper')


leftArrow.addEventListener('click', () => {
    cardsWrapper.scrollBy({
        left: -400, 
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    cardsWrapper.scrollBy({
        left: 400, 
        behavior: 'smooth'
    });
});



const data = [
    {
        "id":1,
        "img":"./images/hotels.png",
        "hotel":"Hotels"
    },
    {
        "id":2,
        "img":"./images/apartments.png",
        "hotel":"Apartments"
    },
    {
        "id":3,
        "img":"./images/resorts.png",
        "hotel":"Resorts"
    },
    {
        "id":4,
        "img":"./images/villas.png",
        "hotel":"Villas"
    },
    {
        "id":5,
        "img":"./images/hotels.png",
        "hotel":"Hotels"
    },
    {
        "id":6,
        "img":"./images/apartments.png",
        "hotel":"Apartments"
    },
    {
        "id":7,
        "img":"./images/resorts.png",
        "hotel":"Resorts"
    },
    {
        "id":8,
        "img":"./images/villas.png",
        "hotel":"Villas"
    }, {
        "id":9,
        "img":"./images/hotels.png",
        "hotel":"Hotels"
    },
    {
        "id":10,
        "img":"./images/apartments.png",
        "hotel":"Apartments"
    },
    {
        "id":11,
        "img":"./images/resorts.png",
        "hotel":"Resorts"
    },
    {
        "id":12,
        "img":"./images/villas.png",
        "hotel":"Villas"
    }
    
];


data.map((item) => {
    const card = document.createElement('div');
    card.classList.add('card')

    let image = document.createElement('img');
    image.classList.add("city-img");
    image.src = item.img;
    card.appendChild(image);

    let hotel = document.createElement('span');
    hotel.textContent = item.hotel;
    card.appendChild(hotel);

    cardsWrapper.appendChild(card)
})





const resorts = [
    {
        "id":1,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    },
    {
        "id":2,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    },
    {
        "id":3,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    },
    {
        "id":4,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    },
    {
        "id":5,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    },
    {
        "id":6,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    },
    {
        "id":7,
        "img":"./images/newzealand-resort.png",
        "name":"New Zealand Resort",
        "location":"New Zealand, Auckland",
        "fromCenter": "1 km away from center",
        "description":"Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
        "rating":"Rating:",
        "starArr": ["./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg","./images/Star 1.svg"],
        "pricetext":"Price:",
        "price":"400$"
    }

]

const hotelCardsWrapper = document.querySelector('.hotel-cards-wrapper');

function createHotelCard(item) {
    const hotelCard = document.createElement('div');
    hotelCard.classList.add('hotel-card');

    const img = document.createElement('img');
    img.classList.add('hotel-img');
    img.src = item.img;
    img.alt = "hotel"
    hotelCard.appendChild(img);

    const hotelInfo = document.createElement('div');
    hotelInfo.classList.add('hotel-info');
    hotelCard.appendChild(hotelInfo);

    const infoRow = document.createElement('div');
    infoRow.classList.add('info-row');
    hotelInfo.appendChild(infoRow);

    const link = document.createElement('a');
    link.href = "../staydetail/staydetail.html";

    const showBtn = document.createElement('button');
    showBtn.classList.add('showBtn');
    showBtn.textContent = "Show details"

    link.appendChild(showBtn);
    hotelInfo.append(link);

    const onlyInfo = document.createElement('div');
    onlyInfo.classList.add('only-info');
    infoRow.appendChild(onlyInfo);

    const priceRating = document.createElement('div');
    priceRating.classList.add('price-rating');
    infoRow.appendChild(priceRating);

    const hotelName = document.createElement('h3');
    hotelName.classList.add('hotel-name');
    hotelName.textContent = item.name;

    const hotelLocation = document.createElement('h4');
    hotelLocation.classList.add('hotel-location');
    hotelLocation.textContent = item.location;

    const from = document.createElement('span');
    from.classList.add('fromCenter');
    from.textContent = item.fromCenter;

    const hoteldescription = document.createElement('p');
    hoteldescription.classList.add('hotel-description');
    hoteldescription.textContent = item.description;

    onlyInfo.append(hotelName, hotelLocation, from, hoteldescription);

    const rating = document.createElement('div');
    rating.classList.add('rating');
    priceRating.appendChild(rating);

    const ratingText = document.createElement('span');
    ratingText.classList.add('rating-text');
    ratingText.textContent = item.rating;

    const stars = document.createElement('div');
    stars.classList.add('stars');

    const hotelPrice = document.createElement('div');
    hotelPrice.classList.add('hotel-price');
    priceRating.appendChild(hotelPrice);

    const pricetext = document.createElement('span');
    pricetext.classList.add('pricetext');
    pricetext.textContent = item.pricetext;

    const priceAmount = document.createElement('span');
    priceAmount.classList.add('priceAmount');
    priceAmount.textContent = item.price;

    hotelPrice.append(pricetext, priceAmount)

    rating.append(ratingText, stars);

    item.starArr.forEach(star => {
        const image = document.createElement('img');
        image.src = star;
        img.alt = 'star icon';

        stars.appendChild(image);
    });

    return hotelCard;
}

function updateHotelCards() {
    hotelCardsWrapper.innerHTML = '';

    const maxActions = window.innerWidth < 800 || window.innerWidth > 1920 ? 5 : 6;
    resorts.slice(0, maxActions).forEach(item => {
        const hotelCard = createHotelCard(item);
        hotelCardsWrapper.appendChild(hotelCard);
    });
}

updateHotelCards(); 

window.addEventListener('resize', updateHotelCards);


