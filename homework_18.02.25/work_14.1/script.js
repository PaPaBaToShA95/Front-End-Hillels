console.time()
const sliderImg = document.querySelectorAll('.slider__item');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const circlesContainer = document.getElementById('circles-container');
let index = 0;
const length = sliderImg.length;

sliderImg.forEach(slide => slide.style.display = 'none');
sliderImg[index].style.display = 'block';


for (let i = 0; i < length; i++) {
    const circule = document.createElement('div');
    circule.classList.add('circule');
    circule.setAttribute('data-index', i);
    circlesContainer.appendChild(circule);

    circule.addEventListener('click', () => {
        setActiveSlide(i);
    });
}

function showBtn() {
    if (index === 0) {
        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = 'block';
    }

    if (index === length - 1) {
        rightBtn.style.display = 'none';
    } else {
        rightBtn.style.display = 'block';
    }
}


function setActiveSlide(i) {
    sliderImg.forEach(slide => slide.style.display = 'none');
    sliderImg[i].style.display = 'block';
    const circles = document.querySelectorAll('.circule');
    circles.forEach(circule => circule.classList.remove('active'));
    circles[i].classList.add('active');
    index = i;
    showBtn();
}

leftBtn.addEventListener('click', () => {
    if (index > 0) {
        setActiveSlide(index - 1);
    }
});
rightBtn.addEventListener('click', () => {
    if (index < length - 1) {
        setActiveSlide(index + 1);
    }
});
setActiveSlide(index);

console.timeEnd()