// модальное окно
const modalWindow = document.querySelector('.modal');
// контентная часть модального окна
const modalContent = document.querySelector('.modal .modal__content');
// основное изображение на странице
const mainImage = document.querySelector('.slider__big_img img');

// Открытие модального окна при клике на основное изображение
mainImage.addEventListener('click', (e) => {
    const img = e?.target.cloneNode(true);
    if (img) {
        modalContent.append(img);
        modalWindow.style.display = 'block';
        document.documentElement.classList.add('active__modal');
    }
});

// Закрытие модального окна при клике вне изображения
document.documentElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modalContent.innerHTML = '';
        modalWindow.style.display = 'none';
        document.documentElement.classList.remove('active__modal');
    }
});

// Закрытие модального окна при клике на изображение внутри модального окна
modalContent.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'img') {
        modalContent.innerHTML = '';
        modalWindow.style.display = 'none';
        document.documentElement.classList.remove('active__modal');
    }
});

