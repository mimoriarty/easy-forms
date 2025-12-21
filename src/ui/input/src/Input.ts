import './input.css';

export interface InputProps {
  placeholder: string;
  style?: Partial<CSSStyleDeclaration>
  classes?: string
}

export class Input {
  placeholder: string;

  style: Partial<CSSStyleDeclaration>;

  classes: string;

  constructor({
    placeholder = '',
    style = {},
    classes = ''
  }: InputProps) {
    this.placeholder = placeholder;
    this.style = style;
    this.classes = classes;
  }

  render() {
    return createInput({
      placeholder: this.placeholder,
      style: this.style,
      classes: this.classes
    });
  }
}

const createInput = ({
  placeholder = '',
  style = {},
  classes = ''
}: InputProps) => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  let controlComputedStyle: Partial<CSSStyleDeclaration> = {
    borderWidth: '1px',
    borderRadius: '0.4rem',
  };

  if (style?.fontSize && typeof style?.fontSize === 'string') {
    const fontSize = Number.parseInt(style?.fontSize.replace('rem', ''), 10);
    controlComputedStyle = {
      ...controlComputedStyle,
      borderWidth: `${fontSize * 2}px`,
      borderRadius: `${fontSize / 2}rem`,
    };
  }

  div.className = classes + ' form-control';
  input.className = 'control';
  input.placeholder = placeholder;

  Object.assign(div.style, style);
  Object.assign(input.style, controlComputedStyle);

  div.appendChild(input);

  return div;
};
