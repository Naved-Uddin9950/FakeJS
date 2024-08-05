# FakeJS

FakeJS is a lightweight frontend framework designed for building modern web applications. It provides a simple and flexible approach to creating user interfaces without relying on complex libraries or frameworks.

## Features

- **Vanilla JavaScript**: No dependencies on React or other frameworks.
- **React-like Syntax**: Use a familiar syntax for creating components.
- **Build Tooling**: Built-in support for bundling and optimizing assets.
- **Static Site Generation**: Generate static files for deployment.

## Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/Naved-Uddin9950/FakeJS.git
cd FakeJS
```

### Install Dependencies
```bash
npm install
```

## Usage

### Development

To start the development server and preview your application, run:

```bash
npm run dev
```

This will start a local server and open your application in the browser.

### Build

To build the project for production, run:

```bash
npm run build
```

The built assets will be placed in the dist directory, ready for deployment.

## Example

Create a src/app.jsx file with your components:

```js
import { render } from './tools/fakejs';

const Header = `
    <div>
        <h1>Hello World!</h1>
    </div>
`;

const App = `
    <div>
        <Header />
    </div>
`;

// Render the App component
render(App);
```

## Configuration

### ESLint

FakeJS uses ESLint for code linting. Configuration is located in .eslintrc.js:

```js
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    }
  }
];
```

## Build Tool
FakeJS uses Vite for build tooling. Configuration is located in vite.config.js:

```js
import { defineConfig } from 'vite';

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: './src/index.html',
            },
        },
    },
});
```

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a dev branch with your name ( ie. dev-arnold, dev-selene, dev-rohit etc. ).
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please reach out to naveduddin83@gmail.com.
