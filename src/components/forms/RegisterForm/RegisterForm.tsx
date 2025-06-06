import { useForm } from "react-hook-form";
import { RegisterFormData } from "../RegisterFormData";
import { FormInput } from "../FormInput/FormInput";
import { FormCheckbox } from "../FormCheckbox/FormCheckbox";
import { FormSelect } from "../FormSelect/FormSelect";
import theme from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<RegisterFormData>({
    mode: "onChange", // Validate on every change (good for testing)
  });

  // Form submission handler - just logs data for now
  const registerCard = (data: RegisterFormData) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className={`${theme.padding_special} ${theme.testformcontainer}`}>
      <section className={theme.claim__container}>
        <h2 className="display-medium">Registra tu tarjeta</h2>
        <h3 className="display-large">ASEGURA TUS VIAJES</h3>
      </section>

      <form onSubmit={handleSubmit(registerCard)} noValidate>
        <section className={theme.testformcontainer}>
          <FormInput type="cardNumber" leadingIcon="Card" register={register} errors={errors} required={true} />

          <FormSelect leadingIcon="User" type="documentType" control={control} errors={errors} required={true} />

          <FormInput type="documentNumber" leadingIcon="Id" register={register} errors={errors} required={true} />

          <FormInput type="firstName" leadingIcon="User" register={register} errors={errors} required={true} />

          <FormInput type="lastName" leadingIcon="User" register={register} errors={errors} required={true} />

          <FormInput type="phone" leadingIcon="Phone" register={register} errors={errors} required={false} />

          <FormInput type="mail" leadingIcon="Mail" register={register} errors={errors} required={false} />

          <FormCheckbox type="privacy" register={register} errors={errors} watch={watch} required={false} />
        </section>

        <section className="submit-section">
          <button type="submit" disabled={!isValid} className={`label-button ${theme["submit-button-test"]}`}>
            REGISTRAR TARJETA
          </button>
        </section>
      </form>
    </div>
  );
};
