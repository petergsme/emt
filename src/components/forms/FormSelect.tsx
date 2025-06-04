import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { RegisterFormData } from './FormInput';
import classNames from 'classnames/bind';
import theme from './formSelect.module.scss';
import { Icon, IconName } from '../../assets/icons/Icon';

const cx = classNames.bind(theme);

interface FormSelectProps {
  type: keyof RegisterFormData;
  leadingIcon: IconName;
  errors: FieldErrors<RegisterFormData>;
  register: UseFormRegister<RegisterFormData>;
  required?: boolean;
}

export const FormSelect = ({ type, register, errors, required = true, leadingIcon }: FormSelectProps) => {
  const { t } = useTranslation('register-form');

  const hasError = errors[type] ? true : false;

  const options: string[] = [];

  switch (type) {
    case 'contact':
      options.push(
        t('contactSelect.fault'),
        t('contactSelect.lost'),
        t('contactSelect.issues'),
        t('contactSelect.other')
      );
      break;
    case 'documentType':
      options.push(t('documentType.dni'), t('documentType.nie'), t('documentType.passport'));
      break;
    case 'refill':
      options.push(t('refill.bonobus.option1'), t('refill.bonobus.option2'), t('refill.bonobus.option3'));
      break;
  }

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

          <select
            className={`paragraph-small ${theme['input--padding']}`}
            {...register(type, { required: required ? t('errors.required') : false })}
          >
            {options.map((value, index) => (
              <option key={index}>{value}</option>
            ))}
          </select>
        </span>

        {required && <Icon icon="ChevronDown" size="small" color="onprimary" />}
      </div>
      {errors[type] && <span className={`paragraph-xsmall ${theme.input__errorMessage}`}>{errors[type].message}</span>}
    </article>
  );
};
