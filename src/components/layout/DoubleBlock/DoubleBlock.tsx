import classNames from 'classnames/bind';
import theme from './doubleBlock.module.scss';

interface DoubleBlockProps {
  children: React.ReactNode;
}

const cx = classNames.bind(theme);

export const DoubleBlock = ({ children }: DoubleBlockProps) => {
  return <div className={cx('doubleBlockLayout')}>{children}</div>;
};
