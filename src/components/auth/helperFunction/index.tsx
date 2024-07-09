import {
  emailRegex,
  usernameRegex,
  passwordRegex,
} from "components/auth/constant";

export interface LoginFormValues {
  username: string;
  password: string;
}

export const validateUsernameOrEmail = (value: string): string | boolean => {
  if (!value) return "Username or Email is required";
  if (!value.includes("@")) {
    if (!usernameRegex.test(value)) {
      return "Invalid username format";
    }
  } else {
    if (!emailRegex.test(value)) {
      return "Invalid email format";
    }
  }
  return true;
};

export const loginFormFields = [
  {
    name: "username",
    placeholder: "Email or Username",
    rules: {
      required: "Username or Email is required",
      validate: validateUsernameOrEmail,
    },
    type: "text",
  },
  {
    name: "password",
    placeholder: "Password",
    rules: {
      required: "Password is required",
      pattern: {
        value: passwordRegex,
        message:
          "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
      },
    },
    type: "password",
    icon: {
      closeEye: "icon-eye-hidden",
      openEye: "icon-eye",
    },
  },
];

export const registerFormFields = [
  {
    name: "email",
    placeholder: "Email",
    rules: {
      required: "Email is required",
      pattern: {
        value: emailRegex,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "username",
    placeholder: "Username",
    rules: {
      required: "Username is required",
      minLength: {
        value: 3,
        message: "Username must be at least 3 characters long",
      },
    },
  },
  {
    name: "password",
    placeholder: "Password",
    rules: {
      required: "Password is required",
      pattern: {
        value: passwordRegex,
        message:
          "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
      },
    },
    icon: {
      closeEye: "icon-eye-hidden",
      openEye: "icon-eye",
    },
    type: "password",
  },
];
