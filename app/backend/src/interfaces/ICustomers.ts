import { z } from 'zod';

const CustomerZodSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty(),
  cpf: z.string().nonempty(),
  phone: z.string().nonempty(),
  address: z.string().nonempty(),
});

export type ICustomers = z.infer<typeof CustomerZodSchema>;

export { CustomerZodSchema };