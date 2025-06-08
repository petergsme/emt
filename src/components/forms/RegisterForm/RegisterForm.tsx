import { useForm } from 'react-hook-form';
import { RegisterFormData } from '../RegisterFormData';
import { FormInput } from '../FormInput/FormInput';
import { FormCheckbox } from '../FormCheckbox/FormCheckbox';
import { FormSelect } from '../FormSelect/FormSelect';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import classNames from 'classnames/bind';
import theme from './RegisterForm.module.scss';

// const cx = classNames.bind(theme);

export const RegisterForm = () => {
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
    <section className={theme.register__section}>
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
  );
};

// deberias ir de dentro a fuera, primero el boton que abre el popup.
// recuerda, el boton debe abrir tambien el otro popup.
// pasarle (tipada) la propiedad que tendra que recibir el boton ese de la cruz para cerrar el popup.
// crear el custom hook ver si puede tener tambien imports rollo forminput tal cual, creo que eso no, es verdad eso no. simplemente mueve logica.
