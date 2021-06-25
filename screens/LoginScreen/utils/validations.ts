// import { PASSWORD_COMPLEXITY } from 'Common/constants/defaultValues';

export const validateEmail = (email?: string) => {
  const errors: string[] = [];

  if (!email?.match("PASSWORD_COMPLEXITY"))
    errors.push("Please enter a valid email address");

  return errors;
};

export const validatePassword = (password?: string) => {
  const errors: string[] = [];

  if (!password?.match("PASSWORD_COMPLEXITY"))
    errors.push(
      "Password needs to be more than 8 character with upper and lower case letter, a number and a symbol"
    );

  return errors;
};

export const safeEmail = (email: string) =>
  email.replace(" ", "").toLowerCase();
