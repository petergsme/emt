import { UseFormRegister, FieldErrors } from 'react-hook-form';
//We import these typings because useForm HAS to be used in the form itself, so here we need to have parameters for those functions we were importing (register & errors). We type them so that we can use them exactly like we were when we imported them directly. In essence those two parameters are generic functions typed to specifically work like the ones you would import from the package.
import { useTranslation } from 'react-i18next';
import { patterns } from './validation';
import classNames from 'classnames/bind';
import theme from './formInput.module.scss';
import { Icon, IconName } from '../../assets/icons/Icon';

const cx = classNames.bind(theme);
export interface RegisterFormData {
  cardNumber: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  phone: string;
  mail: string;
  contact: string;
  refill: string;
  documentType: string;
  privacy: boolean;
  bill: boolean;
  //Those last two are the checkbox types.
}

interface FormInputProps {
  type: keyof RegisterFormData; //This takes all the keys from the interface above, if they change this updates automatically.
  leadingIcon: IconName;
  errors: FieldErrors<RegisterFormData>;
  register: UseFormRegister<RegisterFormData>;
  // This typing is saying: UseFormRegister typing only works with data from RegisterFormData (another typing itself).
  required?: boolean;
}

export const FormInput = ({ type, register, errors, required = true, leadingIcon }: FormInputProps) => {
  const { t } = useTranslation('register-form');
  //Selecting the namespace that has the labels, the error messages and placeholders. This is the reason why we don't need no parameters for those, just through the type parameter we can use them.
  const hasError = errors[type] ? true : false;

  return (
    <article className={theme.input__wrapper}>
      <label
        className={cx({
          'paragraph-xsmall': true,
          input__label: true,
          'input__label--error': hasError,
        })}
        htmlFor={type}
      >
        {t(`labels.${type}`)}
      </label>
      <div className={hasError ? theme['input__container--error'] : theme.input__container}>
        <span className={theme.input__iconGroup}>
          <Icon icon={leadingIcon} size="small" color="onprimary" />

          <input
            className={`paragraph-small ${theme['input--padding']}`}
            placeholder={t(`placeholders.${type}`)}
            id={type}
            {...register(type, {
              required: required ? t('errors.required') : false,
              pattern: patterns[type] ? { value: patterns[type], message: t(`errors.${type}`) } : undefined,
              //We made the patterns for the booleans undefined, now with this terciario only when patterns for the type exist will it have them.
            })}
          />
        </span>

        {required && <Icon icon="AsteriskLine" size="small" color="disabled" />}
      </div>
      {errors[type] && <span className={`paragraph-xsmall ${theme.input__errorMessage}`}>{errors[type].message}</span>}
    </article>
  );
};

//Just using classnames bind on one of the elements' classes that was a bit hard to read.

//Para mejorar la validación del tipo de documento tendríamos que crear validaciones separadas para dni,nie y pasaporte. La manera en que el input escogería la validación sería con un watch en un componente donde solo haya select + input y el select este en watch para que el input cambie en función de lo seleccionado en el select. Esto implicaría cambiar también el mensaje de error y para acceder a el podríamos usar el watch en lugar de crear 3 tipos de input mas para dni/nie/pasaporte. con watch en funcion de lo seleccionado podriamos acceder al mensaje de error en la traducción.
