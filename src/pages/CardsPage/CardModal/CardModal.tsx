import { createPortal } from 'react-dom';
import theme from './cardModal.module.scss';
import classNames from 'classnames/bind';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
// import cn from 'classnames';

const cx = classNames.bind(theme);

interface FormModalProps {
  children: React.ReactNode;
  isClosing: boolean;
  onClose: () => void;
}

export const CardModal = ({ children, isClosing, onClose }: FormModalProps) => {
  useBodyScrollLock({ enabled: true });

  const handleWrapperClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      onClick={handleWrapperClick}
      className={cx('formModal--wrapper', { 'formModal--wrapper--closing': isClosing })}
    >
      <section className={cx('formModal--modal', { 'formModal--modal--closing': isClosing })}>{children}</section>
    </div>
  );

  return createPortal(modalContent, document.body);
};
