import './index.css';
import { render } from './tools/fakejs.js';
import { App } from './App.js';
import { Home } from './components/Home.js';
import { Contact } from './components/Contact.js';
import { router } from './tools/router.js';

router({
    '/': App,
    '/home': Home,
    '/contact': Contact
});