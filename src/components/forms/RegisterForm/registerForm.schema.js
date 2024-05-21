import { z } from "zod";

const registerFormSchema = z
    .object({
        name: z.string().min(1, "Esse campo é obrigatório"),
        email: z
            .string()
            .min(1, "Esse campo é obrigatório")
            .email("Forneça um e-mail válido"),
        password: z
            .string()
            .min(8, "A senha deve conter pelo menos 8 (oito) caracteres")
            .regex(
                /[a-z]+/,
                "A senha deve conter no mínimo 1 (uma) letra minúscula"
            )
            .regex(
                /[A-Z]+/,
                "A senha deve conter no mínimo 1 (uma) letra maiúscula"
            )
            .regex(/[0-9]+/, "A senha deve conter no mínimo 1 (um) número")
            .regex(
                /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
                "A senha deve conter pelo menos um caracter especial."
            ),
        confirmPassword: z.string().min(1, "Esse campo é obrigatório"),
        bio: z.string().min(1, "Esse campo é obrigatório"),
        contact: z.string().min(1, "Esse campo é obrigatório"),
        course_module: z.string().min(1, "Esse campo é obrigatório"),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem",
        path: ["confirmPassword"],
    });

export default registerFormSchema;
