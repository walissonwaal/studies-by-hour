import style from './Button.module.scss';

type ButtonProps = {
  children: string;
  type?: 'button' | 'submit';
};

export default function Button({children, type = 'button'}: ButtonProps) {
    return (
      <button className={style.button} type={type}>
        {children}
      </button>
    )
}