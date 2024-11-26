
// кнопка бургер меню и само меню
const burgerBtn = document.querySelector('.burger-menu__icon');
const burgerMenu = document.querySelector('.burger-menu');

// добавляем и убираем класс
burgerBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('burger__open')
        burgerMenu.classList.toggle('active')
})