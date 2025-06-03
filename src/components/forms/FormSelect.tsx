import { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RegisterFormData } from "./FormInput";
import classNames from "classnames/bind";
import theme from "./formSelect.module.scss";
import { Icon, IconName } from "../../assets/icons/Icon";

const cx = classNames.bind(theme);

interface FormSelectProps {
  type: keyof RegisterFormData;
  leadingIcon: IconName;
  options: string[];
  errors: FieldErrors<RegisterFormData>;
  register: UseFormRegister<RegisterFormData>;
  required?: boolean;
}

export const FormSelect = ({ type, register, errors, required = true, leadingIcon, options }: FormSelectProps) => {
  const { t } = useTranslation("register-form");

  const hasError = errors[type] ? true : false;

  return (
    <article className={theme.input__wrapper}>
      <label
        className={cx({
          "paragraph-xsmall": true,
          input__label: true,
          "input__label--error": hasError,
        })}
        htmlFor={type}
      >
        {t(`labels.${type}`)}
      </label>
      <div className={hasError ? theme["input__container--error"] : theme.input__container}>
        <span className={theme.input__iconGroup}>
          <Icon icon={leadingIcon} size="small" color="onprimary" />

          {/* <input
            className={`paragraph-small ${theme["input--padding"]}`}
            placeholder={t(`placeholders.${type}`)}
            id={type}
            {...register(type, { required: required ? t("errors.required") : false })}
          /> */}
          <select
            className={`paragraph-small ${theme["input--padding"]}`}
            {...register(type, { required: required ? t("errors.required") : false })}
          >
            {options.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </span>

        {required && <Icon icon="ChevronDown" size="small" color="onprimary" />}
      </div>
      {errors[type] && <span className={`paragraph-xsmall ${theme.input__errorMessage}`}>{errors[type].message}</span>}
    </article>
  );
};

//Just using classnames bind on one of the elements' classes that was a bit hard to read.
