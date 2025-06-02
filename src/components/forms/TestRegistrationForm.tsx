import { useForm } from "react-hook-form";
import { FormInput, RegisterFormData } from "./FormInput";
import theme from "./testRegistrationForm.module.scss";
// import styles from './testRegistrationForm.module.scss';

/**
 * Simple form component for testing FormInput components
 * This is just for development/styling purposes, not the final modal form
 */
export const TestRegistrationForm = () => {
  // useForm hook manages the entire form state
  const {
    register, // Function to register inputs with validation
    handleSubmit, // Function to handle form submission
    formState: { errors, isValid }, // Form state including errors and validation status
    watch, // Function to watch field values (useful for debugging)
  } = useForm<RegisterFormData>({
    mode: "onChange", // Validate on every change (good for testing)
  });

  // Form submission handler - just logs data for now
  const onSubmit = (data: RegisterFormData) => {
    console.log("Form submitted with data:", data);
    alert("Form submitted! Check console for data.");
  };

  // Optional: Watch all form values for debugging
  console.log("Current form values:", watch());

  return (
    <div className={theme.testformcontainer}>
      <h2>Registration Form - Testing Component</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Required Fields */}
        <section className={theme.testformcontainer}>
          <h3>Required Fields</h3>

          <FormInput
            type="cardNumber"
            leadingIcon="Bus" // Replace with your actual card icon name
            register={register}
            errors={errors}
            required={true}
          />

          <FormInput
            type="documentNumber"
            leadingIcon="Bus" // Replace with your actual document icon name
            register={register}
            errors={errors}
            required={true}
          />

          <FormInput
            type="lastName"
            leadingIcon="User" // Replace with your actual user icon name
            register={register}
            errors={errors}
            required={true}
          />

          <FormInput
            type="phone"
            leadingIcon="Phone" // Replace with your actual phone icon name
            register={register}
            errors={errors}
            required={true}
          />
        </section>

        {/* Optional Fields */}
        <section>
          <h3>Optional Fields</h3>

          <FormInput
            type="firstName"
            leadingIcon="User"
            register={register}
            errors={errors}
            required={false} // This field is optional
          />

          <FormInput
            type="mail"
            leadingIcon="Mail" // Replace with your actual mail icon name
            register={register}
            errors={errors}
            required={false} // This field is optional
          />
        </section>

        {/* Submit Section */}
        <section className="submit-section">
          <button
            type="submit"
            disabled={!isValid}
            className={isValid ? "submit-button enabled" : "submit-button disabled"}
          >
            REGISTRAR TARJETA
          </button>

          {/* Debug info */}
          <p className="debug-info">Form is {isValid ? "valid" : "invalid"}</p>
        </section>
      </form>
    </div>
  );
};

/*
USAGE INSTRUCTIONS:

1. Replace icon names with your actual IconName values:
   - "CreditCard" → your card icon name
   - "Document" → your document icon name  
   - "User" → your user icon name
   - "Phone" → your phone icon name
   - "Mail" → your mail icon name

2. Import and use in your app:
   import { TestRegistrationForm } from './components/forms/TestRegistrationForm';
   
   function App() {
     return <TestRegistrationForm />;
   }
*/
