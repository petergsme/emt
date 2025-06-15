import { useTranslation } from 'react-i18next';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { DoubleBlock } from '@/components/layout/DoubleBlock/DoubleBlock';
import { Register } from '@/components/common/Register/Register';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { CardSection } from './CardSection/CardSection';
import { FAQ } from '@/components/common/FAQ/FAQ';

const CardsPage: React.FC = () => {
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
    </>
  );
};

export default CardsPage;

// Faltan APPS Y FOOTER en el OUTLET y el NAV.
