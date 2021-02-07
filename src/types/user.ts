import type { Asserts } from 'yup'; 
import { userSchema } from '../validation/UserSchema';

export interface User extends Asserts<typeof userSchema> {}
