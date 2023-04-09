// set objects with property image + title

let images = [{
    url: "../../Slider/image/image%202.1.png",
    title: "Rostov-on-Don, Admiral"
}, {
    url: "../../Slider/image/image%202.png",
    title: "Sochi Thieves"
}, {
    url: "../../Slider/image/image%203.png",
    title: "Rostov-on-Don Patriotic"
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

// call functions

initImages();
initArrows();
initDots();
initLinks();

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

//function definition initDots

function initDots() {
    images.forEach((image, index) => {
        let dot = `<div class="projects__dot n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".projects__dot").forEach(dot => {
        dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);
        })
    })
}


function initLinks() {
    images.forEach((image, index) => {
        let linkDiv = `<li><a class="projects__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</a></li>`;
        sliderLinks.innerHTML += linkDiv;
    });
    sliderLinks.querySelectorAll(".projects__link").forEach(linkDiv => {
        linkDiv.addEventListener("click", function () {
            moveSlider(this.dataset.index);
        })
    })
}


// function definition moveSlider

function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderLinks.querySelector("active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");
}