const pageHolder = document.getElementById('page');

const route = (page) => {
    pageHolder.innerHTML = 'Location <span>' + page + '</span> is opening soon';
};

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