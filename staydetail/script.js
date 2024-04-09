

const showMore = document.getElementById('showMore');
const showLess = document.getElementById('showLess');
const hotelInfo = document.querySelector('.hotel-info');


showMore.addEventListener('click', () =>{

    hotelInfo.classList.remove('displayNone');
    showMore.classList.add('displayNone')

})

showLess.addEventListener('click', () =>{

    hotelInfo.classList.add('displayNone');
    showMore.classList.remove('displayNone')

})
