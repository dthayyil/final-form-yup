import { Form, Field } from 'react-final-form'

const onSubmit = async (values: any) => {;
    window.alert(JSON.stringify(values));
  }

export const MyForm = () => (
  <Form
    onSubmit={onSubmit}
   // validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div> 
        <div>
          <label>Last Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div> 
        <div>
          <label>Phone Number</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div> 

        <button type="submit">Submit</button>
      </form>
    )}
  />
)