import { useState } from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
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
  control: Control<RegisterFormData>;
  required?: boolean;
}

export const FormSelect = ({ type, control, errors, required = true, leadingIcon }: FormSelectProps) => {
  const { t } = useTranslation('register-form');

  const [isOpen, setIsOpen] = useState(false);

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
    <article className={theme.select__wrapper}>
      <label
        className={cx({
          'paragraph-xsmall': true,
          select__label: true,
          'select__label--error': hasError,
        })}
        htmlFor={type}
      >
        {t(`labels.${type}`)}
      </label>

      <div className={hasError ? theme['select__container--error'] : theme.select__container}>
        <span className={theme.select__iconGroup}>
          <Icon icon={leadingIcon} size="small" color="onprimary" />

          <Controller
            control={control}
            name={type}
            rules={{ required: required ? t('errors.required') : false }}
            render={({ field }) => (
              // Este div es el equivalente a la caja que contiene el select.
              <div className={theme.select__field}>
                {/* Este botón viene siendo nuestro select en si mismo. */}
                <button
                  type="button"
                  className={cx({
                    'paragraph-small': true,
                    select__trigger: true,
                    'select__trigger--placeholder': !field.value,
                  })}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {field.value || t(`placeholders.${type}`)}
                </button>

                {isOpen && (
                  // Este div es el contenedor de nuestro dropdown.
                  <div className={theme.select__dropdown}>
                    {/* Los divs que se mapean son nuestros options */}
                    {options.map((value, index) => (
                      <div
                        key={index}
                        className={cx({
                          'paragraph-small': true,
                          select__option: true,
                          'select__option--selected': field.value === value,
                        })}
                        onClick={() => {
                          field.onChange(value);
                          setIsOpen(false);
                        }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          />
        </span>

        {required && (
          <Icon
            icon="ChevronDown"
            size="small"
            color="onprimary"
            extraClass={isOpen ? theme['select__chevron--open'] : theme.select__chevron}
          />
        )}
      </div>
      {errors[type] && <span className={`paragraph-xsmall ${theme.select__error}`}>{errors[type].message}</span>}
    </article>
  );
};
