const root = document.getElementById('root');

export const render = (element) => {
  element.trim();
  root.innerHTML += element;
};

export const Container = () => { }

export const router = (container) => {
  const url = window.location.pathname;
  let urlArray = url.split('.')

  if (urlArray.length > 1) {
    urlArray.pop();
  }

  const routeAddress = urlArray.join('');
  console.log(routeAddress);

  Object.entries(container).forEach(([route, page]) => {
    if (routeAddress === route) {
      render(page);
      history.replaceState(null, '', route);
    }
  });
};
