import { UseFormRegister, FieldErrors } from 'react-hook-form';
//We import these typings because useForm HAS to be used in the form itself, so here we need to have parameters for those functions we were importing (register & errors). We type them so that we can use them exactly like we were when we imported them directly. In essence those two parameters are generic functions typed to specifically work like the ones you would import from the package.
import { useTranslation } from 'react-i18next';
import { patterns } from './validation';

export interface RegisterFormData {
  cardNumber: string;
  documentNumber: string;
  firstName: string;
  lastName: string;
  phone: string;
  mail: string;
}

interface FormInputProps {
  type: keyof RegisterFormData; //This takes all the keys from the interface above, if they change this updates automatically.
  leadingIcon: string;
  trailingIcon?: string;
  errors: FieldErrors<RegisterFormData>;
  register: UseFormRegister<RegisterFormData>;
  // This typing is saying: UseFormRegister typing only works with data from RegisterFormData (another typing itself).
}

export const FormInput = ({ type, register, errors }: FormInputProps) => {
  const { t } = useTranslation('register-form');

  return (
    <article>
      <label htmlFor={type}>{t(`labels.${type}`)}</label>
      <input
        placeholder={t(`placeholders.${type}`)}
        id={type}
        {...register(type, {
          required: t('errors.required'),
          pattern: { value: patterns[type], message: t(`errors.${type}`) },
        })}
      />
      {errors[type] && <span>{errors[type].message}</span>}
    </article>
  );
};

//Nos faltan los iconos ver como metemos. y el css.
//hay campos no obligatorios, como lo gestionas?
