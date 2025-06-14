import classNames from 'classnames/bind';
import theme from './singleBlock.module.scss';

const cx = classNames.bind(theme);

interface SingleBlockProps {
  children: React.ReactNode;
  backgroundColor?: 'light' | 'dark' | 'pink' | 'neutral';
  paddingSize?: 'normal' | 'large' | 'special';
  gapSize?: 'normal' | 'large' | 'superlarge' | 'none';
  fullHeight?: boolean;
  isHorizontal?: boolean;
  className?: string;
}

export const SingleBlock = ({
  children,
  backgroundColor = 'light',
  paddingSize = 'normal',
  gapSize = 'normal',
  fullHeight = false,
  isHorizontal = false,
  className,
}: SingleBlockProps) => {
  const moduleClasses = cx(
    'singleBlockLayout',
    `singleBlockLayout__background-color--${backgroundColor}`,
    `singleBlockLayout__padding--${paddingSize}`,
    { 'singleBlockLayout__height--fullheight': fullHeight }
  );

  const finalClassName = `${moduleClasses} ${className || ''}`;
  // Hecho para poder pasarle clases adicionales si fuera necesario.

  return (
    <section className={finalClassName}>
      <div
        className={cx('singleBlockLayout__content', `singleBlockLayout__content--gap-${gapSize}`, {
          'singleBlockLayout__content--horizontal': isHorizontal,
        })}
      >
        {children}
      </div>
    </section>
  );
};
