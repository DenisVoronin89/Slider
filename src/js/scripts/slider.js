const btnPrevSlide = document.querySelector('.swiper-button-prev');
const btnNextSlide = document.querySelector('.swiper-button-next');
const mainImage = document.querySelector('.slider__big_img img');

// изменить путь к картинке при клике на кнопки переключения слайда
function getActiveImg () {
    const sliderContainer = document.querySelector('.swiper-slide-active img');
    mainImage.src = sliderContainer.src;
}

// Обработчик для кнопки "влево"
btnPrevSlide.addEventListener('click', () => {
    getActiveImg();
});

// Обработчик для кнопки "вправо"
btnNextSlide.addEventListener('click', () => {
    getActiveImg();
});

// инициализируем слайдер
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true, // Бесконечный цикл
        centeredSlides: true, // Центрирование активного слайда
        loopedSlides: 6, // Количество слайдов для зацикливания (обновляем на количество слайдов)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        initialSlide: 0,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            540: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1000: {
                slidesPerView: 5,
                spaceBetween: 20,
            }
        }
    });
});
