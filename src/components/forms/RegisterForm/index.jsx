import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "../../../providers/UserContext";
import registerFormSchema from "./registerForm.schema";
import Button from "../../../fragments/Button";
import Option from "../../../fragments/Option";
import Select from "../../../fragments/Select";
import Input from "../../../fragments/Input";

const RegisterForm = () => {
    const { userRegister } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const submit = ({ confirmPassword, ...rest }) => {
        userRegister.mutate(rest);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="form__content"
            noValidate
        >
            <Input
                data-testid="user-name"
                {...register("name")}
                label={"Nome"}
                id={"name"}
                placeholder={"Digite seu nome"}
                error={errors.name}
            />
            <Input
                data-testid="user-register-email"
                {...register("email")}
                label={"E-mail"}
                id={"email"}
                placeholder={"Digite seu e-mail"}
                error={errors.email}
            />
            <Input
                data-testid="user-register-password"
                {...register("password")}
                label={"Senha"}
                id={"password"}
                placeholder={"Digite sua senha"}
                type={"password"}
                error={errors.password}
            />
            <Input
                data-testid="user-register-confirm-password"
                {...register("confirmPassword")}
                label={"Confirmar senha"}
                id={"confirmPassword"}
                placeholder={"Digite novamente sua senha"}
                type={"password"}
                error={errors.confirmPassword}
            />
            <Input
                data-testid="user-bio"
                {...register("bio")}
                label={"Bio"}
                id={"bio"}
                placeholder={"Fale sobre você"}
                error={errors.bio}
            />
            <Input
                data-testid="user-contact"
                {...register("contact")}
                label={"Contato"}
                id={"contact"}
                placeholder={"Opção de contato"}
                error={errors.contact}
            />
            <Select
                data-testid="user-course-module"
                {...register("course_module")}
                label={"Módulo atual"}
                id={"course_module"}
                error={errors.course_module}
            >
                <Option value={""} text={"Selecione"} />
                <Option
                    value={"Primeiro módulo (Introdução ao Front End)"}
                    text={"Primeiro módulo (Introdução ao Front End)"}
                />
                <Option
                    value={"Segundo módulo (Front End Avançado)"}
                    text={"Segundo módulo (Front End Avançado)"}
                />
                <Option
                    value={"Terceiro módulo (Introdução ao Back End)"}
                    text={"Terceiro módulo (Introdução ao Back End)"}
                />
                <Option
                    value={"Quarto módulo (Back End Avançado)"}
                    text={"Quarto módulo (Back End Avançado)"}
                />
            </Select>
            <Button
                className={"button negative"}
                text={"Cadastrar"}
                type={"submit"}
            />
        </form>
    );
};

export default RegisterForm;
