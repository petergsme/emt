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

  const { t } = useTranslation('form');

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
              onClick={() => setIsOpen(true)}
            >
              {t('sectionText.register.button')}
            </button>
          </div>
        </form>
      </section>
      {/* {isOpen && (
        <FormModal>
          <h2 className="display-medium center-text text__color--brand">¿Seguro?</h2>
          <p className="paragraph-small">
            Si abandonas el proceso perderás los datos que has introducido y tendrás que volver a empezar.
          </p>
          <div className={theme['flex-utility']}>
            <button className={`label-button ${theme['submit-button-test']}`} onClick={() => setIsOpen(false)}>
              NO
            </button>
            <button
              className={`label-button ${theme.blanco} ${theme['submit-button-test']}`}
              onClick={() => setIsOpen(false)}
            >
              SÍ
            </button>
          </div>
        </FormModal>
      )} */}

      {isOpen && (
        <FormModal>
          <h2 className="display-medium center-text text__color--brand">Registro Completado</h2>
          <p className="paragraph-small">Enhorabuena, ahora tus viajes están a buen recaudo.</p>
          <button className={`label-button ${theme['submit-button-test']}`} onClick={() => setIsOpen(false)}>
            VOLVER ATRÁS
          </button>
        </FormModal>
      )}
    </>
  );
};

// anida los textos generales de form, cambia el nombre y replace a todos los usos del t con ese nombre de namespace, tambien lo otro.

//  luego apañamos las traducciones. luego apañamos la logica que hace abrir uno u otro.

// hace falta otro modal para lo que viene siendo el de compleción. recuerda hacer funcionar esas funciones bien. y luego deberas meterle css a este componente en si mismo o su wrapper en el componente padre, para convertirlo en un fixed que aparece encima o en un lateral o como sea.
// pasarle (tipada) la propiedad que tendra que recibir el boton ese de la cruz para cerrar el popup.
// crear el custom hook ver si puede tener tambien imports rollo forminput tal cual, creo que eso no, es verdad eso no. simplemente mueve logica.

// dos opciones para que el boton abra lo que toca --> que la validacion dependa de que el formulario se ha enviado (guardar en una variable el valor y si existe se pinta el componente que toca.) o nuevo usestate para eso. o mismo usestate pero uso de useref como antes para saber si el click fue en el boton de cerrar o en el boton de enviar y segun sea uno u otro abrir un modal u otro.
