import { render } from "./fakejs";


const link = document.querySelectorAll('a');

if (link && link.length > 0) {
    link.map((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(item);
        });
    });
}

export const router = (container) => {
    const url = window.location.pathname;
    let urlArray = url.split('.')

    if (urlArray.length > 1) {
        urlArray.pop();
    }

    const routeAddress = urlArray.join('');

    Object.entries(container).forEach(([route, page]) => {
        if (routeAddress.toLowerCase() === route.toLowerCase()) {
            render(page);
            history.replaceState(null, '', route.toLowerCase());
        }
    });
};

export const useLink = () => {
    return ({ link, name, _class }) => {
        return `<a href="${link}" class="${_class}">${name}</a>`;
    };
}