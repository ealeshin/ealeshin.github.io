const menuIcon = document.querySelector('#menuToggle');

const mobileNav = document.querySelectorAll('.nav-container')[0];
const mainContent = document.querySelectorAll('.intro-container')[0];

const nav = document.querySelectorAll('nav > a');
const main = document.querySelectorAll('main');
const sections = document.querySelectorAll('section');

const hideElements = (...args) => {
    for (let i = 0; i < args.length; i++) {
        args[i].forEach((el) => {
            el.style.display = 'none';
        });
    }
};

const openMobileNav = () => {
    mobileNav.style.display = 'flex';
    menuIcon.classList.add('opened');
};

const closeMobileNav = () => {
    mobileNav.style.display = 'none';
    menuIcon.classList.remove('opened');
};

const themes = {
    about: {
        backgroundColor: '#30414B',
        textColor: 'white'
    },
    inspired: {
        backgroundColor: 'black',
        textColor: 'white'
    },
    playlist: {
        backgroundColor: '#DFDFDF',
        textColor: 'black'
    },
    more: {
        backgroundColor: '#132B2C',
        textColor: 'white'
    },
    contact: {
        backgroundColor: '#36362A',
        textColor: 'white'
    }
};

menuIcon.addEventListener('click', () => {
    let menuOpened = menuIcon.classList.contains('opened');
    if (menuOpened) {
        closeMobileNav();
    } else {
        openMobileNav();
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
        hideElements(main, sections);
        closeMobileNav();
        let activePageName = clickedLink.getAttribute('data-page');
        let activePage = document.querySelector('#' + activePageName);
        if (activePage !== null) {
            activePage.style.display = 'block';
            activePage.style.backgroundColor = themes[activePageName].backgroundColor;
            document.body.style.color = themes[activePageName].textColor;
        }
    });
});

hideElements(sections);
