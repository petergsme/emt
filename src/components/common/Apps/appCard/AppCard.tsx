import classNames from 'classnames/bind';
import theme from './appCard.module.scss';

const cx = classNames.bind(theme);

interface AppCardProps {
  children: React.ReactNode;
}

export const AppCard = ({ children }: AppCardProps) => {
  return <article className={cx('appCard__container')}>{children}</article>;
};
