export interface CardProps {
  name: string;
  primaryDescription: string;
  altImage?: boolean;
  categories: string[];
  secondaryDescription: string;
  hasButton: boolean;
  buttonText?: string;
  additionalInfo: string[];
  hasNorms: boolean;
  normsURL?: string;
  price: string | string[];
  requiredDocuments?: string[];
  hasForm?: boolean;
  //   formURL?: string;
  rules?: string[];
  //   hasRegulations: boolean;

  hasAppointmentButton?: boolean;
  //   appointmentURL?: string;
}
