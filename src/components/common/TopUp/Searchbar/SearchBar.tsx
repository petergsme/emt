// CardSearchComponent.tsx
import { useState } from 'react';
import { Icon } from '@/assets/icons/Icon';
import { CardInfo } from '../CardInfo/CardInfo';
import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './SearchBar.module.scss';

const cx = classNames.bind(theme);

interface CardSearchProps {
  setIsOpenModal: (value: boolean) => void;
}

export const SearchBar = ({ setIsOpenModal }: CardSearchProps) => {
  const [showCardModal, setShowCardModal] = useState(false);

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setShowCardModal(true);
    }
  };

  return (
    <div className={cx('searchBar')}>
      <div className={cx('searchBar__container')}>
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="5678 1234 5678..."
          className={cn(cx('searchBar__input'), 'paragraph-small')}
        />
        <button type="button" onClick={() => setShowCardModal(true)} className={cx('icon__container')}>
          <Icon icon="Search" size="small" color="onbrand" />
        </button>
      </div>

      {showCardModal && <CardInfo setIsOpenModal={() => setIsOpenModal(true)} />}
    </div>
  );
};
