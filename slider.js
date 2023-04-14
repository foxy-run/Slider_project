// set objects with property image + title

let images = [{
    url: "../Slider/image/image%202.1.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don",
    apart: "LCD admiral",
    area: "81 m2",
    time: "3.5 months"
}, {
    url: "../Slider/image/image%202.png",
    title: "Sochi Thieves",
    city: "Sochi",
    apart: "Thieves",
    area: "105 m2",
    time: "4 months"
}, {
    url: "../Slider/image/image%203.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don",
    apart: "Patriotic",
    area: "93 m2",
    time: "3 months"
}];


// call function

function initSlider() {
    if (!images || !images.length) return;
}

// found elements in html and put in variables

let sliderImages = document.querySelector(".projects__picture");
let sliderArrows = document.querySelector(".projects__arrows");
let sliderDots = document.querySelector(".projects__dots");
let sliderLinks = document.querySelector(".projects__list");
let sliderCitys = document.querySelector(".projects__column-city");
let sliderAreas = document.querySelector(".projects__column-area");
let sliderTimes = document.querySelector(".projects__column-time");

// call functions

initImages();
initArrows();
initDots();
initLinks();
initCitys();
initAreas();
initTimes();

// function definition initImages

function initImages() {
    images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
    });
}


// function definition initArrows

function initArrows() {
    sliderArrows.querySelectorAll(".projects__arrow").forEach(arrow => {
        arrow.addEventListener("click", function () {
            let currentNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
                nextNumber = currentNumber === 0 ? images.length - 1 : currentNumber - 1;
            } else {
                nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
            }
            moveSlider(nextNumber);
        })
    })
}

//function definition on Init

function initDots() {
    images.forEach((image, index) => {
        let dot = `<div class="projects__dot n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".projects__dot").forEach(dot => {
        dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);
        });
    });
}


function initLinks() {
    images.forEach((image, index) => {
        let linkDiv = `<li><a class="projects__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</a></li>`;
        sliderLinks.innerHTML += linkDiv;
    });
    sliderLinks.querySelectorAll(".projects__link").forEach(linkDiv => {
        linkDiv.addEventListener("click", function (event) {
            event.preventDefault();
            moveSlider(this.dataset.index);

        });
    });
}

function initCitys() {
    images.forEach((elem, index) => {
        let city = `<div class="projects__city n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}<br>${images[index].apart}</div>`;
        sliderCitys.innerHTML += city;
    });
}

function initAreas() {
    images.forEach((image, index) => {
        let area = `<div class="projects__area n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].area}</div>`;
        sliderAreas.innerHTML += area;
    });
}

function initTimes() {
    images.forEach((image, index) => {
        let time = `<div class="projects__time n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].time}</div>`;
        sliderTimes.innerHTML += time;
    });
}

// function definition moveSlider

function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");

    sliderCitys.querySelector(".active").classList.remove("active");
    sliderCitys.querySelector(".n" + num).classList.add("active");

    sliderAreas.querySelector(".active").classList.remove("active");
    sliderAreas.querySelector(".n" + num).classList.add("active");

    sliderTimes.querySelector(".active").classList.remove("active");
    sliderTimes.querySelector(".n" + num).classList.add("active");
}

