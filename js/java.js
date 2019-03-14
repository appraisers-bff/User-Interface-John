TweenMax.from('.header__text', 1.5, {x:-300, opacity:0, scale:0.5, /*onComplete: tweener*/});

// function tweener() {
    TweenMax.from('.header__button', 1.5, {x:300, opacity:0, scale:0.5});
// }

// const carousel = document.querySelector("[data-target='carousel']");
// const card = carousel.querySelector("[data-target='card']");
// const leftButton = document.querySelector("[data-action='slideLeft']");
// const rightButton = document.querySelector("[data-action='slideRight']");

// const carouselWidth = carousel.offsetWidth;
// const cardStyle = card.currentStyle || window.getComputedStyle(card)
// const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

// const cardCount = carousel.querySelectorAll("[data-target='card']").length;

// let offset = 0;
// const maxX = -((cardCount / 3) * carouselWidth + 
//                (cardMarginRight * (cardCount / 3)) - 
//                carouselWidth - cardMarginRight);


// leftButton.addEventListener("click", function() {
//     if (offset !== 0) {
//         offset += carouselWidth + cardMarginRight;
//         carousel.style.transform = `translateX(${offset}px)`;
//         }
//     })
                
// rightButton.addEventListener("click", function() {
//     if (offset !== maxX) {
//         offset -= carouselWidth + cardMarginRight;
//         carousel.style.transform = `translateX(${offset}px)`;
//         }
//     })


// Top Button
const topButt = document.querySelector('.header__button')

topButt.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = '#262749';
})

topButt.addEventListener('mouseout', function(event) {
event.target.style.backgroundColor = 'white';
})


// Bottom Button 
const button = document.querySelector('.button__button');

button.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'white';
})

button.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = '#262749';
})


// nav
const linkBorder = document.querySelectorAll('a');

linkBorder.forEach(function(currentValue) {
    currentValue.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = '#A9AFD5';
        event.target.style.color = '#262749';
    })
    
    currentValue.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '#262749';
        event.target.style.color = 'white';
    })
})