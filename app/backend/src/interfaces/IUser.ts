import { z } from 'zod';

const UserZodSchema = z.object({
  username: z.string({
    required_error: 'username is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Molor must be 3 or more characters long' }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'Color must be a string',
  }),
});

export type IUser = z.infer<typeof UserZodSchema>;

export { UserZodSchema };
