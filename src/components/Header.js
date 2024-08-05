import { useLink } from "../tools/router";

const Link = useLink();

export const Header = `
    <h1>Hello from Header</h1>
    ${Link({ name: 'Home', link: '/home', _class: 'homeLink' })}
    ${Link({ name: 'App', link: '/', _class: 'appLink' })}
    ${Link({ name: 'Contact', link: '/contact', _class: 'contactLink' })}
`;