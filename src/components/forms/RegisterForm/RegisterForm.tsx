import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from '../RegisterFormData';
import { FormInput } from '../FormInput/FormInput';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox';
import { FormSelect } from '../FormSelect/FormSelect';
import { FormModal } from '../FormModal/FormModal';
import { Icon } from '@/assets/icons/Icon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import theme from './RegisterForm.module.scss';

interface FormProps {
  setIsOpenSection: (state: boolean) => void;
}

export const RegisterForm = ({ setIsOpenSection }: FormProps) => {
  const [isOpenExit, setIsOpenExit] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const { t } = useTranslation('form');

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<RegisterFormData>();

  const registerCard = (data: RegisterFormData) => {
    console.log('Los datos del formulario son:', data);
  };

  return (
    <>
      <section className={theme.register__section}>
        <button type="button" onClick={() => setIsOpenExit(true)} className={theme['button-openModal']}>
          <Icon icon="Close" size="large" color="onprimary-secondary" />
        </button>

        <header className={theme.claim__container}>
          <h2 className="display-medium">{t('sectionText.register.claim')}</h2>
          <h3 className="display-large">{t('sectionText.register.subclaim')}</h3>
        </header>

        <form className={theme.form__container} onSubmit={handleSubmit(registerCard)} noValidate>
          <div className={theme['wrapper--paddingFlex']}>
            <FormInput type="cardNumber" leadingIcon="Card" register={register} errors={errors} required={true} />

            <FormSelect leadingIcon="User" type="documentType" control={control} errors={errors} required={true} />

            <FormInput type="documentNumber" leadingIcon="Id" register={register} errors={errors} required={true} />

            <FormInput type="firstName" leadingIcon="User" register={register} errors={errors} required={true} />

            <FormInput type="lastName" leadingIcon="User" register={register} errors={errors} required={true} />

            <FormInput type="phone" leadingIcon="Phone" register={register} errors={errors} required={false} />

            <FormInput type="mail" leadingIcon="Mail" register={register} errors={errors} required={false} />
          </div>

          {/* Aquí tendráimos el acordeón que no está aquí aún. */}

          <section className={theme['wrapper--paddingFlex']}>
            <FormCheckbox type="privacy" register={register} errors={errors} watch={watch} required={true} />
            <Link className="link-small link__color--brand" to="/politica-de-privacidad">
              {'Política de privacidad ->'}
            </Link>
          </section>

          <div className={theme['wrapper--padding']}>
            <button
              type="submit"
              className={`label-button ${theme['submit-button-test']}`}
              onClick={() => {
                if (isValid) setIsOpenSuccess(true);
              }}
            >
              {t('sectionText.register.button')}
            </button>
          </div>
        </form>
      </section>

      {isOpenExit && (
        <FormModal>
          <h2 className="display-medium center-text text__color--brand">{t('modal.abandon.claim')}</h2>
          <p className="paragraph-small">{t('modal.abandon.info')}</p>
          <div className={theme['flex-utility']}>
            <button className={`label-button ${theme['submit-button-test']}`} onClick={() => setIsOpenExit(false)}>
              {t('modal.abandon.continue')}
            </button>
            <button
              className={`label-button ${theme.blanco} ${theme['submit-button-test']}`}
              onClick={() => setIsOpenSection(false)}
            >
              {t('modal.abandon.exit')}
            </button>
          </div>
        </FormModal>
      )}

      {isOpenSuccess && (
        <FormModal>
          <h2 className="display-medium center-text text__color--brand">{t('modal.completed.register.claim')}</h2>
          <p className="paragraph-small">{t('modal.completed.register.info')}</p>
          <button className={`label-button ${theme['submit-button-test']}`} onClick={() => setIsOpenSection(false)}>
            {t('modal.completed.exit')}
          </button>
        </FormModal>
      )}
    </>
  );
};

//  deberas meterle css a este componente en si mismo o su wrapper en el componente padre, para convertirlo en un fixed que aparece encima o en un lateral o como sea.

// crear el custom hook mover toda la logica.
