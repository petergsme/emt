import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData } from '../RegisterFormData';
import { FormInput } from '../FormInput/FormInput';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox';
import { FormSelect } from '../FormSelect/FormSelect';
import { FormModal } from '../FormModal/FormModal';
import { Accordion } from '@/components/common/Accordion/Accordion';
import { Icon } from '@/assets/icons/Icon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import theme from './RegisterForm.module.scss';

interface FormProps {
  setIsOpenSection: (value: boolean) => void;
}

export const RegisterForm = ({ setIsOpenSection }: FormProps) => {
  const [isOpenExit, setIsOpenExit] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const { t } = useTranslation('form');

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({ mode: 'onBlur' });

  const registerCard = (data: RegisterFormData) => {
    console.log('Los datos del formulario son:', data);
    setIsOpenSuccess(true);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  // Muy sencillo, al montarse el body deja de poderse scrollear, al desmontarse vuelve a poderse.
  // Puesto abajo del todo porque arriba van todos los hooks/custom hooks que importamos y eso debe ir seguido.

  return (
    <div className={theme.section__wrapper}>
      <section className={theme.register__section}>
        <button type="button" onClick={() => setIsOpenExit(true)} className={theme['button-openModal']}>
          <Icon icon="Close" size="large" color="onprimary-secondary" />
        </button>

        <header className={theme.claim__container}>
          <h2 className="display-medium">{t('sectionText.register.claim')}</h2>
          <h3 className="display-large">{t('sectionText.register.subclaim')}</h3>
        </header>

        <form className={theme.form__container} onSubmit={handleSubmit(registerCard)} noValidate>
          <div className={theme['wrapper--paddingFlex--form']}>
            <FormInput type="cardNumber" leadingIcon="Card" register={register} errors={errors} required={true} />

            <FormSelect type="documentType" leadingIcon="User" control={control} errors={errors} required={true} />

            <FormInput type="documentNumber" leadingIcon="Id" register={register} errors={errors} required={true} />

            <FormInput type="firstName" leadingIcon="User" register={register} errors={errors} required={true} />

            <FormInput type="lastName" leadingIcon="User" register={register} errors={errors} required={true} />

            <FormInput type="phone" leadingIcon="Phone" register={register} errors={errors} required={false} />

            <FormInput type="mail" leadingIcon="Mail" register={register} errors={errors} required={false} />
          </div>

          <div className="accordion__lastChild--border-bottom">
            <Accordion text={t('accordion.lost')} textClassName="questions-small" iconSize="small" variant="onprimary">
              <p className="paragraph-small">{t('accordion.lostAnswer')}</p>
            </Accordion>
            <Accordion text={t('accordion.data')} textClassName="questions-small" iconSize="small" variant="onprimary">
              <p className="paragraph-small">{t('accordion.dataAnswer')}</p>
            </Accordion>
          </div>

          <section className={theme['wrapper--paddingFlex']}>
            <FormCheckbox type="privacy" register={register} errors={errors} watch={watch} required={true} />
            <Link className="link-small link__color--brand" to="/politica-de-privacidad">
              {'Política de privacidad ->'}
            </Link>
          </section>

          <div className={theme['wrapper--padding']}>
            <button type="submit" className={`label-button ${theme['submit-button-test']}`}>
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
    </div>
  );
};

// Falta crear el custom hook tras finalizar el SCSS? Realmente es necesario?
