import { useState } from 'react';
import { Button } from '@/components/common/Button/Button';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import theme from './homePage.module.scss';
import { RegisterForm } from '../../components/forms/RegisterForm/RegisterForm';
// import { useTranslation } from 'react-i18next';
import { Register } from '@/components/common/Register/Register';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { DoubleBlock } from '@/components/layout/DoubleBlock/DoubleBlock';

export const HomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const { t } = useTranslation('form');

  return (
    <section className={theme.black}>
      <div className={theme.rojo}>
        <Button type="button" style="filled" color="onbrand" onClick={() => setIsOpenModal(true)}>
          abre el modal
        </Button>
        {isOpenModal && <RegisterForm setIsOpenSection={setIsOpenModal} />}
      </div>
      <SingleBlock backgroundColor="dark">
        <Register hasImage={true} setIsOpenModal={setIsOpenModal} />
      </SingleBlock>
      <SingleBlock backgroundColor="dark">
        <Register setIsOpenModal={setIsOpenModal} />
      </SingleBlock>
      <SingleBlock backgroundColor="dark" fullHeight={true} paddingSize="large">
        <Register hasImage={true} setIsOpenModal={setIsOpenModal} />
      </SingleBlock>
      <SingleBlock backgroundColor="light">
        <TopUp setIsOpenModal={setIsOpenModal} />
      </SingleBlock>
      <SingleBlock backgroundColor="light">
        <TopUp version="large" setIsOpenModal={setIsOpenModal} />
      </SingleBlock>

      <DoubleBlock>
        <SingleBlock backgroundColor="light">
          <TopUp version="large" setIsOpenModal={setIsOpenModal} />
        </SingleBlock>
        <SingleBlock backgroundColor="dark">
          <Register hasImage={true} keepImageOnDesktop={true} setIsOpenModal={setIsOpenModal} />
        </SingleBlock>
      </DoubleBlock>
    </section>
  );
};
