// CardSearchComponent.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/assets/icons/Icon';
import { CardInfo } from '../CardInfo/CardInfo';
import { patterns } from '../../../forms/validation'; // Reutilizamos el mismo archivo
import classNames from 'classnames/bind';
import cn from 'classnames';
import theme from './SearchBar.module.scss';

const cx = classNames.bind(theme);

interface CardSearchProps {
  setIsOpenModal: (value: boolean) => void;
}

// Interface para el formulario local del SearchBar
interface CardSearchData {
  cardNumber: string;
}

export const SearchBar = ({ setIsOpenModal }: CardSearchProps) => {
  const { t } = useTranslation('form'); // Mismo namespace que FormInput
  const [showCardModal, setShowCardModal] = useState(false);

  // useForm local para este componente
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardSearchData>();

  // Handler que se ejecuta SOLO si la validación pasa
  const onValidSubmit = (data: CardSearchData) => {
    console.log('Card number válido:', data.cardNumber);
    setShowCardModal(true);
  };

  // Handler para Enter - usa handleSubmit para validar
  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit(onValidSubmit)(); // Solo abre modal si es válido
    }
  };

  // Handler para click del botón - usa handleSubmit para validar
  const handleButtonClick = () => {
    handleSubmit(onValidSubmit)(); // Solo abre modal si es válido
  };

  const hasError = errors.cardNumber ? true : false;

  return (
    <div className={cx('searchBar')}>
      <div className={cx('searchBar__container')}>
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="5678 1234 5678..."
          className={cn(
            cx('searchBar__input'),
            'paragraph-small',
            { [cx('searchBar__input--error')]: hasError } // Clase de error si la necesitas
          )}
          {...register('cardNumber', {
            required: t('errors.required'),
            pattern: {
              value: patterns.cardNumber, // Reutiliza exactamente la misma validación
              message: t('errors.cardNumber'), // Mismo mensaje de error
            },
          })}
        />
        <button type="button" onClick={handleButtonClick} className={cx('icon__container')}>
          <Icon icon="Search" size="small" color="onbrand" />
        </button>
      </div>

      {/* Mensaje de error igual que FormInput */}
      {errors.cardNumber && (
        <span className={cn('paragraph-xsmall', cx('searchBar__errorMessage'))}>{errors.cardNumber.message}</span>
      )}

      {showCardModal && <CardInfo setIsOpenModal={() => setIsOpenModal(true)} />}
    </div>
  );
};
