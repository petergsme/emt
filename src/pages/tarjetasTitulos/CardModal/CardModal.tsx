import { useEffect } from 'react';
import theme from './cardModal.module.scss';
import classNames from 'classnames/bind';
// import cn from 'classnames';

const cx = classNames.bind(theme);

interface FormModalProps {
  children: React.ReactNode;
  isClosing: boolean;
  onClose: () => void;
}

export const CardModal = ({ children, isClosing, onClose }: FormModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleWrapperClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleWrapperClick}
      className={cx('formModal--wrapper', { 'formModal--wrapper--closing': isClosing })}
    >
      <section className={cx('formModal--modal', { 'formModal--modal--closing': isClosing })}>{children}</section>
    </div>
  );
};
