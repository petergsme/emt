import classNames from 'classnames/bind';
import theme from './card.module.scss';

const cx = classNames.bind(theme);

interface CardProps {
  children: React.ReactNode;
  isFullWidth?: boolean;
}

export const Card = ({ children, isFullWidth = false }: CardProps) => {
  return <article className={cx('card', { 'card--fullWidth': isFullWidth })}>{children}</article>;
};
