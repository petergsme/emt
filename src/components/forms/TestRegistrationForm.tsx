import { useForm } from 'react-hook-form';
import { FormInput, RegisterFormData } from './FormInput';
import { FormCheckbox } from './FormCheckbox';
import { FormSelect } from './FormSelect';
import theme from './testRegistrationForm.module.scss';

export const TestRegistrationForm = () => {
  // useForm hook manages the entire form state
  const {
    register, // Function to register inputs with validation
    handleSubmit, // Function to handle form submission
    formState: { errors, isValid }, // Form state including errors and validation status
    watch, // Function to watch field values (useful for debugging)
  } = useForm<RegisterFormData>({
    mode: 'onChange', // Validate on every change (good for testing)
  });

  // Form submission handler - just logs data for now
  const onSubmit = (data: RegisterFormData) => {
    console.log('Form submitted with data:', data);
    alert('Form submitted! Check console for data.');
  };

  // Optional: Watch all form values for debugging

  return (
    <div className={`${theme.padding_special} ${theme.testformcontainer}`}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Required Fields */}
        <section className={theme.testformcontainer}>
          <FormInput type="cardNumber" leadingIcon="Card" register={register} errors={errors} required={true} />

          <FormInput type="documentNumber" leadingIcon="Id" register={register} errors={errors} required={true} />

          <FormInput type="firstName" leadingIcon="User" register={register} errors={errors} required={true} />

          <FormInput type="lastName" leadingIcon="User" register={register} errors={errors} required={true} />

          <FormInput type="phone" leadingIcon="Phone" register={register} errors={errors} required={false} />

          <FormInput type="mail" leadingIcon="Mail" register={register} errors={errors} required={false} />

          <FormCheckbox type="privacy" register={register} errors={errors} watch={watch} required={false} />

          <FormSelect leadingIcon="User" type="refill" register={register} errors={errors} required={true} />
        </section>
        {/* Submit Section */}
        <section className="submit-section">
          <button
            type="submit"
            disabled={!isValid}
            className={isValid ? 'submit-button enabled' : 'submit-button disabled'}
          >
            REGISTRAR TARJETA
          </button>

          {/* Debug info */}
          <p className="debug-info">Form is {isValid ? 'valid' : 'invalid'}</p>
        </section>
      </form>
    </div>
  );
};
