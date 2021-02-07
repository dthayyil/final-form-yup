import * as yup from 'yup';

export const userSchema = yup.object({
    firstName: yup.string().required(),
    lastNamne: yup.string().notRequired(),
    phoneNumber: yup.number()
    .required()
    // .matches(/^[0-9]+$/, "Must be only digits")
    // .min(10, 'Must be exactly 5 digits')
    // .max(10, 'Must be exactly 5 digits')
});