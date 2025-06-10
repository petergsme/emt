import { useState } from 'react';
import { Icon } from '@/assets/icons/Icon';
import theme from './accordion.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(theme);

interface AccordionProps {
  text: string;
  textClassName?: string;
  variant: 'onbrand' | 'onprimary';
  children: React.ReactNode;
  iconSize: 'small' | 'medium' | 'large';
  gapSize?: 'normal' | 'large';
}

export const Accordion = ({
  text,
  textClassName = 'questions-small',
  children,
  iconSize = 'small',
  variant = 'onbrand',
  gapSize = 'normal',
}: AccordionProps) => {
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);

  const wrapperClasses = cx('accordion__wrapper', `accordion__wrapper--${variant}`, {
    'accordion__wrapper--large': gapSize === 'large',
  });
  const chevronClasses = cx({ accordion__chevron: !isOpenAccordion, ['accordion__chevron--open']: isOpenAccordion });

  // Recuerda que los corchetes [] solo son necesarios cuando usas template literals dentro de objetos como keys/propiedades.

  return (
    <>
      <div className={wrapperClasses}>
        <button type="button" onClick={() => setIsOpenAccordion(!isOpenAccordion)} className={cx('accordion__button')}>
          <h3 className={cx(textClassName)}>{text}</h3>
          <Icon icon="ChevronDown" color={variant} size={iconSize} extraClass={chevronClasses} />
        </button>
        {isOpenAccordion && children}
      </div>
    </>
  );
};
