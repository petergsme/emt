import { useState } from 'react';
import { Icon } from '@/assets/icons/Icon';
import theme from './accordion.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';

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
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseAccordion = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpenAccordion(false);
      setIsClosing(false);
    }, 300);
  };

  const handleToggle = () => {
    if (!isOpenAccordion) {
      setIsOpenAccordion(true);
      setIsClosing(true);

      setTimeout(() => {
        setIsClosing(false);
      }, 10);
    } else {
      handleCloseAccordion();
    }
  };

  const chevronClasses = cx('accordion__chevron', { ['accordion__chevron--rotated']: isOpenAccordion });

  // Recuerda que los corchetes [] solo son necesarios cuando usas template literals dentro de objetos como keys/propiedades.

  return (
    <>
      <article
        className={cx('accordion__wrapper', `accordion__wrapper--${variant}`, {
          'accordion__wrapper--large': gapSize === 'large',
        })}
        onClick={() => {
          handleToggle();
        }}
      >
        <button type="button" className={cx('accordion__button')}>
          <h3 className={cn(textClassName)}>{text}</h3>
          <Icon
            icon="ChevronDown"
            color={variant === 'onprimary' ? 'onprimary-secondary' : 'onbrand'}
            size={iconSize}
            extraClass={chevronClasses}
          />
        </button>
        {isOpenAccordion && (
          <div
            className={cx('entrance', {
              'entrance--open': !isClosing,
              'entrance--exit': isClosing,
            })}
          >
            {children}
          </div>
        )}
      </article>
    </>
  );
};
