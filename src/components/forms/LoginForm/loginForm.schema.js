import { z } from "zod";

const loginFormSchema = z.object({
    email: z
        .string()
        .email("Insira um e-mail válido")
        .min(1, "Insira um e-mail válido"),
    password: z.string().min(1, "Insira uma senha válida"),
});

export default loginFormSchema;
