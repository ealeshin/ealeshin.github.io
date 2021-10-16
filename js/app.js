const pageHolder = document.querySelector('#page');
const menuIcon = document.querySelector('#menuToggle');

const mobileMenu = document.querySelectorAll('.nav-container')[0];
const mainContent = document.querySelectorAll('.intro-container')[0];

const route = (page) => {
    pageHolder.innerHTML = 'Location <span>' + page + '</span> is opening soon';
};

menuIcon.addEventListener('click', () => {
    let menuClosed = menuIcon.classList.contains('closed');
    if (!menuClosed) {
        menuIcon.classList.add('closed');
    } else {
        menuIcon.classList.remove('closed');
    }
    mainContent.style.display = menuClosed ? 'none' : 'flex';
    mobileMenu.style.display = menuClosed ? 'flex' : 'none';
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