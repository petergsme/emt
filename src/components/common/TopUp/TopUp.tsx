import theme from './TopUp.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

const cx = classNames.bind(theme);

interface RegisterProps {
  setIsOpenModal: (value: boolean) => void;
}

export const TopUp = ({ setIsOpenModal }: RegisterProps) => {
  const { t } = useTranslation('topUp');

  return (
    <>
      <header className="header__gap">
        <h3 className="display-medium text__color--onprimary">{t('subclaim')}</h3>
        <h2 className="display-large text__color--brand">{t('claim')}</h2>
      </header>

      <p className="paragraph-small text__color--onprimary text__wrap--balanced">{t('infoText')}</p>

      <Button type="button" style="filled" onClick={() => setIsOpenModal(true)} color="onprimary">
        {t('buttonText')}
      </Button>
    </>
  );
};
