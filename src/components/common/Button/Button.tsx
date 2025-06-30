import classNames from 'classnames/bind';
import theme from './button.module.scss';

const cx = classNames.bind(theme);

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
  style: 'filled' | 'outlined';
  color?: 'onbrand' | 'onbrand-secondary' | 'onprimary' | 'onprimary-secondary';
  fullWidth?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Sobre las traducciones:

export const Button = ({
  type = 'button',
  style = 'filled',
  color = 'onprimary',
  fullWidth = false,
  isDisabled = false,
  onClick,
  children,
}: ButtonProps) => {
  const buttonClass = cx('btn', `btn--${style}`, `btn--${color}`, 'label-button', {
    'btn--full-width': fullWidth,
  });

  return (
    <>
      <button type={type} onClick={onClick} disabled={isDisabled} className={buttonClass}>
        {children}
      </button>
    </>
  );
};
