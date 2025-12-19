import './input.css';

export const createInput = () => {
  const div = document.createElement('div');
  const span = document.createElement('span');
  const input = document.createElement('input');

  div.className = 'form-control';
  span.className = 'decoration-line';
  input.className = 'control';

  div.appendChild(span);
  div.appendChild(input);

  return div;
};
