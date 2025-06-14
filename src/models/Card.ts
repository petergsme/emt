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
  price: string | string[];
  requiredDocuments?: string[];
  hasForm?: boolean;
  //   formURL?: string;
  rules?: string[];
  //   hasRegulations: boolean;
  //   RegulationsURL?: string;
  hasAppointmentButton?: boolean;
  //   appointmentURL?: string;
}
