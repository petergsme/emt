import { UseFormRegister, FieldErrors } from "react-hook-form";
//We import these typings because useForm HAS to be used in the form itself, so here we need to have parameters for those functions we were importing (register & errors). We type them so that we can use them exactly like we were when we imported them directly. In essence those two parameters are generic functions typed to specifically work like the ones you would import from the package.
import { useTranslation } from "react-i18next";
import { patterns } from "./validation";
import theme from "./formInput.module.scss";
import { Icon, IconName } from "../../assets/icons/Icon";

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
  leadingIcon: IconName;
  errors: FieldErrors<RegisterFormData>;
  register: UseFormRegister<RegisterFormData>;
  // This typing is saying: UseFormRegister typing only works with data from RegisterFormData (another typing itself).
  required?: boolean;
}

export const FormInput = ({ type, register, errors, required = true, leadingIcon }: FormInputProps) => {
  const { t } = useTranslation("register-form");
  //Selecting the namespace that has the labels, the error messages and placeholders. This is the reason why we don't need no parameters for those, just through the type parameter we can use them.
  const hasError = !!errors[type];

  return (
    <article className={theme.wrapper}>
      <label className={`paragraph-xsmall ${theme.padding} ${theme.colored}`} htmlFor={type}>
        {t(`labels.${type}`)}
      </label>
      <div className={`${theme.inputform} ${hasError ? theme.error : ""}`}>
        <Icon icon={leadingIcon} size="small" color="onprimary" />

        <input
          className="paragraph-small"
          placeholder={t(`placeholders.${type}`)}
          id={type}
          {...register(type, {
            required: required ? t("errors.required") : false,
            pattern: { value: patterns[type], message: t(`errors.${type}`) },
          })}
        />

        {required && <Icon icon="AsteriskLine" size="small" color="disabled" />}
      </div>
      {errors[type] && <span className={`paragraph-xsmall ${theme.padding}`}>{errors[type].message}</span>}
    </article>
  );
};
