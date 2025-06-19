import { useTranslation } from 'react-i18next';
import cn from 'classnames';
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
      <SingleBlock
        backgroundColor="light"
        paddingSize="special"
        gapSize="none"
        className={cn('padding-special--bottom', 'container__padding--top')}
      >
        <CardSection />
      </SingleBlock>

      <SingleBlock id="faq-cards" backgroundColor="pink" paddingSize="special" gapSize="superlarge">
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
