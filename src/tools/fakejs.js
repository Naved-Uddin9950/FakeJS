const root = document.getElementById('root');

export const render = (element) => {
  element.trim();
  root.innerHTML += element;
};