import { Accordion } from '../Accordion/Accordion';
import { Button } from '../Button/Button';
import theme from './faq.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(theme);

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
interface FAQProps {
  questions: FAQItem[];
}

export const FAQ = ({ questions }: FAQProps) => {
  const { t } = useTranslation('faq');

  const navigate = useNavigate();
  const handleNavigateToFAQ = () => {
    navigate('/faq');
  };

  return (
    <>
      <h2 className={cn('display-large', 'text__color--onprimary')}>{t('accordionSection.title')}</h2>

      <div className={cn('accordion__lastChild--border-bottom', cx(cx('faq__accordion-container')))}>
        {questions.map((item) => (
          <Accordion
            key={item.id}
            text={item.question}
            textClassName="questions-small"
            iconSize="small"
            variant="onprimary"
          >
            <p className={cn('paragraph-small')}>{item.answer}</p>
          </Accordion>
        ))}
      </div>

      <div className={cx('faq__gradient')}>
        <h3 className={cn('display-medium', 'text__color--onprimary')}>{t('accordionSection.subtitle')}</h3>
        <Button type="button" style="filled" color="onbrand" onClick={handleNavigateToFAQ}>
          {t('accordionSection.buttonText')}
        </Button>
      </div>
    </>
  );
};

// enterate de como usar ese handlenavigation
// lo del array.
