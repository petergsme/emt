import { useForm } from 'react-hook-form';
import { RegisterFormData } from '../RegisterFormData';
import { FormInput } from '../FormInput/FormInput';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox';
import { FormSelect } from '../FormSelect/FormSelect';
import { FormModal } from '../FormModal/FormModal';
import { Icon } from '@/assets/icons/Icon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import classNames from 'classnames/bind';
import theme from './RegisterForm.module.scss';
import { useState } from 'react';

// const cx = classNames.bind(theme);

export const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation('register-form');

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const registerCard = (data: RegisterFormData) => {
    console.log('Los datos del formulario son:', data);
  };

  return (
    <>
      <section className={theme.register__section}>
        <button type="button" onClick={() => setIsOpen(true)} className={theme['button-openModal']}>
          <Icon icon="Close" size="large" color="onprimary-secondary" />
        </button>

        <header className={theme.claim__container}>
          <h2 className="display-medium">{t('claim')}</h2>
          <h3 className="display-large">{t('subclaim')}</h3>
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
            <button type="submit" className={`label-button ${theme['submit-button-test']}`}>
              {t('button')}
            </button>
          </div>
        </form>
      </section>
      {isOpen && (
        <FormModal>
          <h2 className="display-medium">¿Seguro?</h2>
          <p className="paragraph-small">
            Si abandonas el proceso perderás los datos que has introducido y tendrás que volver a empezar.
          </p>
          <div>
            <button className="label-button">NO</button>
            <button className="label-button">SÍ</button>
          </div>
        </FormModal>
      )}
    </>
  );
};

// pasarle (tipada) la propiedad que tendra que recibir el boton ese de la cruz para cerrar el popup.
// crear el custom hook ver si puede tener tambien imports rollo forminput tal cual, creo que eso no, es verdad eso no. simplemente mueve logica.

// Mi idea crear un componente generico de modal que tenga fondo oscuro o algo y clases para lo del interior. Pero con children como props y vacio por dentro. asi yo simplemente lo relleno en función de lo que toque. aunque en realidad podría hacerse mixto con parametros.
