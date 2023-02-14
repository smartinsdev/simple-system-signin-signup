import { TypeFieldValidate } from "@/types/customTypes";

export const typeFieldValidate: TypeFieldValidate = {
  email: {
    regex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email is not valid",
  },
  username: {
    regex: /^[A-Za-z][A-Za-z0-9_]{5,29}$/,
    message: "Username invalid",
  },
  password: {
    regex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    message:
      "Minimum 6 characters, at least one uppercase letter, one number and one special character",
  },
};
