import { useTranslation } from 'react-i18next';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { DoubleBlock } from '@/components/layout/DoubleBlock/DoubleBlock';
import { Register } from '@/components/common/Register/Register';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { CardSection } from '../CardsPage/CardSection/CardSection';
import { FAQ } from '@/components/common/FAQ/FAQ';
// import { Rights } from '../usoNormas/Rights/Rights';
// import { Accident } from '../usoNormas/Use/Accident/Accident';
// import { Use } from '../usoNormas/Use/Use';
// // import theme from './cardsPage.module.scss';

const ErrorPage: React.FC = () => {
  const { t } = useTranslation('faq');

  const faqQuestions = t('cardsQuestions', { returnObjects: true }) as Array<{
    id: string;
    question: string;
    answer: string;
  }>;

  return (
    <>
      <SingleBlock backgroundColor="light" paddingSize="special" gapSize="none" className="padding-special--bottom">
        <CardSection />
      </SingleBlock>

      <SingleBlock backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ questions={faqQuestions} />
      </SingleBlock>

      <DoubleBlock>
        <SingleBlock id="recharge" backgroundColor="light">
          <TopUp version="large" />
        </SingleBlock>

        <SingleBlock id="register" backgroundColor="dark">
          <Register hasImage={true} keepImageOnDesktop={true} />
        </SingleBlock>
      </DoubleBlock>

      {/* <SingleBlock backgroundColor="dark">
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

      <SingleBlock backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ isAccordionVer={false} />
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
      </SingleBlock> */}
      {/* super importante, para que este funcione hace falta un media query y clase especial que esta en este scss y lo mismo pa el de debajo */}
    </>
  );
};

export default ErrorPage;
