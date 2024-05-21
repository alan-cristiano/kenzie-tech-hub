import { z } from "zod";

const editTechModalSchema = z.object({
    status: z.string().min(1, "Selecione o status atual"),
});

export default editTechModalSchema;
