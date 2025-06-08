import { useEffect } from 'react';
import theme from './formModal.module.scss';

interface FormModalProps {
  children: React.ReactNode;
}

export const FormModal = ({ children }: FormModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  // Muy sencillo, al montarse el body deja de poderse scrollear, al desmontarse vuelve a poderse.

  return (
    <div className={theme['formModal--wrapper']}>
      <section className={theme['formModal--modal']}>{children}</section>
    </div>
  );
};
