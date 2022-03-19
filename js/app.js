window.currentPage = 'home';

const body = document.querySelector('body');
const menuIcon = document.querySelector('#menuToggle');
const mobileNav = document.querySelectorAll('.nav-container')[0];
const nav = document.querySelectorAll('nav > a');
const main = document.querySelectorAll('main');
const sections = document.querySelectorAll('section');
const titles = document.querySelector('.titles-feed');

const hideElements = (...args) => {
    for (let i = 0; i < args.length; i++) {
        args[i].forEach((el) => {
            el.style.display = 'none';
        });
    }
    titles.style.display = 'block';
};

const openMobileNav = () => {
    mobileNav.style.display = 'flex';
    menuIcon.classList.add('opened');
};

const closeMobileNav = () => {
    mobileNav.style.display = 'none';
    menuIcon.classList.remove('opened');
};

const isMobileNavOpened = () => {
    return menuIcon.classList.contains('opened');
};

const themes = {
    home: {
        backgroundColor: 'black',
        textColor: 'white'
    },
    setlist: {
        backgroundColor: 'black',
        textColor: 'white'
    },
    events: {
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

titles.addEventListener('animationend', () => {
   titles.style.display = 'none';
});

menuIcon.addEventListener('click', () => {
    let backgroundBlock = document.querySelector('#' + window.currentPage);
    if (isMobileNavOpened()) {
        body.classList.remove('no-scroll');
        backgroundBlock.classList.remove('blurred');
        closeMobileNav();
    } else {
        body.classList.add('no-scroll');
        backgroundBlock.classList.add('blurred');
        openMobileNav();
    }
});

nav.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.remove('no-scroll');
        window.scrollTo(0, 0);
        let clickedLink = event.target;
        nav.forEach((navLink) => {
            navLink.classList.remove('active');
        });
        clickedLink.classList.add('active');
        hideElements(main, sections);
        if (isMobileNavOpened()) {
            closeMobileNav();
        }
        let activePageName = clickedLink.getAttribute('data-page');
        window.currentPage = activePageName;
        let activePage = document.querySelector('#' + activePageName);
        if (activePage !== null) {
            activePage.classList.remove('blurred');
            activePage.style.display = 'block';
            activePage.style.backgroundColor = themes[activePageName].backgroundColor;
            document.body.style.color = themes[activePageName].textColor;
        }
    });
});

hideElements(sections);
