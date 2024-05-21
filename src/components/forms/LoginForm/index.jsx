import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "../../../providers/UserContext";
import loginFormSchema from "./loginForm.schema";
import Button from "../../../fragments/Button";
import Input from "../../../fragments/Input";
import InputPassword from "../../../fragments/InputPassword";

const LoginForm = () => {
    const { userLogin } = useUserContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const submit = (formData) => {
        userLogin.mutate(formData);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="form__content"
            noValidate
        >
            <Input
                data-testid="user-email"
                type={"text"}
                {...register("email")}
                label={"E-mail"}
                id={"email"}
                placeholder={"Digite seu e-mail"}
                error={errors.email}
            />
            <InputPassword
                data-testid="user-password"
                {...register("password")}
                label={"Senha"}
                id={"password"}
                placeholder={"Digite sua senha"}
                error={errors.password}
            />
            <Button text={"Entrar"} className={"button"} type={"submit"} />
        </form>
    );
};

export default LoginForm;
