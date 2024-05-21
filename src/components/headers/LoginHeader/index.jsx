import Logo from "../../../assets/Logo.svg";
import style from "./style.module.scss";

const LoginHeader = () => {
    return (
        <header className={style.headerContent}>
            <img src={Logo} alt="Logo Kenzie Hub" />
        </header>
    );
};

export default LoginHeader;
