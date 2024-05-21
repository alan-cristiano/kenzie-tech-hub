import { z } from "zod";

const createTechModalSchema = z.object({
    title: z.string().min(1, "Insira o nome da tecnologia"),
    status: z.string().min(1, "Selecione o status atual"),
});

export default createTechModalSchema;
