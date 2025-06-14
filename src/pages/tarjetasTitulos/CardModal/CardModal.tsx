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

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = 'unset';

      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
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
