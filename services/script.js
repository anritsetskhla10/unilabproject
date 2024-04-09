


const searchBTn = document.getElementById('searchBtn');
const searchSection = Array.from(document.getElementsByClassName('search-section'))[0];
const filterOffer = document.querySelector('.filter-offer');
const filterSection = document.querySelector('.filter-section');
const services = document.querySelector('.services');
const footer = document.getElementsByTagName('footer')[0];
const sectionWrapper = document.querySelector('.section-wrapper');
const filterBtn =Array.from(document.getElementsByClassName('filterBtn'))[0];
const filterBtn2 =Array.from(document.getElementsByClassName('filterBtn'))[1];
const backArrow = document.getElementById('backArrow');
const main = document.querySelector('main')

searchBTn.addEventListener('click', openSearch);

function openSearch(){
    if (window.innerWidth < 1920){
        searchSection.classList.add('displayNone');
        sectionWrapper.classList.remove('displayNone');
        filterOffer.classList.remove('displayNone');
    }else{
        sectionWrapper.classList.remove('displayNone');
        filterOffer.classList.remove('displayNone');
        filterSection.classList.remove('displayNone');
        main.style.paddingBottom = '60px';
    }

}

filterBtn.addEventListener('click', openFilter);


function openFilter(){
    if (window.innerWidth < 800){
        filterOffer.classList.add('displayNone');
        services.classList.add('displayNone');
        footer.classList.add('displayNone')
        filterSection.classList.remove('displayNone')
    }else if(window.innerWidth >= 800 && window.innerWidth < 1920){
        filterOffer.classList.add('displayNone');
        services.classList.add('displayNone');
        filterSection.classList.remove('displayNone')
    }

}

backArrow.addEventListener('click', goBack);
filterBtn2.addEventListener('click', goBack)

function goBack(){

    if (window.innerWidth < 800){
            filterSection.classList.add('displayNone');
            services.classList.remove('displayNone');
            filterOffer.classList.remove('displayNone')
            footer.classList.remove('displayNone')
    }else if(window.innerWidth >= 800 && window.innerWidth < 1920){
        filterSection.classList.add('displayNone');
        services.classList.remove('displayNone');
        filterOffer.classList.remove('displayNone')
    }

}







const tickets = [
    {
        "id":1,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":2,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":3,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "takeOff":"Take off",
        "landing":"Landing",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":4,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":5,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":6,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":7,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":8,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    },
    {
        "id":9,
        "img":"./images/GeorgianAirlaines.svg",
        "name":"Georgian Airlines",
        "start":"12:00",
        "end":"19:00",
        "full":"7 Hours",
        "pricefull":"Price:600$",
        "price":"Price",
        "amount":"600$"
    }

]

const ticketContainer = document.querySelector('.ticket-container');

function createTicketCard(item) {
    const ticketCard = document.createElement('div');
    ticketCard.classList.add('ticket-card');

    const ticketMain = document.createElement('div');
    ticketMain.classList.add('ticketMain');

    const priceFull = document.createElement('span');
    priceFull.classList.add('price');
    priceFull.textContent = item.pricefull;

    const dealBtn = document.createElement('button');
    dealBtn.classList.add('dealBtn');
    dealBtn.textContent = 'View Deal';

    const priceDeal = document.createElement('div');
    priceDeal.classList.add('price-deal');

    ticketCard.append(ticketMain, priceFull, dealBtn, priceDeal);

    const flyCompany = document.createElement('div');
    flyCompany.classList.add('fly-company');

    const flyContainer = document.createElement('div');
    flyContainer.classList.add('fly-container');

    ticketMain.append(flyCompany, flyContainer);

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = "airlines";

    const aviaName = document.createElement('span');
    aviaName.textContent = item.name;

    flyCompany.append(img, aviaName);

    const flyTime = document.createElement('div');
    flyTime.classList.add('fly-time');

    const fullEnd = document.createElement('div');
    fullEnd.classList.add('full-end');

    flyContainer.append(flyTime, fullEnd);

    const flyLanding = document.createElement('div');
    flyLanding.classList.add('fly-landing');

    const flyHour = document.createElement('div');
    flyHour.classList.add('fly-hour');

    flyTime.append(flyLanding, flyHour);

    const takeOff = document.createElement('span');
    takeOff.classList.add('landingCommon');
    takeOff.textContent = "Take off";

    const landing = document.createElement('span');
    landing.classList.add('landingCommon');
    landing.textContent = "Landing";

    flyLanding.append(takeOff, landing);

    const hourStart = document.createElement('span');
    hourStart.classList.add('hourStart');
    hourStart.textContent = item.start;

    const lineStyle = document.createElement('div');
    lineStyle.classList.add('lineStyle');

    const hourEnd = document.createElement('span');
    hourEnd.classList.add('hourEnd');
    hourEnd.textContent = item.end;

    flyHour.append(hourStart, lineStyle, hourEnd);

    const lineHour = document.createElement('hr');
    lineHour.classList.add("line-hour");

    const square = document.createElement('div');
    square.classList.add('square');

    lineStyle.append(lineHour, square);

    const fullTime = document.createElement('span');
    fullTime.classList.add('full-time');
    fullTime.textContent = item.full;
    fullEnd.appendChild(fullTime);

    const priceBox = document.createElement('div');
    priceBox.classList.add('price-box');

    const lineDeal = document.createElement('hr');
    lineDeal.classList.add("line-deal");

    const dealButton = document.createElement('button');
    dealButton.classList.add('dealButton');
    dealButton.textContent = 'View Deal';

    priceDeal.append(priceBox, lineDeal, dealButton);

    const price = document.createElement('span');
    price.classList.add('pricetext');
    price.textContent = item.price;

    const amount = document.createElement('span');
    amount.classList.add('pricetext');
    amount.textContent = item.amount;

    priceBox.append(price, amount);

    return ticketCard;
}


function updateDisplayedTickets() {
    ticketContainer.innerHTML = ''; 
    if (window.innerWidth < 800) {
        const maxActions = 5;
        tickets.slice(0, maxActions).forEach(item => {
            const ticketCard = createTicketCard(item);
            ticketContainer.appendChild(ticketCard);
        });
    } else if (window.innerWidth >= 800 && window.innerWidth < 1920) {
        const maxActions = 6;
        tickets.slice(0, maxActions).forEach(item => {
            const ticketCard = createTicketCard(item);
            ticketContainer.appendChild(ticketCard);
        });
    } else {
        const maxActions = 8;
        tickets.slice(0, maxActions).forEach(item => {
            const ticketCard = createTicketCard(item);
            ticketContainer.appendChild(ticketCard);
        });
    }
}

updateDisplayedTickets();

window.addEventListener('resize', updateDisplayedTickets);



