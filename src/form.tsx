import { Form, Field } from 'react-final-form';
import { userSchema } from './validation/UserSchema'
import { setIn } from 'final-form';
import { User } from './types/user'; 
import { getFakeData } from 'yup-faker';


const onSubmit = async (values: User) => { 
  const validated: User = userSchema.validateSync(values); 
  window.alert(JSON.stringify(validated));
  }
const validateFormValues = (schema: any  ) => async (values:any) => {
  if (typeof schema === 'function') {
    schema = schema();
  }
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err) {
    const errors = err.inner.reduce((formError:any, innerError:any) => {
      return setIn(formError, innerError.path, innerError.message);
    }, {});

    return errors;
  }
};
const validate = validateFormValues(userSchema);

// const InitialValues : User = {
//   firstName : 'Deepak',
//   lastNamne : 'Thayyil',
//   phoneNumber : 8147204209,
// }

const InitialValues = getFakeData(userSchema);


export const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={InitialValues}
    render={({ handleSubmit,submitError }) => (
      <form onSubmit={handleSubmit}> 
        <div>
          <Field name="firstName">
            {({ input, meta }) => (
              <div>
                <label>firstName</label>
                <input {...input} type="text" placeholder="firstName" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div> 
        <div>
        <Field name="lastNamne">
            {({ input, meta }) => (
              <div>
                <label>lastNamne</label>
                <input {...input} type="text" placeholder="lastNamne" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div> 
        <div>
        <Field name="phoneNumber">
            {({ input, meta }) => (
              <div>
                <label>phoneNumber</label>
                <input {...input} type="text" placeholder="phoneNumber" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>email</label>
                <input {...input} type="email" placeholder="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div> 
        {submitError && <div className="error">{submitError}</div>}
        <button type="submit">Submit</button>
      </form>
    )}
  />
)