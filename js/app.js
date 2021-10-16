const pageHolder = document.querySelector('#page');
const menuIcon = document.querySelector('#menuToggle');

const mobileMenu = document.querySelectorAll('.nav-container')[0];
const mainContent = document.querySelectorAll('.intro-container')[0];

const route = (page) => {
    pageHolder.innerHTML = 'Location <span>' + page + '</span> is opening soon';
};

menuIcon.addEventListener('click', () => {
    let menuOpened = menuIcon.classList.contains('opened');
    mainContent.style.display = menuOpened ? 'flex' : 'none';
    mobileMenu.style.display = menuOpened ? 'none' : 'flex';
    if (!menuOpened) {
        menuIcon.classList.add('opened');
    } else {
        menuIcon.classList.remove('opened');
    }
});

const nav = document.querySelectorAll('nav > a');
nav.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        pageHolder.classList.add("fade-in");
        setTimeout(() => {
            pageHolder.classList.remove("fade-in");
        }, 2500);
        //route(link.getAttribute('data-page'));
        route(link.innerHTML);
    });
});

route(window.location.pathname);