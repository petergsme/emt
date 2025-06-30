import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
import cn from 'classnames';
import { SingleBlock } from '@/components/layout/SingleBlock/SingleBlock';
import { Register } from '@/components/common/Register/Register';
import { TopUp } from '@/components/common/TopUp/TopUp';
import { FAQ } from '@/components/common/FAQ/FAQ';
import { Accident } from './Use/Accident/Accident';
import { Use } from './Use/Use';
import { Rights } from './Rights/Rights';
import theme from './rulesPage.module.scss';

const cx = classNames.bind(theme);

const RulesPage: React.FC = () => {
  const { t } = useTranslation('faq');

  const faqQuestions = t('rulesQuestions', { returnObjects: true }) as Array<{
    id: string;
    question: string;
    answer: string;
  }>;

  return (
    <>
      <SingleBlock backgroundColor="light" className={cn('container__padding--top')}>
        <Use />
      </SingleBlock>

      <SingleBlock backgroundColor="neutral" className={cx('additional-desktop-media-query')}>
        <Accident />
      </SingleBlock>

      <SingleBlock id="faq-help" backgroundColor="pink" paddingSize="special" gapSize="superlarge">
        <FAQ questions={faqQuestions} />
      </SingleBlock>

      <SingleBlock backgroundColor="light" isHorizontal={true}>
        <Rights />
      </SingleBlock>

      <SingleBlock backgroundColor="dark">
        <Register />
      </SingleBlock>

      <SingleBlock backgroundColor="light">
        <TopUp />
      </SingleBlock>
    </>
  );
};

export default RulesPage;

// Faltan APPS Y FOOTER en el OUTLET y el NAV.
