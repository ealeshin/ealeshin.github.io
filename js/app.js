const pageHolder = document.getElementById('page');

const route = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    pageHolder.innerHTML = pathname !== '/' ? 'Location ' + pathname + ' is opening soon' : '&nbsp;';
};

const nav = document.querySelectorAll('nav > a');
nav.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        pageHolder.classList.add("fade-in");
        setTimeout(() => {
            pageHolder.classList.remove("fade-in");
        }, 2500);
        route(link.getAttribute('data-route'));
    });
});

route(window.location.pathname);