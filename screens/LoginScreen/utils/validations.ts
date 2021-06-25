export const PASSWORD_VALIDATION_ERROR = "Invalid Password :(";

const EMAIL_COMPLEXITY = "^S+@S+$";
export const EMAIL_VALIDATION_ERROR = "Invalid email :(";

export const isValidEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isValidPassword = (password: string) => {
  if (password.length < 8) return false;
  var hasUpperCase = /[A-Z]/.test(password);
  var hasLowerCase = /[a-z]/.test(password);
  var hasNumbers = /\d/.test(password);
  var hasNonalphas = /\W/.test(password);
  if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
    return true;
  } else return false;
};

export const safeEmail = (email: string) =>
  email.replace(" ", "").toLowerCase();
