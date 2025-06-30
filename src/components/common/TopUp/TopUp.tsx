import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { SearchBar } from './Searchbar/SearchBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PurchaseForm } from '@/components/forms/PurchaseForm/PurchaseForm';

interface RegisterProps {
  version?: 'large';
}

export const TopUp = ({ version }: RegisterProps) => {
  const { t } = useTranslation('topUp');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="header__gap">
        <h3 className="display-medium text__color--onprimary">{t('subclaim')}</h3>
        <h2 className="display-large text__color--brand">{t('claim')}</h2>
      </header>

      <p className="paragraph-small text__color--onprimary text__wrap--balanced">{t('infoText')}</p>

      {version === 'large' && <SearchBar setIsOpenModal={setIsOpenModal} />}

      {version !== 'large' && (
        <Button type="button" style="filled" onClick={() => navigate('/mobilis-cards#recharge')} color="onprimary">
          {t('buttonText')}
        </Button>
      )}

      {version === 'large' && (
        <div className="flex flex__column flex__gap-20">
          <p className="paragraph-small text__color--onprimary text__wrap--balanced">{t('faqText')}</p>
          <Link className="link-small link__color--brand" to="/politica-de-privacidad">
            {t('faqLink') + ' ->'}
          </Link>
        </div>
      )}
      {isOpenModal && <PurchaseForm setIsOpenSection={setIsOpenModal} />}
    </>
  );
};
