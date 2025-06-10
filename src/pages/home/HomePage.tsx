import { useState } from 'react';
import { Button } from '@/components/common/Button/Button';
import { Icon } from '@/assets/icons/Icon';
import theme from './homePage.module.scss';
import { RegisterForm } from '../../components/forms/RegisterForm/RegisterForm';

export const HomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <section className={theme.black}>
      <button onClick={() => setIsOpenModal(true)}>Abre la sección.</button>
      {isOpenModal && <RegisterForm setIsOpenSection={setIsOpenModal} />}
      <div className={theme.rojo}>
        <Button type="button" style="filled" color="onbrand" onClick={() => setIsOpenModal(true)}>
          abre el modal
        </Button>
        <Button type="button" style="filled" color="onbrand-secondary" onClick={() => setIsOpenModal(true)}>
          <Icon icon="AsteriskLine" size="small" color="onprimary" />
        </Button>
      </div>
    </section>
  );
};
