// CardInfoModal.tsx
import { Button } from '../../Button/Button';
import { useTranslation } from 'react-i18next';
import theme from './cardInfo.module.scss';
import classNames from 'classnames/bind';
import cn from 'classnames';

const cx = classNames.bind(theme);

interface CardInfoModalProps {
  setIsOpenModal: (value: boolean) => void;
}

export const CardInfo = ({ setIsOpenModal }: CardInfoModalProps) => {
  const { t } = useTranslation('topUp');
  const tagClass = cn(cx('cardInfo__tags'), 'label-filters', 'text__color--onbrand');
  return (
    <div className={cx('cardInfo')}>
      <div className={cx('cardInfo__content')}>
        <span className={tagClass}>{t('cardInfo.cardType')}</span>
        <span className={tagClass}>{t('cardInfo.tripsRemaining')}</span>
        <span className={tagClass}>{t('cardInfo.status')}</span>
        <span className={tagClass}>{t('cardInfo.lastUsed')}</span>
      </div>

      <Button type="button" style="filled" color="onprimary" fullWidth={true} onClick={() => setIsOpenModal(true)}>
        {t('cardInfo.buttonText')}
      </Button>
    </div>
  );
};
