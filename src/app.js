import { Header } from './components/Header.js';
import { render, router } from './tools/fakejs.js';

const App = `
     <div>
        <h1>Hello, World!</h1>
        ${Header}
     </div>
`;

render(App);

router({
  '/': App,
});