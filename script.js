
const navbar = document.getElementById('navbar');
const logo = Array.from(document.getElementsByClassName('logo'))[0];
const liText = Array.from(document.getElementsByClassName('menu-link'));

const user = document.getElementById('user');
const sign = document.getElementById('sign');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            logo.classList.add('scrolled-text');
            liText.forEach(item => {
                item.classList.add('scrolled-text');
            });
            user.classList.add('scrolled-user');

        } else {
            navbar.classList.remove('scrolled');
            logo.classList.remove('scrolled-text');
            liText.forEach(item => {
                item.classList.remove('scrolled-text')
            });
            user.classList.remove('scrolled-user');
        }
    });






const menu  = document.getElementById('menu');
const menuLinks =Array.from(document.getElementsByClassName('links'))[0];
const close = document.getElementById('close');

menu.addEventListener('click', openMenu);
close.addEventListener('click', openMenu)


function openMenu(){

    if(menuLinks.classList.contains('links')){
        menuLinks.classList.add('links-active');
        menuLinks.classList.remove('links');
        menu.classList.add('menu-active');
    }else{
        menuLinks.classList.add('links');
        menuLinks.classList.remove('links-active');
        menu.classList.remove('menu-active')
    }
}



user.addEventListener('click', openSign);


function openSign(){

    if(sign.id){
        sign.classList.add('sign-active');
        sign.id ='';
    }else{
        sign.id = 'sign';
        sign.classList.remove('sign-active');
    }
};




const cities = [
    'Rome, Italy',
    'Luxor City, Egypt',
    'Paris, France',
    'Barcelona, Spain',
    'Tsavo, Kenya',
    'Prague, Czech Republic',
    'Shanghai, China',
    'Hanauma, Hawaii',
    'Sydney, Australia',
    'Tokyo, Japan',
    'Rio de Janeiro, Brazil',
    'Cape Town, South Africa',
    'New York City, USA',
    'Dubai, United Arab Emirates',
];

const tours = [
    'Colosseum Tour',
    'Luxor Temple Tour',
    'Eiffel Tower Tour',
    'Sagrada Familia Tour',
    'Tsavo East National Park Safari',
    'Prague Castle Tour',
    'The Bund Tour',
    'Hanauma Bay Snorkeling Tour',
    'Sydney Opera House Tour',
    'Tsukiji Fish Market Tour',
    'Christ the Redeemer Tour',
    'Table Mountain Tour',
    'Statue of Liberty Tour',
    'Burj Khalifa Tour'
];

const tourDates = [
    '2024-04-10',
    '2024-04-12',
    '2024-04-11',
    '2024-04-13',
    '2024-04-14',
    '2024-04-15',
    '2024-04-16',
    '2024-04-17',
    '2024-04-18',
    '2024-04-19',
    '2024-04-20',
    '2024-04-21',
    '2024-04-22',
    '2024-04-23'
];

const citySelect = document.getElementById("location");
const tourSelect = document.getElementById('tour-offer');
const dateSelect = document.getElementById('tour-date');
const personSelect = document.getElementById('person');

addOptions();
addTourOptions();
addDates();
addPersons();

function addOptions() {
    cities.forEach(city => {
        const option = document.createElement('option');
        option.text = city;
        citySelect.add(option);
    });
}

function addTourOptions() {
    tours.forEach(tour => {
        const option = document.createElement('option');
        option.text = tour;
        tourSelect.add(option);
    });
}

function addDates() {
    tourDates.forEach(date => {
        const option = document.createElement('option');
        option.text = date;
        dateSelect.appendChild(option);
    });
}

function addPersons() {
    for (let i = 1; i <= 10; i++) {
        const option = document.createElement('option');
        option.text = i;
        personSelect.add(option);
    }
}



// scroll

const data = [
    {
        "id":1,
        "img":"./images/barcelona.png",
        "city":"Barcelona,Spain",
        "info":"2 adults, 7 days",
        "price":"2400$"
    },
    {
        "id":2,
        "img":"./images/rome.png",
        "city":"Rome,Italy",
        "info":"2 adults, 3 days",
        "price":"1800$"
    },
    {
        "id":3,
        "img":"./images/paris.png",
        "city":"Paris,France",
        "info":"2 adults, 4 days",
        "price":"2100$"
    },
    {
        "id":4,
        "img":"./images/luxor-city.png",
        "city":"Luxor City, Egypt",
        "info":"2 adults, 3 days",
        "price":"800$"
    },
    {
        "id":5,
        "img":"./images/barcelona.png",
        "city":"Barcelona,Spain",
        "info":"2 adults, 7 days",
        "price":"2400$"
    },
    {
        "id":6,
        "img":"./images/rome.png",
        "city":"Rome,Italy",
        "info":"2 adults, 3 days",
        "price":"1800$"
    },
    {
        "id":7,
        "img":"./images/paris.png",
        "city":"Paris,France",
        "info":"2 adults, 4 days",
        "price":"2100$"
    },
    {
        "id":8,
        "img":"./images/luxor-city.png",
        "city":"Luxor City, Egypt",
        "info":"2 adults, 3 days",
        "price":"800$"
    }, {
        "id":9,
        "img":"./images/barcelona.png",
        "city":"Barcelona,Spain",
        "info":"2 adults, 7 days",
        "price":"2400$"
    },
    {
        "id":10,
        "img":"./images/rome.png",
        "city":"Rome,Italy",
        "info":"2 adults, 3 days",
        "price":"1800$"
    },
    {
        "id":11,
        "img":"./images/paris.png",
        "city":"Paris,France",
        "info":"2 adults, 4 days",
        "price":"2100$"
    },
    {
        "id":12,
        "img":"./images/luxor-city.png",
        "city":"Luxor City, Egypt",
        "info":"2 adults, 3 days",
        "price":"800$"
    }
    
];

const cityContainer = Array.from(document.getElementsByClassName('cities'))[0]

data.map((item) => {
    const offerCard = document.createElement('div');
    offerCard.classList.add('offer-card')

    let cityImage = document.createElement('img');
    cityImage.classList.add("city-img");
    cityImage.src = item.img;
    offerCard.appendChild(cityImage);

    let city = document.createElement('h4');
    city.classList.add("city");
    city.textContent = item.city;
    offerCard.appendChild(city);

    let info = document.createElement('p');
    info.classList.add("info");
    info.textContent = item.info;
    offerCard.appendChild(info);

    let price = document.createElement('span');
    price.classList.add("price");
    price.textContent = item.price;
    offerCard.appendChild(price);

    cityContainer.appendChild(offerCard)
})

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');



leftArrow.addEventListener('click', () => {
    cityContainer.scrollBy({
        left: -400, 
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    cityContainer.scrollBy({
        left: 400, 
        behavior: 'smooth'
    });
});



//video 

document.addEventListener("DOMContentLoaded", function(){
    const video = document.getElementById("videoPlayer");
    const vector = document.getElementById("vector");

    vector.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            vector.style.display = "none";
        } else {
            video.pause();
            vector.style.display = "block";
        }
    });


    video.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            vector.style.display = "none"; 
        } else {
            video.pause();
            vector.style.display = "block"; 
        }
    });

});