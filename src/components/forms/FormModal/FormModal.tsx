import theme from './formModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(theme);
interface FormModalProps {
  children: React.ReactNode;
  isClosing: boolean;
}

export const FormModal = ({ children, isClosing }: FormModalProps) => {
  return (
    <div
      className={cx('formModal__wrapper', {
        'formModal__wrapper--exit': isClosing,
      })}
    >
      <section className={cx('formModal__modal', { 'formModal__modal--exit': isClosing })}>{children}</section>
    </div>
  );
};
