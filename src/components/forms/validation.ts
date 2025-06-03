export const patterns = {
  cardNumber: /^\d{12}$/,
  documentNumber: /^[a-zA-Z0-9]+$/,
  firstName: /^[a-zA-ZáéíóúñÑ\s]+$/,
  lastName: /^[a-zA-ZáéíóúñÑ\s]+$/,
  phone: /^\d+$/,
  mail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  privacy: undefined,
  bill: undefined,
};
