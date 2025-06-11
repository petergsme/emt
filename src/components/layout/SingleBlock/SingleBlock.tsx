import classNames from 'classnames/bind';
import theme from './singleBlock.module.scss';

const cx = classNames.bind(theme);

interface SingleBlockProps {
  children: React.ReactNode;
  backgroundColor?: 'light' | 'dark';
  paddingSize?: 'normal' | 'large';
  gapSize?: 'normal' | 'large';
  fullHeight?: boolean;
  className?: string;
}

export const SingleBlock = ({
  children,
  backgroundColor = 'light',
  paddingSize = 'normal',
  gapSize = 'normal',
  fullHeight = false,
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
      <div className={cx('singleBlockLayout__content', `singleBlockLayout__content--gap-${gapSize}`)}>{children}</div>
    </section>
  );
};
