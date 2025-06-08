import theme from './formModal.module.scss';

interface FormModalProps {
  children: React.ReactNode;
}

export const FormModal = ({ children }: FormModalProps) => {
  return (
    <div className={theme['formModal--wrapper']}>
      <section className={theme['formModal--modal']}>{children}</section>
    </div>
  );
};
