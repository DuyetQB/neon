import * as yup from "yup";

export const schemaValidateSignUp = yup.object().shape({
  name: yup.string().required("The name field is required"),
  email: yup.string().required("The email format is required"),
  password: yup
    .string()
    .required("The password field is required.")
    .min(8, "The password must be at least 8 characters."),
});
