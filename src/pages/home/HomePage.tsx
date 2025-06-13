import { useState } from 'react';
import { Button } from '@/components/common/Button/Button';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import theme from './homePage.module.scss';
import { RegisterForm } from '../../components/forms/RegisterForm/RegisterForm';
import { useTranslation } from 'react-i18next';
import { Register } from '@/components/common/Register/Register';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { DoubleBlock } from '@/components/layout/DoubleBlock/DoubleBlock';
import { FAQ } from '@/components/common/FAQ/FAQ';
import { Rights } from '../usoNormas/Rights/Rights';
import { Benefits } from './Benefits/Benefits';
import { Accident } from '../usoNormas/Use/Accident/Accident';
import { Use } from '../usoNormas/Use/Use';
import { Card } from '../tarjetasTitulos/Cards/Card';
import { bonoOro } from '../tarjetasTitulos/Cards/Card';

export const HomePage: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { t, i18n } = useTranslation('faq');

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const faqQuestions = t('rulesQuestions', { returnObjects: true }) as Array<{
    id: string;
    question: string;
    answer: string;
  }>;

  return (
    <section className={theme.black}>
      <div className={theme.rojo}>
        <Button type="button" style="filled" color="onbrand" onClick={() => setIsOpenModal(true)}>
          abre el modal
        </Button>
        {isOpenModal && <RegisterForm setIsOpenSection={setIsOpenModal} />}

        <Button type="button" style="filled" color="onbrand" onClick={() => handleLanguageChange('ca')}>
          valenciano
        </Button>
        <Button type="button" style="filled" color="onbrand" onClick={() => handleLanguageChange('en')}>
          ingles
        </Button>
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

      <SingleBlock backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ questions={faqQuestions} isAccordionVer={false} />
      </SingleBlock>
      <SingleBlock backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ questions={faqQuestions} />
      </SingleBlock>

      <SingleBlock backgroundColor="light" isHorizontal={true}>
        <Rights />
      </SingleBlock>
      <SingleBlock backgroundColor="light" paddingSize="special">
        <Benefits />
      </SingleBlock>
      <SingleBlock backgroundColor="light">
        <Use />
      </SingleBlock>
      <SingleBlock backgroundColor="neutral" className={theme.specialClass}>
        <Accident />
      </SingleBlock>
      {/* super importante, para que este funcione hace falta un media query y clase especial que esta en este scss */}
      <Card {...bonoOro} />
    </section>
  );
};
