let slideIndex = 1;

showSlide(1)

let slideshowInterval = null;

document.addEventListener("DOMContentLoaded", createInterval);

function chooseSlide(slideNumber) { showSlide(slideIndex = slideNumber); }
function changeSlide(slideNumber) { showSlide(slideIndex += slideNumber); }
function showSlide(slideNumber) {
    var i;

    const images = document.querySelectorAll('img');

    if (slideNumber > images.length)

        slideIndex = 1;

    if (slideNumber < 1)

        slideIndex = images.length;

    for (i = 0; i < images.length; i++) {

        images[i].style.display = 'none';

    }

    images[slideIndex - 1].style.display = 'block';


    const buttons = document.querySelectorAll('.buttons span');

    for (i = 0; i < buttons.length; i++) {

        buttons[i].style.background = 'rgba(255,255,255,0.2)';
    }

    buttons[slideIndex - 1].style.background = 'rgba(255,255,255,0.7)';
}

function createInterval() {
    if (slideshowInterval == null) {

        slideshowInterval = setInterval(() => changeSlide(1), 5000);
    }
}




// перелистывание слайда мышкой

const sliderContainer = document.querySelector('.slider');

const imagesContainer = document.querySelector('.images');

const images = document.querySelectorAll('img');

for (i = 0; i < images.length; i++) {

    images[i].draggable = false;

}

let threshold = 150;

let x0 = undefined;

let x1 = undefined;

sliderContainer.addEventListener('mousedown', startDragging);

sliderContainer.addEventListener('mousemove', dragging);

sliderContainer.addEventListener('mouseup', stopDragging);

function startDragging(e) {

    clearInterval(slideshowInterval);

    slideshowInterval=null;

    slide = e.target;

    x0 = e.clientX;
}

function dragging(e) {

    x1 = e.clientX;

    slideDistance = (x1 - x0);

    imagesContainer.style.left = slideDistance + 'px';

    if (Math.abs(slideDistance) > threshold) {

        if (slideDistance > threshold) { changeSlide(1); }

        if (slideDistance < -threshold) { changeSlide(-1); }

        stopDragging(e);
    }
}

function stopDragging(e) {

    imagesContainer.style.left = '0px';

    x0 = undefined;

    x1 = undefined;

    createInterval();
}