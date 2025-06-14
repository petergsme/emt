import { useState, useMemo } from 'react';
import { useCardsData } from '@/data/CardsData';
import { useTranslation } from 'react-i18next';
import theme from './cardSection.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';
import { CardSwiper } from '../CardSwiper/CardSwiper';
import { CardProps } from '@/models/Card';
import { FilterButton } from '../CardFilter/CardFilter';

const cx = classNames.bind(theme);

type FilterType = 'todas' | 'venta' | 'recargables' | 'ilimitadas';

export const CardSection = () => {
  const cardList = useCardsData();
  const [activeFilter, setActiveFilter] = useState<FilterType>('todas');
  const { t } = useTranslation('mobilisCards');

  const hasAnyTerm = (category: string, terms: string[]): boolean => {
    const lowerCat = category.toLowerCase();
    return terms.some((term) => lowerCat.includes(term));
  };

  const filterCards = (cardList: CardProps[], filter: FilterType): CardProps[] => {
    if (filter === 'todas') return cardList;

    const searchTerms = {
      venta: ['venta', 'for sale', 'venda'],
      recargables: ['recargable', 'pay as you go'],
      ilimitadas: ['ilimitada', 'no limit', 'il·limitada'],
    };

    const terms = searchTerms[filter];

    return cardList.filter((card) => card.categories.some((cat) => hasAnyTerm(cat, terms)));
  };

  const filteredCards = useMemo(() => {
    return filterCards(cardList, activeFilter);
  }, [cardList, activeFilter]);

  return (
    <>
      <div className={cx('cards__gap')}>
        <header className={cx('header__gap', 'cards--padding')}>
          <h3 className={cn('display-medium', 'text__color--onprimary')}>{t('headerClaim')}</h3>
          <h2 className={cn('display-large', 'text__color--brand')}>{t('headerSubClaim')}</h2>
        </header>

        <div className={cx('cards__filters', 'cards--padding')}>
          <FilterButton onClick={() => setActiveFilter('todas')} isActive={activeFilter === 'todas'}>
            <p className="label-filters">{t('filterAll')}</p>
          </FilterButton>

          <FilterButton onClick={() => setActiveFilter('venta')} isActive={activeFilter === 'venta'}>
            <p className="label-filters">{t('filterSale')}</p>
          </FilterButton>

          <FilterButton onClick={() => setActiveFilter('recargables')} isActive={activeFilter === 'recargables'}>
            <p className="label-filters">{t('filterReload')}</p>
          </FilterButton>

          <FilterButton onClick={() => setActiveFilter('ilimitadas')} isActive={activeFilter === 'ilimitadas'}>
            <p className="label-filters">{t('filterUnlimited')}</p>
          </FilterButton>
        </div>
      </div>

      <CardSwiper cardArray={filteredCards} activeFilter={activeFilter} />
    </>
  );
};
