const
  btnWrap = document.querySelector('.navigation__wrapper'),
  btnMenu = document.querySelector('.navigation__btn'),
  navList = document.querySelector('.navigation__list');

btnWrap.addEventListener('click', function () {
  btnMenu.classList.toggle('navigation__btn--open');
  navList.classList.toggle('navigation__list--show');
});



const
  slides = document.querySelectorAll('.slider__item'),
  interval = setInterval(slidePlay, 6000),
  nextBtn = document.querySelector('.slider__btn--right'),
  backBtn = document.querySelector('.slider__btn--left'),
  captions = document.querySelectorAll('.slider__caption');

let currentSlide = 0;

slides[currentSlide].classList.add('slide__item--show');

function removeShow() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slide__item--show');
  };
};

function slidePlay() {
  removeShow();
  currentSlide = (currentSlide + 1) % slides.length;
  slideShow();
};

function slideShow() {
  slides[currentSlide].classList.add('slide__item--show');
};

function stopPlay() {
  clearInterval(interval);
  console.log('stop');
};

// function timeOut() {
//   setTimeout(interval, 10000);
//   console.log('startnow');
// };

nextBtn.addEventListener('click', function () {
  removeShow();
  currentSlide = (currentSlide + 1) % slides.length;
  console.log(currentSlide);
  console.log(this);
  slideShow();
});

backBtn.addEventListener('click', function () {
  removeShow();
  currentSlide = (currentSlide - 1) % slides.length;
  console.log(currentSlide);
  slides[currentSlide].classList.add('slide__item--show');
});


