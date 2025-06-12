import { Accordion } from '../Accordion/Accordion';
import { Button } from '../Button/Button';
import theme from './faq.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';

const cx = classNames.bind(theme);

interface FAQProps {
  questionArray: string[];
}
export const FAQ = ({ questionArray }: FAQProps) => {
  return (
    <>
      <h2 className={cn('display-large', 'text__color--onprimary')}>¿DUDAS?</h2>

      {/* {questionArray.map((question, index)=> {
            return <Accordion
        })} */}

      <h3 className={cn('display-medium', 'text__color--onprimary')}>Y si hay algo más que necesites saber</h3>
      <Button type="button" style="filled" color="onbrand" onClick={() => console.log('prepucio')}>
        Preguntas frecuentes
      </Button>
    </>
  );
};

// Tiene que haber manera de linkear un route en un onclick de button sin usar link o asi.
