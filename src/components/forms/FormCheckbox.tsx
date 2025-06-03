import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { RegisterFormData } from './FormInput';
import { Icon } from '../../assets/icons/Icon';
import { useTranslation } from 'react-i18next';
import theme from './formCheckbox.module.scss';

interface FormCheckboxProps {
  type: keyof RegisterFormData;
  errors: FieldErrors<RegisterFormData>;
  register: UseFormRegister<RegisterFormData>;
  required?: boolean;
  watch: UseFormWatch<RegisterFormData>;
  //We're using it know whether it's checked or not.
}

export const FormCheckbox = ({ type, register, errors, watch, required = true }: FormCheckboxProps) => {
  const { t } = useTranslation('register-form');

  const isChecked = watch(type);

  return (
    <>
      <span className={theme.checkbox__wrapper}>
        <input
          className={theme.checkbox__icon}
          type="checkbox"
          id={type}
          {...register(type, { required: required ? t('errors.privacy') : false })}
        />

        {isChecked && <Icon icon="Check" size="medium" color="onprimary" />}
        {!isChecked && <Icon icon="Check" size="medium" color="disabled" />}

        <label className={`paragraph-xsmall ${theme.checkbox__label}`} htmlFor={type}>
          {t(`labels.${type}`)}
        </label>
      </span>
      {errors[type] && <span className={`paragraph-xsmall ${theme.input__errorMessage}`}>{errors[type].message}</span>}
    </>
  );
};
