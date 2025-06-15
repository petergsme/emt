import classNames from 'classnames/bind';
import theme from './cardFilter.module.scss';
import { Icon } from '@/assets/icons/Icon';

const cx = classNames.bind(theme);

interface FilterButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton = ({ children, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      className={cx('filter', {
        'filter--active': isActive,
      })}
      onClick={onClick}
    >
      {children}
      {isActive && <Icon icon="Filter" size="small" color="onbrand" />}
    </button>
  );
};
