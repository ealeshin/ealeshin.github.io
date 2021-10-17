const menuIcon = document.querySelector('#menuToggle');

const mobileMenu = document.querySelectorAll('.nav-container')[0];
const mainContent = document.querySelectorAll('.intro-container')[0];

const nav = document.querySelectorAll('nav > a');
const pages = document.querySelectorAll('main, section');

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

nav.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let clickedLink = event.target;
        nav.forEach((navLink) => {
            navLink.classList.remove('active');
        });
        clickedLink.classList.add('active');
        pages.forEach((page) => {
            page.style.display = 'none';
        });
        let activePageName = clickedLink.getAttribute('data-page');
        let activePage = document.querySelector('#' + activePageName);
        if (activePage !== null) {
            activePage.style.display = 'block';
        }
    });
});
