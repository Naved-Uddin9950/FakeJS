import { render, router } from './tools/fakejs.js';
import { App } from './App.js';
import { Home } from './components/Home.js';
import { Contact } from './components/Contact.js';

render(App);

router({
    '/': App,
    '/home': Home,
    '/contact': Contact
});