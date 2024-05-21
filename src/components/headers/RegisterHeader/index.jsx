import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import style from "./style.module.scss";

const RegisterHeader = () => {
    return (
        <header className={style.headerContent}>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <Link className="button medium" to={"/"}>
                Voltar
            </Link>
        </header>
    );
};

export default RegisterHeader;
