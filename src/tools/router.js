import { render } from "./fakejs";

window.addEventListener('load', () => {
    const links = document.querySelectorAll('a');

    links.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const route = item.getAttribute('href');

            // Update the browser URL and state without reloading
            window.history.replaceState(null, '', route);
        });
    });
});

export const router = (container) => {
    const url = window.location.pathname;
    const routeAddress = url.endsWith('/') ? url.slice(0, -1) : url;
    const page = container[routeAddress] || container['/'];

    render(page);
    history.replaceState(null, '', routeAddress);

    return container;
};

export const useLink = () => {
    return ({ link, name, _class }) => {
        return `<a href="${link}" class="${_class}">${name}</a>`;
    };
}