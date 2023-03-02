export const slider = () => {
  let offset = 0;
  let slideIndex = 1;

  const slides = document.querySelectorAll('.slider__slide'),
    slider = document.querySelector('.slider'),
    prev = document.querySelector('.slider__btn_prev'),
    next = document.querySelector('.slider__btn_next'),
    slidesWrapper = document.querySelector('.slider__wrapper'),
    slidesField = document.querySelector('.slider__inner');

  const width = window.getComputedStyle(slidesWrapper).width;

  slidesField.style.width = 100 * slides.length + '%';

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  const indicators = document.createElement('ol');
  const dots = [];
  indicators.classList.add('slider__indicators');
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('slider__dot');

    if (i == 0) {
      dot.classList.add('slider__dot_active');
    }
    indicators.append(dot);
    dots.push(dot);
  }

  const setActiveDot = () => {
    dots.forEach((dot) => dot.classList.remove('slider__dot_active'));
    dots[slideIndex - 1].classList.add('slider__dot_active');
  };

  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    setActiveDot();
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    setActiveDot();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      setActiveDot();
    });
  });
};
