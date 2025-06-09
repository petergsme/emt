import { useState } from 'react';
import theme from './homePage.module.scss';
import { RegisterForm } from '../../components/forms/RegisterForm/RegisterForm';

export const HomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section className={theme.black}>
      <button onClick={() => setIsOpenModal(true)}>Abre la sección.</button>
      {isOpenModal && <RegisterForm setIsOpenSection={setIsOpenModal} />}
      <div className={theme.rojo}>pepino</div>
    </section>
  );
};
