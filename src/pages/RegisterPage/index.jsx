import RegisterForm from "../../components/forms/RegisterForm";
import RegisterHeader from "../../components/headers/RegisterHeader";

const RegisterPage = () => {
    return (
        <div className="container">
            <RegisterHeader />
            <main className="main-register__content">
                <h1 className="title one">Crie sua conta</h1>
                <p className="headline bold">Rápido e grátis, vamos nessa!</p>
                <RegisterForm />
            </main>
        </div>
    );
};

export default RegisterPage;
