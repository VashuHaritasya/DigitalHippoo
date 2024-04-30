import { z } from "zod";

export const AuthcredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password should be at least 8 characters long.",
  }),
});

export type TAuthcredentialsValidator = z.infer<
  typeof AuthcredentialsValidator
>;
