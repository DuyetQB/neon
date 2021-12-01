import * as yup from "yup";

export const schemaValidateSignIn = yup.object().shape({
  email: yup.string().required("The email format is required"),
  password: yup
    .string()
    .required("The password field is required")
    .min(8, "The password must be at least 8 characters."),
});
