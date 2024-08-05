import { render } from "./fakejs";

export const router = (container) => {
    const url = window.location.pathname;
    let urlArray = url.split('.')

    if (urlArray.length > 1) {
        urlArray.pop();
    }

    const routeAddress = urlArray.join('');

    Object.entries(container).forEach(([route, page]) => {
        if (routeAddress === route) {
            render(page);
            history.replaceState(null, '', route);
        }
    });
};
