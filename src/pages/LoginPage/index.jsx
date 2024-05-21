import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import LoginHeader from "../../components/headers/LoginHeader";

const LoginPage = () => {
    return (
        <div className="container">
            <LoginHeader />
            <main className="main-login__content">
                <section className="form__content">
                    <h1 className="title one">Login</h1>
                    <LoginForm />
                </section>
                <section className="register__content">
                    <div>
                        <p className="headline bold">
                            Ainda não possui uma conta?
                        </p>
                        <Link
                            data-testid="user-register-button"
                            className="button disabled"
                            to={"/register"}
                        >
                            Cadastre-se
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LoginPage;
