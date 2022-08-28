const burger = document.getElementById('burger');
const menu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('open')
})