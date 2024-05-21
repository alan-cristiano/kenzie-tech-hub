import Logo from "../../../assets/Logo.svg";
import Button from "../../../fragments/Button";
import style from "./style.module.scss";
import { useUserContext } from "../../../providers/UserContext";

const DashboardHeader = () => {
    const { logoutUser } = useUserContext();

    return (
        <header data-testid="dashboard-header" className={style.headerContent}>
            <img src={Logo} alt="Logo Kenzie Hub" />
            <Button
                logoutUser={logoutUser}
                className="button medium"
                text={"Sair"}
            />
        </header>
    );
};

export default DashboardHeader;
