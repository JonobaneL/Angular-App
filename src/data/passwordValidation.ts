export const easyValidation = [
  /^[A-Za-z]+$/,
  /^\d+$/,
  /^[!@#$%^&*(),.?":{}|<>]+$/,
];
export const mediumValidation = [
  /^[A-Za-z!@#$%^&*(),.?":{}|<>]+$/,
  /^[0-9!@#$%^&*(),.?":{}|<>]+$/,
  /^[A-Za-z0-9]+$/,
];
export const strongValidation =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
