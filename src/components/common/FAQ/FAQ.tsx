import { Accordion } from '../Accordion/Accordion';
import { Button } from '../Button/Button';
import theme from './faq.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icon, IconName } from '@/assets/icons/Icon';

const cx = classNames.bind(theme);

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
interface CategoryItem {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}
interface FAQProps {
  questions?: FAQItem[];
  isAccordionVer?: boolean;
}

export const FAQ = ({ questions, isAccordionVer = true }: FAQProps) => {
  const { t } = useTranslation('faq');
  const navigate = useNavigate();
  const location = useLocation();

  const categories = t('categories', { returnObjects: true }) as CategoryItem[];

  return (
    <>
      <h2 className={cn('display-large', 'text__color--onprimary')}>
        {isAccordionVer ? t('accordionSection.title') : t('generalSection.title')}
      </h2>

      {isAccordionVer ? (
        <div className={cn('accordion__lastChild--border-bottom', cx('faq__accordion-container'))}>
          {questions?.map((item) => (
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
      ) : (
        <div className={cx('category__container')}>
          {categories.map((category) => {
            return (
              <article key={category.id} className={cx('category')}>
                <Icon icon={category.icon} color="onbrand-secondary" size="special" />
                <Button
                  type="button"
                  style="filled"
                  color="onprimary-secondary"
                  onClick={() => {
                    if (category.icon === 'Questionmark') {
                      navigate('/help/rules-guides#faq-help');
                    } else {
                      navigate('/mobilis-cards#faq-cards');
                    }
                  }}
                >
                  {category.title}
                </Button>
                <p className={cn('text__wrap--balanced')}>{category.description}</p>
              </article>
            );
          })}
        </div>
      )}

      <div className={cx('faq__gradient')}>
        <h3 className={cn('display-medium', 'text__color--onprimary')}>
          {isAccordionVer ? t('accordionSection.subtitle') : t('generalSection.subtitle')}
        </h3>
        <Button
          type="button"
          style="filled"
          color="onbrand"
          onClick={() => {
            if (location.pathname === '/') {
              navigate('/help/rules-guides#faq-help');
            } else {
              navigate('/#faq');
            }
          }}
        >
          {isAccordionVer ? t('accordionSection.buttonText') : t('generalSection.buttonText')}
        </Button>
      </div>
    </>
  );
};
